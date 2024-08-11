import React, { useState } from "react";
import dayjs from 'dayjs';
import PCDetails from "./AddNewEmployee/PCDetails";
import OfficeDetails from "./AddNewEmployee/OfficeDetails";
import AddEmployee from "./AddNewEmployee/AddEmployee";
import toast from 'react-hot-toast';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { AddNewEmployee } from "../../../../services/operations/authAPI";

export default function CreateEmployee() { 

  const token = useSelector((state) => state.auth.token);
  // console.log("token in createemployee component: ", token);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "Employee",
    accountTypeId: "",
  });

  const [officeForm, setOfficeForm] = useState({
    position: "",
    dateOfJoining: dayjs(),
  });

  const [pcDetails, setPcDetails] = useState({
    ipAddress: "",
    operatingSystemType: "",
    macAddress: "",
    isTrendAvInstalled: "",
  });

  function handleOnUserFormDataChange(e) {
    setUserForm((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleOnOfficeFormDataChange(e) {
    setOfficeForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleOnPcDetailsDataChange(e) {
    setPcDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const handleDateChange = (date) => {
    setOfficeForm((prev) => ({
      ...prev,
      dateOfJoining: date,
    }));
  };

  function handleOnSubmit(e){
      e.preventDefault();


      const {password, confirmPassword} = userForm;
        if(password !== confirmPassword) {
            toast.error("Password Do Not Match");
            return;
        }

        dispatch(AddNewEmployee(userForm,officeForm,pcDetails,token));
  }
  

  return (
    <>
      <h2 className="mb-14 text-3xl font-medium text-richblack-5">
        Add New Employee
      </h2>

      <form 
          onSubmit={handleOnSubmit}
          className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] p-8 px-12">
        
          <AddEmployee userForm={userForm} handleOnUserFormDataChange={handleOnUserFormDataChange} />
          <OfficeDetails officeForm={officeForm} handleOnOfficeFormDataChange={handleOnOfficeFormDataChange} handleDateChange={handleDateChange}/>
          <PCDetails pcDetails={pcDetails} handleOnPcDetailsDataChange={handleOnPcDetailsDataChange} />

          <button className='w-[250px] mt-[3rem] mx-auto h-[2.6rem] text-[20px] font-semibold text-white bg-[#017E7E]  hover:bg-[#045D5D] transition-all delay-10 rounded-md'>
                      Register Employee
          </button>
      </form>
    </>
  );
}
