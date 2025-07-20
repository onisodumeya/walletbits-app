import SideBar from "../../../components/Sidebar";
import Headbar from "../../../components/Headbar";


function Verification() {


    return(
        <div className="flex bg-gray-100 gap-5 px-5 relative">
            <div className='h-screen w-1/5 py-5 sticky top-0'>
                <SideBar />
            </div>
            <div className=" flex flex-col gap-10 w-full py-5">
                <Headbar header="Account Settings" />
            </div>
        </div>
    )


}

export default Verification