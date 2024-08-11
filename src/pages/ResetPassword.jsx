import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { resetPassword } from '../services/operations/authAPI'; // Adjust import as needed
import { useDispatch } from 'react-redux';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Retrieve the email from local storage
    const email = localStorage.getItem('resetEmail');

    if (!email) {
      setError('No email found in local storage');
      return;
    }

    console.log(email, newPassword);
    // Dispatch reset password action with email and new password
    dispatch(resetPassword(email, newPassword, navigate));
  };

  return (
    <div className='p-5 w-full min-h-[calc(100vh-3.5rem)] flex items-center customGradient'>
      <div className='border-5 boxShadow flex flex-col gap-4 lg:w-2/5 sm:w-4/5 md:w-3/5 mx-auto p-5 animate__animated animate__zoomIn bg-white'>
        <h1 className='text-xl text-center font-bold'>Reset Your Password</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <label htmlFor="new-password" className='text-sm font-semibold'>New Password</label>
          <input 
            type='password' 
            name='new-password' 
            value={newPassword} 
            id='new-password' 
            placeholder='Enter your new password' 
            onChange={handleNewPasswordChange}
            className='border rounded p-2 w-full'
          />
          <label htmlFor="confirm-password" className='text-sm font-semibold'>Confirm Password</label>
          <input 
            type='password' 
            name='confirm-password' 
            value={confirmPassword} 
            id='confirm-password' 
            placeholder='Confirm your new password' 
            onChange={handleConfirmPasswordChange}
            className='border rounded p-2 w-full'
          />
          {error && <p className='text-red-500'>{error}</p>}
          <button 
            type='submit' 
            className='w-full mt-5 h-12 text-xl font-semibold text-white bg-[#017E7E] hover:bg-[#045D5D] transition-all delay-10 rounded-md'
          >
            Reset Password
          </button>
          <div className="mt-3 flex gap-x-2 items-center">
            <IoMdArrowRoundBack />
            <NavLink to="/login">Back to login</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
