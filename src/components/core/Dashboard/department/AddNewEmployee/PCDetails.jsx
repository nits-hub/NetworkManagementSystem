import React from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function PCDetails({pcDetails, handleOnPcDetailsDataChange}) {
  return (
    <>
        <h3 className="text-xl">PC Details</h3>
        <div className="flex flex-wrap justify-between items-center gap-x-5 gap-y-3">
          <div className="w-[250px]">
            <TextField
              label="IP Address"
              type="text"
              id="ipAddress"
              name="ipAddress"
              value={pcDetails.ipAddress || ""}
              onChange={handleOnPcDetailsDataChange}
              size="small"
              required
            />
          </div>

          <div className="w-[250px]">
            <TextField
              label="Operating System Name"
              type="text"
              id="operatingSystemType"
              name="operatingSystemType"
              value={pcDetails.operatingSystemType || ""}
              onChange={handleOnPcDetailsDataChange}
              size="small"
              required
            />
          </div>

          <div className="w-[250px]">
            <TextField
              label="MAC Address"
              type="text"
              id="macAddress"
              name="macAddress"
              value={pcDetails.macAddress || ""}
              onChange={handleOnPcDetailsDataChange}
              size="small"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-x-5 gap-y-3">
        <div className="w-[250px]">
          <FormControl sx={{ width: 222 }} size="small">
            <InputLabel id="isTrendAVInstalled-label">Is Trend AV Installed?</InputLabel>
            <Select
              labelId="isTrendAVInstalled-label"
              id="isTrendAVInstalled"
              name="isTrendAvInstalled"
              value={pcDetails.isTrendAvInstalled || ""}
              onChange={handleOnPcDetailsDataChange}
              required
              label="Is Trend AV Installed?"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  )
}
