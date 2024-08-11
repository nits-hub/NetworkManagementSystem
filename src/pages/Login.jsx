import React, { useState } from 'react'
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import 'animate.css';
import { useDispatch } from 'react-redux';
import {login} from '../services/operations/authAPI';

export default function Login() {
  const [formData, setFormData] = useState({ email:"", password:""});
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    const {email, password} = formData;
    
    dispatch(login(email, password, navigate));
  }

  // customGradient bg-white
  return (
    <div className='p-5 w-full min-h-[calc(100vh-3.5rem)] flex items-center customGradient'>
      <div className='border-5 boxShadow flex flex-col gap-4 lg:w-2/5 sm:w-4/5 md:w-3/5 mx-auto p-5  animate__animated animate__zoomIn bg-white'>
        
        <div className=' flex items-center justify-center bg-[#045D5D] w-[4rem] h-[4rem] rounded-full mx-auto'>
            <IoIosLock className='text-white text-[2.5rem]' />
        </div>

        <h3 className='text-4xl text-center font-semibold'>Sign in</h3>

        <form  onSubmit={handleOnSubmit}>
          <label className='flex flex-col gap-2'>
            <p className='text-xl font-semibold' htmlFor='email'>Email</p>
            <input className='border h-[3rem] p-2 rounded-md hover:border-[#045D5D]' 
            onChange={handleOnChange}
            type='text' name='email' placeholder='Enter your email'  value={formData.email} />
          </label>

          <label className='relative flex flex-col gap-2'>
            <p className='text-xl font-semibold' htmlFor='password'>Password</p>
            <input className='border h-[3rem] p-2 rounded-md hover:border-[#045D5D]' 
            onChange={handleOnChange}
            type={`${showPassword ? "text" : "password"}`} id='password' name='password' placeholder='Enter your password'  value={formData.password} />
            
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

          <button className='w-full mt-[3rem] h-[3rem] text-2xl font-semibold text-white bg-[#017E7E]  hover:bg-[#045D5D] transition-all delay-10 rounded-md'>
            Log in
          </button>

        </form>

        <Link className='font-semibold hover:text-[#045D5D] transition-all delay-10 text-right' to="/forgot-password">Forgot Password?</Link>

      </div>
    </div>
  )
}