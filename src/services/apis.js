const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
    LOGIN_API: BASE_URL + "/auth/login",
    SIGNUP_API: BASE_URL + "/auth/signup", //to create user
    DEPARTMENT_API: BASE_URL + "/auth/department", //to create department with signup api
    EMPLOYEE_API: BASE_URL + "/auth/department/employee", // to create employee by department
    EMPLOYEE_PCDETAILS_API: BASE_URL + "/auth/department/employee/pcdetails", //to register pc details of employee by department
    OTP_API: BASE_URL + "/auth/otp",
    FORGOT_PASSWORD_API: BASE_URL + "/auth/reset-password",
    MATCH_OTP: BASE_URL + "/auth/matchOTP",
    RESET_PASSWORD_API: BASE_URL + "/auth/reset-password",
    DASHBOARD_DATA_API: BASE_URL + "/auth/admin/dashboard/dashdata",
}

// EMPLOYEE ENDPOINTS
export const employeeEndpoints = {
    RAISE_COMPLAINT_API: BASE_URL + "/auth/employee/complaints", //to raise a complaint
    COMPLAINT_STATUS_API: BASE_URL + "/auth/employee/viewRaisedComplaints",   //to check status of the raised complaints
    DELETE_COMPALAINT_API: BASE_URL + "/auth/employee/deleteRaisedComplaint"
}

//DEPARTMENT ENDPOINTS
export const departmentEndPoints = {
    GET_DEPARTMENT_EMPLOYEES_API: BASE_URL + "/auth/department/getEmployee",
    UPDATE_DEPARTMENT_EMPLOYEE_API: BASE_URL + "/auth/department/updateEmployee",
    DELETE_DEPARTMENT_EMPLOYEES_API: BASE_URL + "/auth/department/deleteEmployee",
    GET_DEPARTMENT_EMPLOYEE_COMPLAIINTS_API: BASE_URL + "/auth/department/employees/getComplaints",
    RESOLVE_EMPLOYEE_COMPLAINT_API: BASE_URL + "/auth/department/employee/resolveComplaint",
    DELETE_EMPLOYEE_COMPLAINT_API: BASE_URL + "/auth/department/employee/deleteComplaint",
    FORWARD_COMPLAINT_TO_ADMIN_API: BASE_URL + "/auth/department/upwardingComplaint"
}