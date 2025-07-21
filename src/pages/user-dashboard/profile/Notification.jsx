import Headbar from "../../../components/Headbar"
import SubMenu from "../../../components/SettingsSubMenu"
import SideBar from "../../../components/Sidebar"


const Notification = () => {

    const receivedNotifications =[
        {
            seen: true,
            title:"Congratulations Moses! Your gift card trade with Emily has been successfully completed",
            time: "2 mins ago",
        },
        {
            seen: true,
            title:"You have received a new trade offer from David for your Amazon gift card",
            time: "15 mins ago",
        },
        {
            seen: true,
            title:"Saah has accepted your trade offer for her Google play gift card.",
            time: "30 mins ago",
        },
        {
            seen: true,
            title:"You have a new message from Michael regarding your gift card trade.",
            time: "30 mins ago",
        },
        {
            seen: true,
            title:"Your gift card has been successfully added to your account, Moses",
            time: "30 mins ago",
        },
        {
            seen: true,
            title:"Your iTunes gift card has been removed from your, Moses.",
            time: "30 mins ago",
        },
        {
            seen: true,
            title:"Your account balance has been updated to $150  after trading with Olivia",
            time: "30 mins ago",
        },
        {
            seen: true,
            title:"Your withdrawal request of $70 has been processed successfully, Moses.",
            time: "30 mins ago",
        },
        {
            seen: true,
            title:"Sorry, Moses your gift card trade with Ava could not be completed. Please try again.",
            time: "30 mins ago",
        },
        {
            seen: true,
            title:"We detected a login attempt from an unknown device,John. Please review your account activity",
            time: "30 mins ago",
        },
        {
            seen: true,
            title:"Congratulation,Moses! You earned a $50 bonus for refering your friend,Jackson.",
            time: "30 mins ago",
        },
        {
            seen: true,
            title:"Hi,Moses! Get 10% bonus om your next gift card trade with us. Use code MOSES10",
            time: "30 mins ago",
        },
    ]

    return(
        <div className="flex bg-gray-100 gap-5 px-5 relative">
            <div className='h-screen w-1/5 py-5 sticky top-0'>
                <SideBar />
            </div>
            <div className="flex flex-col gap-10 w-full py-5">
                <Headbar header="Account Settings" />
                <div className="flex gap-5">

                    
                    <SubMenu />
                    <div className="w-full flex flex-col gap-8 items-center">
                        <h2 className="text-2xl font-bold">Notifications</h2>
                        <section className="bg-[#ffffff] overflow-y-auto flex w-full gap-5 flex-col p-4 rounded-md [box-shadow:6px_6px_10px_6px_#00000040]">
                            {
                                receivedNotifications.map((e)=>(
                                <div className="w-full flex items-center gap-4">
                                <div className="flex gap-4 items-center">
                                <div className={`w-3 h-3 rounded-full bg-[#43B569]`}></div>
                                <div className="w-10 aspect-square rounded-full border border-gray-500"></div>
                                </div>

                                <div className="">
                                    <h4 className="font-semibold">{e.title}</h4>
                                    <p className="text-sm text-[#F55757]">{e.time}</p>
                                </div>
                            </div>
                                ))
                            }
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
