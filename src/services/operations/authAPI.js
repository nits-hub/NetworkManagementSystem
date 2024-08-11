import { departmentEndPoints, employeeEndpoints, endpoints } from '../apis';
import { setLoading, setToken } from '../../slices/authSlice';
import { setUser } from '../../slices/profileSlice';
import { apiConnector } from '../apiconnector';
import { toast } from "react-hot-toast";

const {
    LOGIN_API,
    SIGNUP_API,
    DEPARTMENT_API,
    EMPLOYEE_API,
    EMPLOYEE_PCDETAILS_API,
    OTP_API,
    MATCH_OTP,
    RESET_PASSWORD_API,
    DASHBOARD_DATA_API,
} = endpoints;

const { 
    GET_DEPARTMENT_EMPLOYEES_API, 
    UPDATE_DEPARTMENT_EMPLOYEE_API, 
    DELETE_DEPARTMENT_EMPLOYEES_API,
    GET_DEPARTMENT_EMPLOYEE_COMPLAIINTS_API,
    RESOLVE_EMPLOYEE_COMPLAINT_API,
    DELETE_EMPLOYEE_COMPLAINT_API,
    FORWARD_COMPLAINT_TO_ADMIN_API
} = departmentEndPoints;

const {
    RAISE_COMPLAINT_API,
    COMPLAINT_STATUS_API,
    DELETE_COMPALAINT_API
} = employeeEndpoints;



// export function getDashboardData(token) {
//     return async (dispatch) => {
//         const toastId = toast.loading("Loading...");
//         dispatch(setLoading(false)); 

//         try{
//             const response = await apiConnector("GET", DASHBOARD_DATA_API, null, token);
//             console.log("DASHBOARD_DATA_API RESPONSE..........", response);

//             if (!response?.data?.success) {
//                 toast.error(response?.data?.message || "Failed to Dashboard data");
//                 dispatch(setLoading(false));
//                 return { data: response.data };
//             }

//             toast.success("Data fetched successfully");
//             dispatch(setLoading(false));
//             return { data: response.data };
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error(error?.response?.data?.message || error.message || "An error occurred");
//             return { data: { success: false, message: error.message } };
//         } finally {
//             dispatch(setLoading(false));
//             toast.dismiss(toastId);
//         }
//     }
// }

export function getDashboardData(token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(false)); // Start loading

        try {
            const response = await apiConnector("GET", DASHBOARD_DATA_API, null, token); // Adjust the endpoint if necessary
            console.log("DASHBOARD_DATA_API RESPONSE..........", response);

            if (!response?.data?.success) {
                toast.error(response?.data?.message || "Failed to fetch dashboard data");
                dispatch(setLoading(false)); // Stop loading
                return { data: response.data };
            }

            toast.success("Data fetched successfully"); 
            dispatch(setLoading(false)); // Stop loading
            return { data: response.data };
        } catch (error) {
            console.error('Error:', error);
            toast.error(error?.response?.data?.message || error.message || "An error occurred");
            return { data: { success: false, message: error.message } };
        } finally {
            dispatch(setLoading(false)); // Ensure loading is stopped
            toast.dismiss(toastId);
        }
    }
}

export function deleteRaisedComplaint(token, complaintId) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(false)); // Ensure you are setting the loading state correctly
  
        try {
            const response = await apiConnector("DELETE", DELETE_COMPALAINT_API, {
                complaintId
            }, token);
  
            if (!response?.data?.success) {
                toast.error(response?.data?.message || "Failed to delete complaint");
                dispatch(setLoading(false));
                return { data: response.data };
            }
  
            toast.success("Complaint deleted successfully");
            dispatch(setLoading(false));
            return { data: response.data };
        } catch (error) {
            console.error('Error:', error);
            toast.error(error?.response?.data?.message || error.message || "An error occurred");
            return { data: { success: false, message: error.message } };
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
  }
  

export function getComplaintStatus(token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(false));



        try{
            const response = await apiConnector("GET", COMPLAINT_STATUS_API, null, token);

            console.log("COMPLAINT_STATUS_API RESPONSE..........", response);

            if (!response?.data?.success) {
                toast.error(response?.data?.message || "Failed to fetch complaint");
                dispatch(setLoading(false));
                return { data: response.data };
            }

            toast.success("Complaints forwarded Successfully");
            dispatch(setLoading(false));
            return { data: response.data };
        }
        catch (error) {
            console.error('Error:', error);
            toast.error(error?.response?.data?.message || error.message || "An error occurred");
            return { data: { success: false, message: error.message } };
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}

export function forwardComplaintToAdmin(selectedComplaintId,token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(false));

        try {
            const response = await apiConnector("PATCH", FORWARD_COMPLAINT_TO_ADMIN_API, {
                complaintId: selectedComplaintId
            }, token);

            console.log("FORWARD_COMPLAINT_TO_ADMIN_API RESPONSE..........", response);

            if (!response?.data?.success) {
                toast.error(response?.data?.message || "Failed to forward complaint");
                dispatch(setLoading(false));
                return { data: response.data };
            }

            toast.success("Complaints forwarded Successfully");
            dispatch(setLoading(false));
            return { data: response.data };


        }
        catch (error) {
            console.error('Error:', error);
            toast.error(error?.response?.data?.message || error.message || "An error occurred");
            return { data: { success: false, message: error.message } };
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}

export function sendOTPtoEmail(email, navigate){
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(false));

        try{
            const response = await apiConnector("POST", OTP_API, {
                email
            });

            if(!response){
                toast.error(response?.data?.message || "Failed to send otp");
                dispatch(setLoading(false));
                return { data: response.data };
            }

                toast.success("OTP Sent Successfully");
                dispatch(setLoading(false));
                navigate("/confirmOTP");

        }
        catch (error) {
            console.error('Error:', error);
            toast.error(error?.response?.data?.message || error.message || "An error occurred");
            return { data: { success: false, message: error.message } };
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}

