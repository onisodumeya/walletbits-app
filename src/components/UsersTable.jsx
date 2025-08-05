import React from 'react'

const UsersTable = () => {


    const users = [
        {
            fullName: "Moses Charles",
            image: "",
            email: "moses123@gmail.com",
            walletBalance: 15.00,
            tradeCount: 125,
            accountStatus: "Active",
        },
        {
            fullName: "Precious Mark",
            image: "",
            email: "moses123@gmail.com",
            walletBalance: 7.00,
            tradeCount: 106,
            accountStatus: "Blocked",
        },
        {
            fullName: "Genevieve",
            image: "",
            email: "moses123@gmail.com",
            walletBalance: 9.00,
            tradeCount: 101,
            accountStatus: "Suspended",
        },
        {
            fullName: "Moses",
            image: "",
            email: "moses123@gmail.com",
            walletBalance: 4.00,
            tradeCount: 95,
            accountStatus: "Active",
        },
        {
            fullName: "Charles",
            image: "",
            email: "moses123@gmail.com",
            walletBalance: 11.00,
            tradeCount: 85,
            accountStatus: "Active",
        },
    ]

    return (
        <div className="overflow-x-auto w-full">
            <table className="min-w-full text-sm text-center text-gray-800 border-collapse shadow-md bg-white rounded-lg overflow-hidden">
                <thead className="text-[16px]  py-5 text-[#000000] font-bold border-b-3 border-black ">
                    <tr>
                        <th className="px-6 py-5"><div className='w-3 h-3 border border-black'></div></th>
                        <th className="px-6 py-5 text-left">Full Name</th>
                        <th className="px-6 py-5">Email Address</th>
                        <th className="px-6 py-5">Wallet Balance</th>
                        <th className="px-6 py-5">Trade Count</th>
                        <th className="px-6 py-5">Account Status</th>
                        <th className="px-6 py-5 ">Account Status</th>
                    </tr>
                </thead>
                <tbody className='font-semibold'>
                    {users.map((e) => (
                        <tr key={e.id} className="hover:bg-gray-50 border-1 border-[#D470B7] border-l-0 border-r-0 border-t-0 transition">
                            <td className="px-6 py-4">
                                <div className='w-3 h-3 border border-black'></div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-1.5 h-full">
                                    <div className="w-4 h-4 rounded-full bg-red-300"></div>
                                    <p className='font-medium'>{e.fullName}</p>
                                </div>
                            </td>
                            <td
                                className="px-6 py-4 text-[16px] font-medium "
                            >
                                {e.email}
                            </td>
                            <td
                                className="px-6 py-4 text-[16px] font-medium "
                            >
                                ${e.walletBalance}
                            </td>
                            <td
                                className="px-6 py-4 text-[16px] font-medium"
                            >
                                {e.tradeCount}
                            </td>
                            <td className="px-6 py-4 text-[16px] font-medium">
                                {e.accountStatus}
                            </td>
                            <td className="px-6 py-4 text-[16px] text-blue-600 hover:underline cursor-pointer">
                                <button className='bg-[#17B21C] rounded-md px-[40px] py-[5px] text-[16px] font-medium text-[#FFFFFF]'>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable
