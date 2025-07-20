import { NavLink } from "react-router-dom";
import { FiLock, FiBell, FiCheckCircle, FiUser } from "react-icons/fi";


function SubMenu() {
    const menuItems = [
        { name: "Profile Settings", link: "/settings/profile-settings", icon: <FiUser /> },
        { name: "Password", link: "/settings/password", icon: <FiLock /> },
        { name: "Notifications", link: "/settings/notifications", icon: <FiBell /> },
        { name: "Verification", link: "/settings/verification", icon: <FiCheckCircle /> },
    ]

    return(
        <div className="bg-white min-w-1/5 w-fit h-fit px-5 py-5 shadow-gray-300 shadow-md rounded-xl flex flex-col gap-5">
            {menuItems.map((item, index) => (
                <NavLink key={index} to={item.link} className={({ isActive }) => isActive ? "flex items-center gap-2 p-2 pr-10 rounded-lg bg-[#F6E2F1] text-gray-500 cursor-auto" : "flex items-center gap-2 p-2 pr-10 rounded-lg hover:bg-[#F6E2F1] transition-colors duration-300 text-gray-500"}>
                    {item.icon}
                    <p className="text-xs">{item.name}</p>
                </NavLink>
            ))}
        </div>
    )
}

export default SubMenu