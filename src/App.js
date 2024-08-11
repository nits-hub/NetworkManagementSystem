import './App.css';
import Navbar from './components/common/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route, useLocation } from 'react-router-dom';
import OpenRoute from './components/core/Auth/OpenRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/core/Auth/PrivateRoute';
import Dashboard from './pages/Dashboard';
import MyProfile from './components/core/Dashboard/MyProfile';
import { useState } from 'react';
import CreateEmployee from './components/core/Dashboard/department/CreateEmployee';
import ViewEmployee from './components/core/Dashboard/department/ViewEmployee';
import Error from './pages/Error';
import RaiseComplaint from './components/core/Dashboard/Employee/RaiseComplaint';
import ComplaintsTable from './components/core/Dashboard/department/ComplaintsTable';
import ResetPassword from './pages/ResetPassword';
import ConfirmOTP from './pages/ConfirmOTP';
import Footer from './components/common/Footer';
import ViewComplaintStatus from './components/core/Dashboard/department/ViewEmployee/ViewComplaintStatus';
import AdminDashboard from './components/core/Dashboard/Admin/AdminDashboard';
import AdminViewComplaints from './components/core/Dashboard/Admin/AdminViewComplaints';

function App() {
  // const location = useLocation();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(prev => !prev); 
  };


  return (
    <div className="w-screen min-h-screen flex flex-col font-inter">
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<OpenRoute><Login /></OpenRoute>} />
        <Route path="/signup" element={<OpenRoute><Signup /></OpenRoute>} />
        <Route path="/forgot-password" element={<OpenRoute><ForgotPassword /></OpenRoute>} />
        <Route path="/confirmOTP" element={<OpenRoute><ConfirmOTP /></OpenRoute>} />
        <Route path="/reset-password" element={<OpenRoute><ResetPassword /></OpenRoute>} />
        <Route path="*" element={<Error />} />

        <Route 
          element={
            <PrivateRoute>
              <Dashboard handleDrawerOpen={handleDrawerOpen} open={open} />
            </PrivateRoute>
          }
        >

          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/department/employee" element={<CreateEmployee />} />
          <Route path="dashboard/department/view-employee" element={<ViewEmployee />} />
          <Route path="/dashboard/department/employee/complaint" element={<RaiseComplaint />} />
          <Route path="/dashboard/department/employee/viewRaisedComplaint" element={<ViewComplaintStatus />} />
          <Route path="/dashboard/department/view-complaints" element={<ComplaintsTable />} />

          {/* admin */}
          {/* <Route path="/dashboard/admin/department" element={<AdminDepartment />} />
          <Route path="/dashboard/admin/employee" element={<AdminEmployee />} /> */}
          <Route path="dashboard/admin/dash" element={<AdminDashboard />} />
          <Route path="dashboard/admin/dash/department/getComplaints" element={<AdminViewComplaints />} />

        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;