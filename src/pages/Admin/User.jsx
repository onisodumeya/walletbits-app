import React from 'react'
import AdminSidebar from '../../components/AdminSideBar'
import AdminBody from './AdminBody'
import AdminHeader from './AdminHeader'
 
const User = () => {
  return (
    <div className='h-screen w-screen bg-[#F2F2F2] flex'>
        <div className='h-full w-1/6 '>
            <AdminSidebar/>
        </div>
        <div className='h-full w-5/6 overflow-y-auto'>
            <div>
                <AdminHeader/>
            </div>
            <div>
                <AdminBody/>
            </div>
        </div>
    </div>
  )
}

export default User
