import { MdDashboard } from "react-icons/md";
import { FaHistory, FaWallet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function SideBar() { 
    
    const menuItems = [
        { name: "Dashboard", link: "/overview", icon: <MdDashboard /> },
        { name: "Transaction History", link: "/transaction-history", icon: <FaHistory /> },
        { name: "Wallet", link: "/wallet", icon: <FaWallet /> },
        { name: "Profile", link: "/profile", icon: <CgProfile /> },
        { name: "Settings", link: "/settings", icon: <FiSettings /> },
        { name: "Market", link: "/market", icon: <RiShoppingBag3Line /> },
        { name: "Logout", link: "/logout", icon: <BiLogOut /> },


    ]
    return (
        <div className=" h-full w-full bg-white shadow-xl shadow-gray-300 rounded-2xl flex flex-col justify-between py-5 px-2.5">
            <div className="text-left">
                <h1 className="text-xl font-bold text-pink-500">WALLETBITS</h1>
            </div>
            <div className="flex-1 w-full flex flex-col justify-center">
                <ul className="flex flex-col items-start gap-4 w-full">
                    {menuItems.map((item, index) => (
                        <li key={index} className="w-full">
                            <NavLink to={item.link} className={({ isActive }) => isActive ? "bg-[#953278] text-white w-full text-sm font-medium cursor-auto px-2.5 py-2 flex items-center gap-3 rounded-lg" : "w-full text-sm font-medium cursor-pointer px-2.5 py-2 flex items-center gap-3 text-black rounded-lg hover:bg-[#953278] hover:text-white transition-all duration-200"}>
                                <span className="text-lg">{item.icon}</span>{item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default SideBar;