export function otpMatch(otp, email, navigate) {
    return async (dispatch) => {
        // Check if the OTP length is exactly 6 digits
        if (otp.length !== 6 || isNaN(otp)) {
            toast.error("Please enter a valid 6-digit OTP");
            return; // Stop further execution if OTP is invalid
        }

        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try {
            const response = await apiConnector("POST", MATCH_OTP, { otp, email });

            if (!response) {
                toast.error(response?.data?.message || "OTP not matched");
                dispatch(setLoading(false));
                return { data: response.data };
            }

            toast.success("OTP verified successfully");
            dispatch(setLoading(false));
            navigate("/reset-password");

        } catch (error) {
            console.error('Error:', error);
            toast.error(error?.response?.data?.message || error.message || "An error occurred");
            return { data: { success: false, message: error.message } };
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}

export function resetPassword(email, newPassword, navigate){
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try{

            const response = await apiConnector("PATCH", RESET_PASSWORD_API,{
                email,
                newPassword,
            });

            if(!response){
                toast.error(response?.data?.message || "Failed to reset password");
                dispatch(setLoading(false));
                return { data: response.data };
            }

            toast.success("New Password Reset Successfully");
                dispatch(setLoading(false));
                navigate("/login");

        }
        catch (error) {
            console.error('Error:', error);
            toast.error(error?.response?.data?.message || error.message || "An error occurred");
            return { data: { success: false, message: error.message } };
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}


export function deleteEmployeeComplaints(selectedComplaintId, token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(false));

        try {
            const response = await apiConnector("PATCH", DELETE_EMPLOYEE_COMPLAINT_API, {
                complaintId : selectedComplaintId
            }, token);

            console.log("DELETE_EMPLOYEE_COMPLAINT_API RESPONSE..........", response);

            if (!response?.data?.success) {
                toast.error(response?.data?.message || "Failed to delete complaint");
                dispatch(setLoading(false));
                return { data: response.data };
            }

            toast.success("Complaints deleted Successfully");
            dispatch(setLoading(false));
            return { data: response.data };
            
        }
        catch (error) {
            console.error('Error:', error);
            toast.error(error?.response?.data?.message || error.message || "An error occurred");
            return { data: { success: false, message: error.message } };
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}

export function resolveEmployeeComplaints(selectedComplaintId, token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(false));

        try {
            const response = await apiConnector("PATCH", RESOLVE_EMPLOYEE_COMPLAINT_API, {
                complaintId: selectedComplaintId
            }, token);

            console.log("RESOLVE_EMPLOYEE_COMPLAINT_API RESPONSE..........", response);

            if (!response?.data?.success) {
                toast.error(response?.data?.message || "Failed to resolve complaint");
                dispatch(setLoading(false));
                return { data: response.data };
            }

            toast.success("Complaints Fetched Successfully");
            dispatch(setLoading(false));
            return { data: response.data };
        }
        catch (error) {
            console.error('Error:', error);
            toast.error(error?.response?.data?.message || error.message || "An error occurred");
            return { data: { success: false, message: error.message } };
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}

export function getDepartmentComplaints(token) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...");
      dispatch(setLoading(false));
      try {
        const response = await apiConnector("GET", GET_DEPARTMENT_EMPLOYEE_COMPLAIINTS_API, null, token);
  
        if (!response?.data?.success) {
          toast.error(response?.data?.message || "Failed to fetch complaint");
          dispatch(setLoading(false));
          return { data: response.data };
        }
  
        toast.success("Complaints Fetched Successfully");
        dispatch(setLoading(false));
        return { data: response.data };
      } catch (error) {
        console.error('Error:', error);
        toast.error(error?.response?.data?.message || error.message || "An error occurred");
        return { data: { success: false, message: error.message } };
      } finally {
        dispatch(setLoading(false));
        toast.dismiss(toastId);
      }
    };
}
  

export function createComplaints(complaint, token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try {
            console.log("****************",complaint, token)

            const { title, description } = complaint;
            const response = await apiConnector("POST", RAISE_COMPLAINT_API, { 
                title, 
                description 
            }, token);

            console.log("RAISE_COMPLAINT_API RESPONSE..........", response);

            if (!response?.data?.success) {
                toast.error(response?.data?.message || "Failed to register complaint");
                dispatch(setLoading(false));
                return;
            }

            toast.success("Complaint Registered Successfully");
        } catch (error) {
            console.error('Error:', error);
            toast.error(error?.response?.data?.message || error.message || "An error occurred");
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    };
}


export function createDepartment(departmentFormData, userForm, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        
        try {

            // Register User
            const { firstName, lastName, gender, contactNumber, email, password, confirmPassword, accountType} = userForm;
            const userResponse = await apiConnector("POST", SIGNUP_API, {
                firstName,
                lastName,
                gender,
                contactNumber,
                email,
                password,
                confirmPassword,
                accountType,
            });

            // console.log("USER_API RESPONSE..........", userResponse);

            if (!userResponse?.data?.success) {
                toast.error(userResponse?.data?.message || "Failed to register user");
                dispatch(setLoading(false));
                return;
            }

            // create department
            const { departmentName, address } = departmentFormData;
            const userId = userResponse.data.user._id;
            const response = await apiConnector("POST", DEPARTMENT_API, {
                departmentName, 
                address,
                userId
            });

            // console.log("DEPARTMENT_API RESPONSE............", response);

            if ( !response?.data?.success) {
                toast.error(response?.data?.message || "Failed to create department");
                dispatch(setLoading(false));
                return;
            }

            toast.success("Department Registered Successfully");
            dispatch(setLoading(false));
            navigate("/login");
        } catch (error) {
            console.error('Error:', error);
            toast.error(error.response.data.message || error.message || "An error occurred");
            dispatch(setLoading(false)); 
        }
        finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    };
} 

