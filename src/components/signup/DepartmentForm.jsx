import React, { useState, useEffect } from 'react'

export default function DepartmentForm({ departmentFormData, setDepartmentFormData, handleOnDepartmentDataChange }) {
    const [address, setAddress] = useState({
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
    });

    function handleOnChange(e) {
        setAddress((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };


    // Update departmentFormData.address whenever the address fields change
    useEffect(() => {
        const updatedAddress = `${address.street}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`;
        setDepartmentFormData((prevData) => ({
            ...prevData,
            address: updatedAddress,
        }));
    }, [address, setDepartmentFormData]);


    return (
        <div>
            <label className='flex flex-col gap-1 mb-3'>
                <p className='text-[18px] font-semibold'>Department Name</p>
                <input className='border h-[3rem] p-2 rounded-md hover:border-[#045D5D] bg-slate-100'
                    onChange={handleOnDepartmentDataChange}
                    type="text" name='departmentName' value={departmentFormData.departmentName} placeholder="Enter Department Name" />
            </label>

            <label className='text-[18px] font-semibold'>Address</label>
            <div className='mt-1 flex w-full gap-4'>
                <input className='w-1/2 border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100'
                    onChange={handleOnChange}
                    type="text"
                    name="street"
                    value={address.street}
                    placeholder="Street" />
                <input className='w-1/2 border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100'
                    onChange={handleOnChange}
                    type="text"
                    name="city"
                    value={address.city}
                    placeholder="City" />
            </div>

            <div className='mt-2 flex w-full gap-4'>
                <input className='w-1/2 border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100'
                    onChange={handleOnChange}
                    type="text"
                    name="state"
                    value={address.state}
                    placeholder="State" />

                <input className='w-1/2 border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100'
                    onChange={handleOnChange}
                    type="text"
                    name="zip"
                    value={address.zip}
                    placeholder="Zip" />
            </div>

            <div className='mt-2 flex w-full'>
                <input className='w-full border h-[3rem] p-2 rounded-md hover:border-[#045D5D]  bg-slate-100'
                    onChange={handleOnChange}
                    type="text"
                    name="country"
                    value={address.country}
                    placeholder="Country" />
            </div>

        </div>
    )
}