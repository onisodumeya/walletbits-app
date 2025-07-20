
import SideBar from '../../components/Sidebar.jsx'
import Headbar from '../../components/Headbar.jsx'
import AccountCard from '../../components/FinanceCard.jsx'
import { CgProfile } from "react-icons/cg";
import { FaHistory, FaWallet, FaArrowAltCircleDown, FaArrowAltCircleUp, FaArrowUp } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function Overview() {
    return(
      <>
      <div className="flex bg-gray-100 gap-5 px-5 relative">
            <div className='h-screen w-1/5 py-5 sticky top-0'>
                <SideBar />
            </div>
            <div className=" flex flex-col gap-10 w-full py-5">
                <Headbar header="Dashboard" subHeader="See an overview of your dashboard"/>
                <div className="flex w-full justify-between gap-5">
                    <AccountCard title="balance" icon={FaWallet}/>
                    <AccountCard title="Total deposit" icon={FaArrowAltCircleDown}/>
                    <AccountCard title="Total Withdrawal" icon={FaArrowAltCircleUp}/>
                </div>
                <div className='flex gap-5'>

                </div>
            </div>
        </div>
        </>
    )
    
}
export default Overview