import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardData } from '../../../../services/operations/authAPI'; // Ensure the correct path
import { CircularProgress } from '@mui/material';

export default function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalApprovedDepartments: 0,
    totalUnapprovedDepartments: 0,
    totalApprovedEmployees: 0,
    totalUnapprovedEmployees: 0,
    totalComplaintsFiled: 0,
    totalComplaintsResolved: 0,
  });
  const [loading, setLoading] = useState(true);

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before starting the fetch
      try {
        const response = await dispatch(getDashboardData(token));
        if (response.data.success) {
          setDashboardData(response.data.data); // Update this line to set the correct data object
        } else {
          console.error('Failed to fetch dashboard data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchData();
  }, [dispatch, token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Approved Departments</h3>
          <p className="text-2xl font-bold text-gray-900">{dashboardData.totalApprovedDepartments}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Unapproved Departments</h3>
          <p className="text-2xl font-bold text-gray-900">{dashboardData.totalUnapprovedDepartments}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Approved Employees</h3>
          <p className="text-2xl font-bold text-gray-900">{dashboardData.totalApprovedEmployees}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Unapproved Employees</h3>
          <p className="text-2xl font-bold text-gray-900">{dashboardData.totalUnapprovedEmployees}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Complaints Filed</h3>
          <p className="text-2xl font-bold text-gray-900">{dashboardData.totalComplaintsFiled}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Complaints Resolved</h3>
          <p className="text-2xl font-bold text-gray-900">{dashboardData.totalComplaintsResolved}</p>
        </div>
      </div>
    </div>
  );
}
