import { MdDashboard } from "react-icons/md";
import { FaHistory, FaWallet, FaUser, FaWhmcs, FaShoppingBag } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

function SideBar() { 

    const location = useLocation();
    
    const menuItems = [
        { name: "Dashboard", link: "/overview", icon: <MdDashboard />, active: location.pathname === "/overview" },
        { name: "Transaction History", link: "/transaction-history", icon: <FaHistory />, active: location.pathname === "/transaction-history", },
        { name: "Wallet", link: "/wallet", icon: <FaWallet />, active: location.pathname === "/wallet", },
        { name: "Profile", link: "/profile", icon: <FaUser />, active: location.pathname === "/profile", },
        { name: "Settings", link: "/settings/profile-settings", icon: <FaWhmcs />, active: location.pathname.startsWith("/settings"), },
        { name: "Market", link: "/market", icon: <FaShoppingBag />, active: location.pathname === "/market", },
        { name: "Logout", link: "/logout", icon: <FaArrowRightFromBracket className="rotate-180" /> },


    ]
    return (
        <div className=" h-full w-full bg-white shadow-md shadow-gray-200 rounded-2xl flex flex-col justify-between py-5 px-2.5">
            <div className="text-left">
                <h1 className="text-xl font-bold text-pink-500">WALLETBITS</h1>
            </div>
            <div className="flex-1 w-full flex flex-col justify-center">
                <ul className="flex flex-col items-start gap-4 w-full">
                    {menuItems.map((item, index) => (
                        <li key={index} className="w-full">
                            <NavLink to={item.link} className={`${item.active ? "bg-[#953278] text-white w-full text-sm font-medium cursor-auto px-2.5 py-2 flex items-center gap-3 rounded-lg" : "w-full text-sm font-medium cursor-pointer px-2.5 py-2 flex items-center gap-3 text-black rounded-lg hover:bg-[#953278] hover:text-white transition-all duration-200"}`}>
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
