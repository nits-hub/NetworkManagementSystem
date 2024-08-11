import React from 'react';
import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";

export default function MyProfile() {
  console.log("My profile rendered");
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  function getDate(datestring) {
    const date = new Date(datestring);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
 
  const getTotalEmployees = (employees) => {
    if (!employees) return "N/A"; // Handle the case where employees is undefined
    const length = employees.length;
    return length;
  }

  return (
    <>
      <h2 className="mb-14 text-3xl font-medium text-richblack-5">
        MyProfile
      </h2>

      <div className="flex items-center justify-between rounded-md border-[1px] p-8 px-12">
        <div className="flex items-center gap-x-4 ">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
          

        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings");
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>

      {/* Department Details */}
      {
        user?.accountType === "Department" && 
        <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] p-8 px-12">
        
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-richblack-5">
              Department Details
            </p>
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/settings");
              }}
            >
              <RiEditBoxLine />
            </IconBtn>
          </div>

          <div className="flex max-w-[500px] justify-between">
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">Department Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.accountTypeId.departmentName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-600">Address</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.accountTypeId.address}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-600">Department Created At</p>
                <p className="text-sm font-medium text-richblack-5">
                  { getDate(user?.accountTypeId.createdAt) }
                </p>
              </div>
              <div>
              <p className="mb-2 text-sm text-richblack-600">Total Employees Enrolled</p>
                <p className="text-sm font-medium text-richblack-5">
                  { getTotalEmployees(user?.accountTypeId.employees) }
                </p>
              </div>
            </div>
          </div>
        </div>
      }

      {/* Personal Details */}
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] p-8 px-12">
        
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>

        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            {/* {
              user.accountType === "Admin" && 
            } */}

            {
              user?.accountType === "Department" && 
              <div>
                <p className="mb-2 text-sm text-richblack-600">Head of Department At</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.accountTypeId?.departmentName}
                </p>
            </div>
            }

            {
              user?.accountType === "Employee" &&
              <div>
                <p className="mb-2 text-sm text-richblack-600">Employee At</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.accountTypeId?.department?.departmentName}
                </p>
            </div>
            }
          </div>
        </div>

      </div>

      {/* PC DETAILS */}
      {
        user?.accountType === "Employee" && 

        <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] p-8 px-12">
          <p className="text-lg font-semibold text-richblack-5">
            PC Details 
          </p>

          <div className="flex max-w-[500px] justify-between">
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mb-2 text-sm text-richblack-600">Operating System Type</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.accountTypeId?.pcDetails?.operatingSystemType}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-sm text-richblack-600">Is Trend AV Installed</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.accountTypeId?.pcDetails?.isTrendAvInstalled}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mb-2 text-sm text-richblack-600">MAC Address</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.accountTypeId?.pcDetails?.macAddress}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-sm text-richblack-600">IP Address</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.accountTypeId?.pcDetails?.ipAddress}
                  </p>
                </div>
              </div>
          </div>

        </div>
        
      }
    </>
  );
}
