import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function AddEmployee({userForm, handleOnUserFormDataChange}) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

  return (
    <>
      {/* section 1 */}
      <h3 className="text-xl">Personal Details</h3>
        <div className="flex flex-wrap justify-start items-center gap-x-5 gap-y-3">
          <div className="w-[250px] mr-[57px]">
            <TextField
              label="First Name"
              type="text"
              id="firstName"
              name="firstName"
              value={userForm.firstName || ""}
              onChange={handleOnUserFormDataChange}
              placeholder="Enter first name"
              size="small"
              required
            />
          </div>

          <div className="w-[250px]">
            <TextField
              label="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              value={userForm.lastName || ""}
              onChange={handleOnUserFormDataChange}
              placeholder="Enter last name"
              size="small"
              required
            />
          </div>
        </div>

        {/* section 2 */}
        <div className="flex flex-wrap justify-between items-center gap-x-5 gap-y-3">
          <div className="w-[250px]">
            <TextField
              label="Email"
              type="email"
              id="email"
              name="email"
              value={userForm.email || ""}
              onChange={handleOnUserFormDataChange}
              placeholder="Enter Email"
              size="small"
              required
            />
          </div>

          <div className="w-[250px]">
            <TextField
              label="Contact Number"
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={userForm.contactNumber || ""}
              onChange={handleOnUserFormDataChange}
              placeholder="Enter Contact Number"
              size="small"
              required
            />
          </div>

          <div className="w-[250px]">
            <FormControl sx={{ width: 222 }} size="small">
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                name="gender"
                value={userForm.gender || ""}
                onChange={handleOnUserFormDataChange}
                required
                label="Gender"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        {/* section 3 */}
        <div className="flex flex-wrap justify-start items-center gap-x-5 gap-y-3">
          <div className="w-[250px] mr-[57px]">
            <TextField
              sx={{ width: 222 }}
              label="Password"
              id="password"
              type={showPassword ? "text" : "password"}
              size="small"
              name="password"
              value={userForm.password || ""}
              onChange={handleOnUserFormDataChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="w-[250px]">
            <TextField
              sx={{ width: 222 }}
              label="Confirm Password"
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              size="small"
              name="confirmPassword"
              value={userForm.confirmPassword || ""}
              onChange={handleOnUserFormDataChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <hr />  
    </>
  )
}
