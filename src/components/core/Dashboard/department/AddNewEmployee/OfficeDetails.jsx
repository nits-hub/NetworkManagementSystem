import React from 'react'
import TextField from '@mui/material/TextField';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function OfficeDetails({officeForm, handleOnOfficeFormDataChange, handleDateChange}) {
  return (
    <>
         <h3 className="text-xl">Office Details</h3>
        <div className="flex flex-wrap justify-start items-center gap-x-5 gap-y-3">
          <div className="w-[250px] mr-[57px]">
            <TextField
              label="Position"
              type="text"
              id="position"
              name="position"
              value={officeForm.position || ""}
              onChange={handleOnOfficeFormDataChange}
              size="small"
              required
            />
          </div>

          <div className="w-[250px]">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Joining"
                value={officeForm.dateOfJoining}
                onChange={handleDateChange}
                slots={{ textField: (params) => <TextField {...params} size="small" required /> }}
                />
            </LocalizationProvider>
          </div>
        </div>
        <hr />
    </>
  )
}
