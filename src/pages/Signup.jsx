import React, { useState } from 'react';
import DepartmentForm from '../components/signup/DepartmentForm';
import UserForm from '../components/signup/UserForm';
import toast from 'react-hot-toast';
import { GrOrganization } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createDepartment } from '../services/operations/authAPI';

export default function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [departmentFormData, setDepartmentFormData] = useState({
        departmentName: "",
        address: ""
    });

    function handleOnDepartmentDataChange(e) {
        setDepartmentFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    const [userForm, setUserForm] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        contactNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "Department",
        accountTypeId: "",
    });

    function handleOnUserFormDataChange(e) {
        setUserForm((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    function handleOnSubmit(e) {
        e.preventDefault();

        const { password, confirmPassword } = userForm;
        if (password !== confirmPassword) {
            toast.error("Password Do Not Match");
            return;
        }

        dispatch(createDepartment(departmentFormData, userForm, navigate));
    }

    return (
        <div className='p-5 w-full min-h-[calc(100vh-3.5rem)] flex items-center justify-center customGradient'>
            <div className='border boxShadow flex flex-col gap-4 w-full max-w-lg mx-auto p-5 animate__animated animate__zoomIn bg-white'>
                <div className='flex items-center justify-center bg-[#045D5D] w-16 h-16 rounded-full mx-auto'>
                    <GrOrganization className='text-white text-4xl' />
                </div>
                <h1 className='text-4xl text-center font-semibold'>Register Department</h1>
                <p className='text-center mt-[-10px]'>Please fill all required details to register your department with us<sup className='text-red-500'>*</sup></p>

                <form onSubmit={handleOnSubmit}>
                    <DepartmentForm departmentFormData={departmentFormData} setDepartmentFormData={setDepartmentFormData} handleOnDepartmentDataChange={handleOnDepartmentDataChange} />
                    <UserForm userForm={userForm} setUserForm={setUserForm} handleOnUserFormDataChange={handleOnUserFormDataChange} />

                    <button className='w-full mt-12 h-12 text-2xl font-semibold text-white bg-[#017E7E] hover:bg-[#045D5D] transition-all delay-100 rounded-md'>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
