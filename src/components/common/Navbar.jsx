import React from 'react'
import Logo from '../../assets/Logo/LogoTransparent.png'
import { Link, matchPath, NavLink } from 'react-router-dom'
import {NavbarLinks} from '../../data/navbarLinks';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar({handleDrawerOpen}) {
  const location  = useLocation();
  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.profile);
  const matchRoute = (route) => {
    return matchPath({path: route}, location.pathname);
  }

  return (
    <div className='boxShadow flex h-14 items-center justify-center border-b-[1px] bg-[#045D5D] border-[#017E7E]'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between' >
      <div className='flex'>
        {/* MenuIcon */}
        { location.pathname.includes("dashboard") && (<button onClick={handleDrawerOpen} className="mr-3 text-white">
            <MenuIcon />
            </button>)
        }

        {/* image */}
        <Link to="/">
          <img src={Logo} alt='NMS Logo' width={160} height={42} loading='lazy' />
        </Link>
      </div>
        

      {/* Nav Links */}
      <nav>
        <ul className='flex gap-x-6'>
        {
            NavbarLinks.map( (link, index) => (
                 <Link to={link?.path} key={index}>
                       <li className={`${matchRoute(link?.path) ? "text-yellow-300" : "text-white"} hover:text-yellow-200`}>{link.title}</li>  
                </Link>
             ) )
        }
        </ul>
      </nav>

      {/* login/signup dashboard */}
      <div className='flex gap-x-4 items-center'>
      {
            token === null && (
              <Link to={"/login"}>
                <button className='border-2 m-auto border-white px-[12px] py-[6px] rounded-[20px] text-white hover:text-yellow-300 hover:border-yellow-200'>
                  Log in
                </button>
              </Link>
            )
        }
        {
            token === null && (
              <Link to={"/signup"}>
                <button className='border-2 m-auto border-white px-[12px] py-[6px] rounded-[20px] text-white hover:text-yellow-300 hover:border-yellow-200'>
                  Sign Up
                </button>
              </Link>
            )
        }
        {
            // token !== null && <NavLink to='dashboard/my-profile' >Go to Dashboard</NavLink>
            token !== null && < ProfileDropDown />
        }
      </div>
      </div>
    </div>
  )
}
