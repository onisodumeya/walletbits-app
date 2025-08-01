import { MdDashboard } from "react-icons/md";
import { FaHistory, FaWallet, FaUser, FaWhmcs, FaShoppingBag } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from 'react'

export const SideBarDesktop = () => { 

    const location = useLocation();
    
    const menuItems = [
        { name: "Dashboard", link: "/overview", icon: <MdDashboard />, active: location.pathname === "/overview" },
        { name: "Transaction History", link: "/transaction-history", icon: <FaHistory />, active: location.pathname === "/transaction-history", },
        { name: "Wallet", link: "/wallet", icon: <FaWallet />, active: location.pathname === "/wallet", },
        { name: "Profile", link: "/profile", icon: <FaUser />, active: location.pathname === "/profile", },
        { name: "Settings", link: "/settings/profile-settings", icon: <FaWhmcs />, active: location.pathname.startsWith("/settings"), },
        { name: "Market", link: "/market/market-overview", icon: <FaShoppingBag />, active: location.pathname.startsWith("/market"), },
        { name: "Logout", link: "/logout", icon: <FaArrowRightFromBracket className="rotate-180" /> },


    ]
    return (
        <div className=" h-full w-full bg-white shadow-md shaodw-md hidden rounded-2xl lg:flex flex-col justify-between py-5 px-2.5">
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

export const SideBarMobile = () => { 

    const location = useLocation();
    
    const menuItems = [
        { name: "Dashboard", link: "/overview", icon: <MdDashboard />, active: location.pathname === "/overview" },
        { name: "Transaction", link: "/transaction-history", icon: <FaHistory />, active: location.pathname === "/transaction-history", },
        { name: "Wallet", link: "/wallet", icon: <FaWallet />, active: location.pathname === "/wallet", },
        { name: "Settings", link: "/settings/profile-settings", icon: <FaWhmcs />, active: location.pathname.startsWith("/settings"), },
        { name: "Market", link: "/market/market-overview", icon: <FaShoppingBag />, active: location.pathname.startsWith("/market"), },


    ]
    return (
        <div className="w-full bg-white drop-shadow-md shadow-black rounded-t-2xl fixed bottom-0 z-50 flex lg:hidden flex-col justify-between py-5 px-2.5">
            <div className="flex-1 w-full flex flex-col justify-center">
                <ul className="flex items-start gap-4 w-full justify-between">
                    {menuItems.map((item, index) => (
                        <li key={index} className="w-fit">
                            <NavLink to={item.link} className={`${item.active ? "bg-[#953278] text-white w-full text-xs font-medium cursor-auto px-2.5 py-2 flex flex-col items-center gap-1 rounded-lg" : "w-full text-sm font-medium cursor-pointer px-2.5 py-2 flex flex-col items-center gap-1 text-black rounded-lg hover:bg-[#953278] hover:text-white transition-all duration-200"}`}>
                                <span className="text-lg">{item.icon}</span>{item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

