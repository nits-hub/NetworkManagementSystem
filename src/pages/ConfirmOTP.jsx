import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { otpMatch } from '../services/operations/authAPI';

export default function ConfirmOTP() {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleOtpChange(event) {
    setOtp(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    // Retrieve the email from local storage
    const email = localStorage.getItem('resetEmail');

    console.log("OTP submitted:", otp);
    console.log("Email retrieved:", email);

    if (!email) {
      console.error('No email found in local storage');
      return;
    }

    // Dispatch OTP match action with email
    dispatch(otpMatch(otp, email, navigate));
  }

  return (
    <div className='p-5 w-full min-h-[calc(100vh-3.5rem)] flex items-center customGradient'>
      <div className='border-5 boxShadow flex flex-col gap-4 lg:w-2/5 sm:w-4/5 md:w-3/5 mx-auto p-5 animate__animated animate__zoomIn bg-white'>
        <h1 className='text-xl text-center font-bold'>Confirm OTP</h1>
        <p className='text-center'>Please enter the 6-digit OTP sent to your email</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="otp">OTP</label>
          <input 
            type='text' 
            name='otp' 
            value={otp} 
            id='otp' 
            placeholder='Enter your OTP' 
            maxLength='6'
            onChange={handleOtpChange}
            className='border rounded p-2 w-full text-center tracking-widest'
          />
          <button type='submit' className='w-full mt-5 h-12 text-xl font-semibold text-white bg-[#017E7E] hover:bg-[#045D5D] transition-all delay-10 rounded-md'>
            Submit OTP
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
