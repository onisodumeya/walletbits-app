import React, { useState } from 'react'
import { BiNotification, BiSearch } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { MdNotifications } from 'react-icons/md'

const AdminHeader = () => {

    const [name, setName] = useState("Moses Charles")
    const [role, setRole] = useState("Admin")
    return (
        <div className='w-full bg-white py-3 px-9 top-0 flex justify-between items-center'>
            <div className="relative w-1/3">
                <FiSearch className="absolute ml-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                <input
                    type="text"
                    name="fake-email"
                    placeholder="Search"
                    autoComplete="off"
                    className="w-full pl-10 pr-4 py-2 border-[1.5px] rounded-xl bg-gray-100 border-gray-500"
                />
            </div>

            <div className='flex items-center space-x-4'>
                <div className='bg-[#5C3253] h-10 w-10 rounded-sm p-1'>
                <MdNotifications size={30} color='#FFFFFF99'/>
            </div>
            <div className='flex space-x-2 bg-[#D9D9D9] py-2 pl-2 pr-10 rounded-4xl w-max'>
                <div className='w-10 h-10 border border-black rounded-full'></div>
                <div>
                    <h3 className='text-sm font-semibold'>{name}</h3>
                    <p className='text-sm'>{role}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AdminHeader