export function deleteDepartmentEmployee({ empId, deptId, pcDetailsId, empUserId }, token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try {
            const response = await apiConnector("DELETE", DELETE_DEPARTMENT_EMPLOYEES_API, {
                empId,
                deptId,
                pcDetailsId,
                empUserId,
            }, token);

            // console.log("DELETE_DEPARTMENT_EMPLOYEES_API RESPONSE............", response);

            if (!response?.data?.success) {
                toast.error(response?.data?.message || "Failed to delete employee");
                dispatch(setLoading(false));
                return response;
            }

            toast.success("Employee deleted successfully");
            dispatch(setLoading(false));
            return response;
            
        } catch (error) {
            console.error('Error:', error);
            toast.error(error.response?.data?.message || error.message || "An error occurred");
            dispatch(setLoading(false));
            return { data: { success: false, message: error.message } };
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}

export function updateDepartmentEmployee(currentEmployee, token) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        
        try {
            const { _id: userid } = currentEmployee.employeeDetails;
            const { firstName, lastName, gender, contactNumber, email } = currentEmployee.employeeDetails;
            const { position, dateOfJoining } = currentEmployee;

            const response = await apiConnector(
                "PATCH",
                UPDATE_DEPARTMENT_EMPLOYEE_API,
                {
                    userid,
                    firstName, 
                    lastName, 
                    gender, 
                    contactNumber, 
                    email,
                    position, 
                    dateOfJoining
                },
                token
            );

            // console.log("UPDATE_DEPARTMENT_EMPLOYEE_API RESPONSE............", response);

            if (!response?.data?.success) {
                toast.error(response?.data?.message || "Failed to update employee");
                dispatch(setLoading(false));
                return;
            }

            toast.success("Employee updated successfully");
            dispatch(setLoading(false));
            
        } catch (error) {
            console.error('Error:', error);
            toast.error(error.response?.data?.message || error.message || "An error occurred");
            dispatch(setLoading(false)); 
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}

export function getDepartmentEmployees(token) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...");
      dispatch(setLoading(false));
  
      try {
        const response = await apiConnector("GET", GET_DEPARTMENT_EMPLOYEES_API, null, token);
        console.log("USER_API RESPONSE..........", response);
  
        if (!response?.data?.success) {
          toast.error(response?.data?.message || "Failed to fetch employees");
          dispatch(setLoading(false));
          return response;
        }
        
        toast.success("Data Fetched Successfully");
        dispatch(setLoading(false));
        return response;
      } catch (error) {
        console.error('Error:', error);
        toast.error(error.response?.data?.message || error.message || "An error occurred");
        dispatch(setLoading(false)); 
        return error;

      } finally {
        dispatch(setLoading(false));
        toast.dismiss(toastId);
      }
    };
}

export function AddNewEmployee(userForm, officeDetails, pcDetails, token, navigate){
    
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try{
             // Register User
             const { firstName, lastName, gender, contactNumber, email, password, confirmPassword, accountType} = userForm;
             const userResponse = await apiConnector("POST", SIGNUP_API, {
                 firstName,
                 lastName,
                 gender,
                 contactNumber,
                 email,
                 password,
                 confirmPassword,
                 accountType,
             });
 
            //  console.log("USER_API RESPONSE..........", userResponse);
 
             if (!userResponse?.data?.success) {
                 toast.error(userResponse?.data?.message || "Failed to register user");
                 dispatch(setLoading(false));
                 return;
             }

             const {position, dateOfJoining} = officeDetails;
             const officeResponse = await apiConnector("POST", EMPLOYEE_API, {
                position,
                dateOfJoining,
                userId: userResponse.data.user._id,
             },token);

            //  console.log("EMPLOYEE_API RESPONSE..........", officeResponse);


             if (!officeResponse?.data?.success) {
                toast.error(officeResponse?.data?.message || "Failed to register user");
                dispatch(setLoading(false));
                return;
            }

            const {ipAddress, operatingSystemType, macAddress, isTrendAvInstalled} = pcDetails;
            const pcDetailsResponse = await apiConnector("POST", EMPLOYEE_PCDETAILS_API, {
                ipAddress, 
                operatingSystemType, 
                macAddress, 
                isTrendAvInstalled,
                employeeId: officeResponse.data.employee._id,
            })

            if (!pcDetailsResponse?.data?.success) {
                toast.error(pcDetailsResponse?.data?.message || "Failed to register user");
                dispatch(setLoading(false));
                return;
            }

            toast.success("Employee Registered Successfully");
            dispatch(setLoading(false));

        }  catch (error) {
            console.error('Error:', error);
            toast.error(error.response.data.message || error.message || "An error occurred");
            dispatch(setLoading(false)); 
        }
        finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}

export function login(email, password, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try {
            const response = await apiConnector('POST', LOGIN_API, { email, password });
            console.log("LOGIN_API RESPONSE........: ", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("Login Successful");
            dispatch(setToken(response.data.token));
            const userImage = response.data?.user?.image
                ? response.data.user.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
            dispatch(setUser({ ...response.data.user, image: userImage }));

            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/dashboard/my-profile");

        } catch (error) {
            console.error('Error:', error);
            toast.error(error.response?.data?.message || error.message || "An error occurred");
        } finally {
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    };
}

export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
}