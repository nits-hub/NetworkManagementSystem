import * as Icons from "react-icons/bs"
import { useDispatch } from "react-redux"
import { NavLink, matchPath, useLocation } from "react-router-dom"

export default function SidebarLink({ link, iconName, open }) {
  const Icon = Icons[iconName]
  const location = useLocation()
  const dispatch = useDispatch()

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

return (
  <NavLink to={link.path} className="w-full">
    <div className="w-4/5 mx-auto text-center p-2 transition-all duration-300 hover:bg-gray-200">
      <div className="flex gap-5 mx-auto items-center">
        { open ? 
          (
            <>
              <Icon className="text-[20px]" />
              <div className="text-[13px]">{link.name}</div>
            </>
          ) : 
          (
            <Icon className="text-[23px]" />
          )
        }
      </div>
    </div>
  </NavLink>
);
}