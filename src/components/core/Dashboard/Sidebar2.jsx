import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, matchPath, useLocation } from 'react-router-dom';
import { sidebarLinks } from '../../../data/dashboardLinks';
import SidebarLink from './SidebarLink';

export default function Sidebar2({open}) {
  const { user, loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r border-richblack-700 bg-richblack-800">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex">
        <div className={`flex-shrink-0 ${open ? 'w-[240px]' : 'w-[calc(56px+1px)]'} transition-width duration-300 overflow-x-hidden border boxShadow`}>
          <div className="mt-2">
            {open && <h1 className='text-center py-4 px-3 font-semibold text-xl bg-[#1976D2] text-white'>Dashboard</h1>}
            {sidebarLinks.map((link) => {
              if(link.type && user?.accountType !== link.type)  return null
              return (
                <SidebarLink open={open}
                key={link.id} link={link} iconName={link.icon}  />
              )
            })}
          </div>
        </div>
        <div className="flex-grow p-3 ml-3">
          {/* Main content here */}
        </div>
      </div>
    </>
  );
}
