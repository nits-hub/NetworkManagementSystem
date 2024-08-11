import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState, } from 'react';

export default function UserForm({userForm, setUserForm, handleOnUserFormDataChange, accountType}) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
        {/* name */}
        <div className='mt-3 flex flex-col gap-1'>
            <label className='text-[18px] font-semibold'>HOD Name</label>
            <div className='flex w-full gap-4'>
                <input className='w-1/2 border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100'
                    onChange={handleOnUserFormDataChange}
                    type='text' name='firstName' value={userForm.firstName} placeholder='Enter first name' />

                <input className='w-1/2 border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100'
                    onChange={handleOnUserFormDataChange}
                    type='text' name='lastName' value={userForm.lastName} placeholder='Enter last name' />
            </div>
        </div>

        {/* gender & mobile number */}
        <div className='mt-3 flex w-full gap-4'>

            <div className='w-1/2'>
                <p className='text-[18px] font-semibold'>Gender</p>
                <select className='w-full border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100'
                    name="gender"
                    value={userForm.gender}
                    onChange={handleOnUserFormDataChange}
                    >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
            </div>

            <div className='w-1/2 flex flex-col'>
                <label  className='text-[18px] font-semibold' htmlFor='contactNumber'>Contact Number</label>
                <input className='w-full border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100'
                onChange={handleOnUserFormDataChange}
                type='text' name='contactNumber' value={userForm.contactNumber} placeholder='Enter Mobile Number' />
            </div>

        </div>

        {/* email */}
        <div className='mt-3 flex flex-col'>
            <label className='text-[18px] font-semibold' htmlFor="email">Email</label>
            <input className='w-full border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100'
                onChange={handleOnUserFormDataChange}
                type='text' id='email' name='email' value={userForm.email} placeholder='Enter email' />
        </div>

        {/* password and confirm password */}
        <div className='flex w-full gap-2'>
            <label className='w-1/2 relative flex flex-col gap-2'>
                <p className='text-[18px] font-semibold' htmlFor='password'>Password</p>
                <input className='border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100' 
                onChange={handleOnUserFormDataChange}
                type={`${showPassword ? "text" : "password"}`} id='password' name='password' placeholder='Enter password'  value={userForm.password} />
                
                <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[50px] z-[10] cursor-pointer">
                {
                    showPassword ? (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    ) : (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) 
                }
                </span>

            </label>

            <label className='w-1/2 relative flex flex-col gap-2'>
                <p className='text-[18px] font-semibold' htmlFor='confirmPassword'>Confirm Password</p>
                <input className='border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100' 
                onChange={handleOnUserFormDataChange}
                type={`${showConfirmPassword ? "text" : "password"}`} id='confirmPassword' name='confirmPassword' placeholder='Enter confirm password'  value={userForm.confirmPassword} />
                
                <span onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute right-3 top-[50px] z-[10] cursor-pointer">
                {
                    showConfirmPassword ? (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    ) : (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) 
                }
                </span>
            </label>

            <input type='hidden' name='accountType' value={accountType} />
        </div>



  </div>
  )
}
