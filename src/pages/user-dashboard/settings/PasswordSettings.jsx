import SideBar from "../../../components/Sidebar"
import Headbar from "../../../components/Headbar"
import SubMenu from "../../../components/SettingsSubMenu"

import { Link } from 'react-router-dom'


function PasswordSettings() {
    return(
        <div className="flex bg-gray-100 gap-5 px-5 relative">
            <div className='h-screen w-1/5 py-5 sticky top-0'>
                <SideBar />
            </div>
            <div className="flex flex-col gap-10 w-full py-5">
                <Headbar header="Account Settings" />
                <div className="flex gap-5">
                    <SubMenu />
                    <div className="w-full flex flex-col gap-8 items-start p-5 bg-white shadow-md shadow-gray-300 rounded-xl">
                        <label htmlFor="" className="w-full flex flex-col gap-1">
                            <p className="text-sm">Old Password</p>
                            <input type="password" className="border-2 w-full border-gray-300 rounded-lg p-2 outline-none text-black" />
                        </label>
                        <label htmlFor="" className="w-full flex flex-col gap-1">
                            <p className="text-sm">New Password</p>
                            <input type="password" className="border-2 w-full border-gray-300 rounded-lg p-2 outline-none text-black" />
                        </label>
                        <label htmlFor="" className="w-full flex flex-col gap-1">
                            <p className="text-sm">Confirm New Password</p>
                            <input type="password" className="border-2 w-full border-gray-300 rounded-lg p-2 outline-none text-black" />
                        </label>

                        <p>Forgot your password? <button className="text-[#D470B7] cursor-pointer">Click here</button></p>

                        <button className="px-5 py-2 bg-[#D470B7] rounded-lg self-start text-white hover:bg-[#ad6c9b] transition-colors duration-300 cursor-pointer">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordSettings