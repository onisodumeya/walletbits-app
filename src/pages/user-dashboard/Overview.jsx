
import SideBar from '../../components/Sidebar.jsx'
import Headbar from '../../components/Headbar.jsx'
import AccountCard from '../../components/FinanceCard.jsx'

import { useState, useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import { FaHistory, FaWallet, FaArrowAltCircleDown, FaArrowAltCircleUp, FaArrowUp } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function Overview() {

    const [balance, setBalance] = useState("0.00");
    const [deposit, setDeposit] = useState("0.00");
    const [withdrawal, setWithdrawal] = useState("0.00");

    // const getBalance = async () => {
    //     try {
    //         const response = await axios.get('');
    //         setBalance(response);
    //     } catch (error) {
    //         console.error("Failed to fetch amount:", error);
    //     }
    // };

    return(
      <>
      <div className="flex bg-gray-100 gap-5 px-5 relative">
            <div className='h-screen w-1/5 py-5 sticky top-0'>
                <SideBar />
            </div>
            <div className=" flex flex-col gap-10 w-full py-5">
                <Headbar header="Dashboard" subHeader="See an overview of your dashboard"/>
                <div className="flex w-full justify-between gap-5">
                        <AccountCard title="balance" icon={FaWallet} amount={balance} />
                        <AccountCard title="Total deposit" icon={FaArrowAltCircleDown} amount={deposit} />
                    <AccountCard title="Total Withdrawal" icon={FaArrowAltCircleUp} amount={withdrawal}/>
                </div>
                <div className='flex gap-5'>

                </div>
            </div>
        </div>
        </>
    )
    
}
export default Overview