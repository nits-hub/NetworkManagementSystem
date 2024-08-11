import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { sendOTPtoEmail } from '../services/operations/authAPI';
import { useDispatch } from 'react-redux';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Store email in local storage
    localStorage.setItem('resetEmail', email);
    dispatch(sendOTPtoEmail(email, navigate));
  }

  return (
    <div className='p-5 w-full min-h-[calc(100vh-3.5rem)] flex items-center customGradient'>
      <div className='border-5 boxShadow flex flex-col gap-4 lg:w-2/5 sm:w-4/5 md:w-3/5 mx-auto p-5 animate__animated animate__zoomIn bg-white'>
        <h1 className='text-xl text-center font-bold'>Reset your password</h1>
        <p className='text-center'>No worries, we'll send you reset instructions</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input 
            type='email' 
            name='email' 
            value={email} 
            id='email' 
            placeholder='Enter your email' 
            onChange={handleEmailChange}
            className='border rounded p-2 w-full'
          />
          <button type='submit' className='w-full mt-[3rem] h-[3rem] text-2xl font-semibold text-white bg-[#017E7E] hover:bg-[#045D5D] transition-all delay-10 rounded-md'>
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
