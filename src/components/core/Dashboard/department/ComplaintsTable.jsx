import React, { useEffect, useState, useCallback } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Button, IconButton, Avatar, Tooltip, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { CheckCircle, Forward, Delete } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartmentComplaints, resolveEmployeeComplaints, deleteEmployeeComplaints, forwardComplaintToAdmin } from '../../../../services/operations/authAPI';

const ComplaintTable = () => {
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaintId, setSelectedComplaintId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [actionType, setActionType] = useState(null);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const fetchComplaints = useCallback(async () => {
    console.log('Fetching complaints...');
    try {
      const response = await dispatch(getDepartmentComplaints(token));
      console.log('Response from getDepartmentComplaints:', response);
      if (response?.data?.success) {
        setComplaints(response.data.deptResponse.complaintsReceived);
      } else {
        console.error('Failed to fetch complaints:', response?.data?.message);
      }
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  }, [dispatch, token]);

  useEffect(() => {
    fetchComplaints();
  }, [fetchComplaints]);

  const handleResolve = async () => {
    setOpenDialog(false);
    try {
      const response = await dispatch(resolveEmployeeComplaints(selectedComplaintId, token));
      if (response?.data?.success) {
        setComplaints((prevComplaints) =>
          prevComplaints.map((comp) =>
            comp._id === selectedComplaintId ? { ...comp, isComplaintResolved: true } : comp
          )
        );
      }
    } catch (error) {
      console.error('Error resolving complaint:', error);
    }
  };

  const handleForward = async () => {
    setOpenDialog(false);
    try {
      const response = await dispatch(forwardComplaintToAdmin(selectedComplaintId, token));
      if (response?.data?.success) {
        console.log('Complaint forwarded to admin');
      }
    } catch (error) {
      console.error('Error forwarding complaint:', error);
    }
  };

  const handleDelete = async () => {
    setOpenDialog(false);
    console.log(selectedComplaintId);
    try {
      const response = await dispatch(deleteEmployeeComplaints(selectedComplaintId, token));
      if (response?.data?.success) {
        setComplaints((prevComplaints) =>
          prevComplaints.filter((comp) => comp._id !== selectedComplaintId)
        );
      }
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };

  const handleOpenDialog = (type, complaintId) => {
    setActionType(type);
    setSelectedComplaintId(complaintId);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setActionType(null);
    setSelectedComplaintId(null);
  };

  const columns = [
    {
      accessorKey: 'employeeId.employeeDetails.image',
      header: 'Avatar',
      Cell: ({ row }) => {
        const employeeDetails = row.original.employeeId?.employeeDetails;
        return (
          <Avatar
            src={employeeDetails?.image}
            alt={`${employeeDetails?.firstName || ''} ${employeeDetails?.lastName || ''}`}
          />
        );
      },
    },
    {
      accessorKey: 'employeeId.employeeDetails.firstName',
      header: 'First Name',
      Cell: ({ row }) => row.original.employeeId?.employeeDetails?.firstName || 'N/A',
    },
    {
      accessorKey: 'employeeId.employeeDetails.lastName',
      header: 'Last Name',
      Cell: ({ row }) => row.original.employeeId?.employeeDetails?.lastName || 'N/A',
    },
    { accessorKey: 'title', header: 'Complaint Title' },
    { accessorKey: 'description', header: 'Description' },
    {
      accessorKey: 'isComplaintResolved',
      header: 'Resolved',
      Cell: ({ row }) => (row.original.isComplaintResolved ? 'Yes' : 'No'),
    },
    {
      accessorKey: 'employeeId.employeeDetails.contactNumber',
      header: 'Contact Number',
      Cell: ({ row }) => row.original.employeeId?.employeeDetails?.contactNumber || 'N/A',
    },
    {
      accessorKey: 'employeeId.employeeDetails.email',
      header: 'Email',
      Cell: ({ row }) => row.original.employeeId?.employeeDetails?.email || 'N/A',
    },
    {
      accessorKey: 'actions',
      header: 'Actions',
      Cell: ({ row }) => (
        <>
          <Tooltip title="Set to resolve">
            <span>
              <IconButton
                onClick={() => handleOpenDialog('resolve', row.original._id)}
                disabled={row.original.isComplaintResolved}
              >
                <CheckCircle />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Forward to admin">
            <span>
              <IconButton
                onClick={() => handleOpenDialog('forward', row.original._id)}
                disabled={row.original.isComplaintResolved} // Disable forward button if complaint is resolved
              >
                <Forward />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Delete complaint">
            <span>
              <IconButton onClick={() => handleOpenDialog('delete', row.original._id)}>
                <Delete />
              </IconButton>
            </span>
          </Tooltip>
        </>
      ),
    },
  ];

  const getRowClassName = (row) => {
    return row.original.isComplaintResolved ? 'resolved-row' : 'unresolved-row';
  };

  return (
    <>
      <h2 className="mb-14 text-3xl font-medium text-richblack-5">View Employee Complaints</h2>

      <div className="ml-5">
        <MaterialReactTable
          columns={columns}
          data={complaints}
          enableRowActions
          getRowClassName={getRowClassName}
        />
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <Typography>
            {actionType === 'resolve' && 'Are you sure you want to set this complaint to resolved?'}
            {actionType === 'forward' && 'Are you sure you want to forward this complaint to the admin?'}
            {actionType === 'delete' && 'Are you sure you want to delete this complaint?'}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (actionType === 'resolve') handleResolve();
              if (actionType === 'forward') handleForward();
              if (actionType === 'delete') handleDelete();
            }}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ComplaintTable;
