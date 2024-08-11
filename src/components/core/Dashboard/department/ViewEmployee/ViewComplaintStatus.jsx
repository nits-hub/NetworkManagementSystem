import React, { useEffect, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { useDispatch, useSelector } from 'react-redux';
import { getComplaintStatus, deleteRaisedComplaint } from '../../../../../services/operations/authAPI'; // Ensure deleteComplaint is imported

export default function ViewComplaintStatus() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await dispatch(getComplaintStatus(token));
        if (response.data.success) {
          const sortedComplaints = response.data.emp.complaintsRaised.sort(
            (a, b) => new Date(b.complaintTime) - new Date(a.complaintTime)
          );
          setComplaints(sortedComplaints);
        }
      } catch (error) {
        console.error('Error fetching complaints:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, [dispatch, token]);

  const handleDelete = async (complaintId) => {
    try {
      const response = await dispatch(deleteRaisedComplaint(token, complaintId));
      if (response.data.success) {
        setComplaints((prevComplaints) =>
          prevComplaints.filter((complaint) => complaint._id !== complaintId)
        );
      }
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };

  const columns = [
    {
      accessorKey: 'serialNumber',
      header: 'Serial Number',
      Cell: ({ row }) => row.index + 1,
    },
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorKey: 'description',
      header: 'Description',
    },
    {
      accessorKey: 'isComplaintResolved',
      header: 'Is Complaint Resolved',
      Cell: ({ cell }) => (cell.getValue() ? 'Yes' : 'No'),
    },
    {
      accessorKey: 'complaintTime',
      header: 'Complaint Time',
      Cell: ({ cell }) => new Date(cell.getValue()).toLocaleString(),
    },
    {
      accessorKey: 'complaintResolvedTime',
      header: 'Complaint Resolved Time',
      Cell: ({ row }) => {
        const isResolved = row.original.isComplaintResolved;
        return isResolved
          ? new Date(row.original.updatedAt).toLocaleString()
          : 'Not Resolved';
      },
    },
    {
      accessorKey: 'actions',
      header: 'Actions',
      Cell: ({ row }) => (
        <button
          className="px-4 py-2 text-white bg-red-500 rounded"
          onClick={() => handleDelete(row.original._id)}
        >
          Delete
        </button>
      ),
    },
  ];

  const getRowProps = (row) => {
    return {
      className: row.original.isComplaintResolved ? 'resolved-row' : 'unresolved-row',
    };
  };

  return (
    <div>
      <h2 className="mb-14 text-3xl font-medium text-richblack-5">Complaint Status</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MaterialReactTable columns={columns} data={complaints} getRowProps={getRowProps} />
      )}
    </div>
  );
}
