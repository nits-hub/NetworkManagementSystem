import { ACCOUNT_TYPE } from '../utils/constants';
export const sidebarLinks = [
    {
        id: 1,
        name: "My Profile",
        path: "/dashboard/my-profile",
        icon: "BsFillPersonFill",
    },
    {
        id: 2, 
        name: "Admin Dashboard",
        path: "/dashboard/admin/dash",
        type: ACCOUNT_TYPE.ADMIN,
        icon: "BsFillPersonPlusFill",
    },
    {
        id: 3, 
        name: "View Department",
        path: "/dashboard/admin/department",
        type: ACCOUNT_TYPE.ADMIN,
        icon: "BsFillPersonPlusFill",
    },
    {
        id: 4, 
        name: "View Employee",
        path: "/dashboard/admin/department/employee",
        type: ACCOUNT_TYPE.ADMIN,
        icon: "BsFillPersonPlusFill",
    },
    {
        id: 4, 
        name: "View Complaints",
        path: "/dashboard/admin/department/complaints",
        type: ACCOUNT_TYPE.ADMIN,
        icon: "BsFillPersonPlusFill",
    },
    { 
        id: 5, 
        name: "Add Employee",
        path: "/dashboard/department/employee",
        type: ACCOUNT_TYPE.DEPARTMENT,
        icon: "BsFillPersonPlusFill",
    },
    {
        id: 6, 
        name: "View Employee Details",
        path: "/dashboard/department/view-employee",
        type: ACCOUNT_TYPE.DEPARTMENT,
        icon: "BsPersonVcard",
    },
    {
        id: 7, 
        name: "Complaints Received",
        path: "/dashboard/department/view-complaints",
        type: ACCOUNT_TYPE.DEPARTMENT,
        icon: "BsEnvelopeArrowDownFill",
    },
    {
        id: 8, 
        name: "Raise Complaint",
        path: "/dashboard/department/employee/complaint",
        type: ACCOUNT_TYPE.EMPLOYEE,
        icon: "BsEnvelopeArrowUpFill",
    },
    {
        id: 9, 
        name: "View Complaint status",
        path: "/dashboard/department/employee/viewRaisedComplaint",
        type: ACCOUNT_TYPE.EMPLOYEE,
        icon: "BsChatLeftTextFill",
    },
    // {
    //     id: 8, 
    //     name: "Logout",
    //     path: "/dashboard/logout",
    //     icon: "BsFillPersonPlusFill",
    // }
];