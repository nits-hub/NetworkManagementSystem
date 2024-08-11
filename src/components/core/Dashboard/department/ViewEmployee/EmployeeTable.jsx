import React, { useEffect, useState, useCallback } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Button, IconButton, Modal, Box, TextField, Avatar } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartmentEmployees, updateDepartmentEmployee, deleteDepartmentEmployee } from '../../../../../services/operations/authAPI';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '80vw', // Adjust as necessary
  maxHeight: '50vh', // Adjust as necessary
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  overflowY: 'auto', // Make content scrollable if it exceeds max height
};

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const fetchEmployees = useCallback(async () => {
    try {
      const response = await dispatch(getDepartmentEmployees(token));
      if (response?.data?.success) {
        setEmployees(response.data.department.employees);
      } else {
        console.error('Failed to fetch employees:', response?.data?.message);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }, [dispatch, token]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const handleOpen = (employee) => {
    setIsEdit(true);
    setCurrentEmployee(employee);
    setOpen(true);
  };
  

  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    console.log("currentEmployee in handleDelete: ", currentEmployee);
    try {
      // Check if currentEmployee and its nested properties are defined
      if (!currentEmployee || !currentEmployee.employeeDetails || !currentEmployee.pcDetails) {
        console.error('Current employee data is incomplete:', currentEmployee);
        return;
      }
  
      const { 
        _id: empId, 
        department: deptId,
        pcDetails: { _id: pcDetailsId },
        employeeDetails: { _id: empUserId }
      } = currentEmployee;
  
      console.log("handleDelete: ", currentEmployee);
      console.log(empId, deptId, pcDetailsId, empUserId);
  
      const response = await dispatch(deleteDepartmentEmployee({
        empId,
        deptId,
        pcDetailsId,
        empUserId
      }, token));
  
      if (response?.data?.success) {
        setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp._id !== empId));
        setConfirmDeleteOpen(false);
      } else {
        console.error('Failed to delete employee:', response?.data?.message);
      }
    } catch (error) {
      console.error('There was an error deleting the employee!', error);
    }
  };
  

  const handleUpdate = async () => {
    try {
      await dispatch(updateDepartmentEmployee(currentEmployee, token));
      setEmployees((prevEmployees) => prevEmployees.map((emp) => (emp._id === currentEmployee._id ? currentEmployee : emp)));
      handleClose();
    } catch (error) {
      console.error('There was an error updating the employee!', error);
    }
  };

  const columns = [
    {
      accessorKey: 'employeeDetails.image',
      header: 'Avatar',
      Cell: ({ row }) => (
        <Avatar src={row.original.employeeDetails.image} alt={`${row.original.employeeDetails.firstName} ${row.original.employeeDetails.lastName}`} />
      ),
    },
    { accessorKey: 'employeeDetails.firstName', header: 'First Name' },
    { accessorKey: 'employeeDetails.lastName', header: 'Last Name' },
    { accessorKey: 'employeeDetails.gender', header: 'Gender' },
    { accessorKey: 'employeeDetails.contactNumber', header: 'Contact Number' },
    { accessorKey: 'employeeDetails.email', header: 'Email' },
    { accessorKey: 'position', header: 'Position' },
    { accessorKey: 'dateOfJoining', header: 'Date of Joining' },
    { accessorKey: 'pcDetails.ipAddress', header: 'IP Address' },
    { accessorKey: 'pcDetails.macAddress', header: 'MAC Address' },
    { accessorKey: 'pcDetails.operatingSystemType', header: 'Operating System' },
    { accessorKey: 'pcDetails.isTrendAvInstalled', header: 'Trend AV Installed' },
    {
      accessorKey: 'actions',
      header: 'Actions',
      Cell: ({ row }) => (
        <>
          <IconButton onClick={() => handleOpen(row.original)}>
            <Edit />
          </IconButton>
          <IconButton 
            onClick={() => {
              setCurrentEmployee(row.original);
              setConfirmDeleteOpen(true);
            }}
          >
            <Delete />
          </IconButton>
        </>
      ),
    }
    
  ];

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={employees}
        enableRowActions
      />
      
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <h2>{isEdit ? 'Edit Employee' : 'Add Employee'}</h2>
          <TextField
            label="First Name"
            value={currentEmployee?.employeeDetails?.firstName || ''}
            onChange={(e) => setCurrentEmployee({
              ...currentEmployee,
              employeeDetails: {
                ...currentEmployee.employeeDetails,
                firstName: e.target.value,
              },
            })}
            fullWidth
          />
          <TextField
            label="Last Name"
            value={currentEmployee?.employeeDetails?.lastName || ''}
            onChange={(e) => setCurrentEmployee({
              ...currentEmployee,
              employeeDetails: {
                ...currentEmployee.employeeDetails,
                lastName: e.target.value,
              },
            })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Gender"
            value={currentEmployee?.employeeDetails?.gender || ''}
            onChange={(e) => setCurrentEmployee({
              ...currentEmployee,
              employeeDetails: {
                ...currentEmployee.employeeDetails,
                gender: e.target.value,
              },
            })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Contact Number"
            value={currentEmployee?.employeeDetails?.contactNumber || ''}
            onChange={(e) => setCurrentEmployee({
              ...currentEmployee,
              employeeDetails: {
                ...currentEmployee.employeeDetails,
                contactNumber: e.target.value,
              },
            })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Email"
            value={currentEmployee?.employeeDetails?.email || ''}
            onChange={(e) => setCurrentEmployee({
              ...currentEmployee,
              employeeDetails: {
                ...currentEmployee.employeeDetails,
                email: e.target.value,
              },
            })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Position"
            value={currentEmployee?.position || ''}
            onChange={(e) => setCurrentEmployee({
              ...currentEmployee,
              position: e.target.value,
            })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Date of Joining"
            type="date"
            value={currentEmployee?.dateOfJoining?.split('T')[0] || ''}
            onChange={(e) => setCurrentEmployee({
              ...currentEmployee,
              dateOfJoining: e.target.value,
            })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="IP Address"
            value={currentEmployee?.pcDetails?.ipAddress || ''}
            onChange={(e) => setCurrentEmployee({
              ...currentEmployee,
              pcDetails: {
                ...currentEmployee.pcDetails,
                ipAddress: e.target.value,
              },
            })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="MAC Address"
            value={currentEmployee?.pcDetails?.macAddress || ''}
            onChange={(e) => setCurrentEmployee({
              ...currentEmployee,
              pcDetails: {
                ...currentEmployee.pcDetails,
                macAddress: e.target.value,
              },
            })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Operating System"
            value={currentEmployee?.pcDetails?.operatingSystemType || ''}
            onChange={(e) => setCurrentEmployee({
              ...currentEmployee,
              pcDetails: {
                ...currentEmployee.pcDetails,
                operatingSystemType: e.target.value,
              },
            })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Trend AV Installed"
            value={currentEmployee?.pcDetails?.isTrendAvInstalled || ''}
            onChange={(e) => setCurrentEmployee({
              ...currentEmployee,
              pcDetails: {
                ...currentEmployee.pcDetails,
                isTrendAvInstalled: e.target.value,
              },
            })}
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button onClick={handleUpdate} variant="contained" sx={{ mt: 2 }}>Update</Button>
        </Box>
      </Modal>
      
      <Modal open={confirmDeleteOpen} onClose={() => setConfirmDeleteOpen(false)}>
        <Box sx={modalStyle}>
          <h2>Confirm Delete</h2>
          <p>Are you sure you want to delete this employee?</p>
          <Button onClick={handleDelete} variant="contained" color="error">Delete</Button>
          <Button onClick={() => setConfirmDeleteOpen(false)} variant="outlined">Cancel</Button>
        </Box>
      </Modal>
    </>
  );
};

export default EmployeeTable;
