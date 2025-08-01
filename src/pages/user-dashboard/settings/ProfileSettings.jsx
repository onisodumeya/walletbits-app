import { SideBarDesktop } from "../../../components/Sidebar.jsx";
import Headbar from "../../../components/Headbar";
import SubMenu from "../../../components/SettingsSubMenu";
import TokenValidation from "../../../utils/auth.jsx";
import Modal from "../../../components/Modals.jsx";

import { LiaCameraSolid } from 'react-icons/lia'
import { useState, useRef } from "react";


function ProfileSettings() {

    const profilePictureRef = useRef(null);

    const [profilePicture, setProfilePicture] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        setProfilePicture(imageUrl);
        console.warn('Unknown image type');        

    };

    // const fetchUserInfo = async () => {
    //     try {
    //         fetch("")
            
    //     } catch (error) {
            
    //     }
    // }

    const token = localStorage.getItem("accessToken");

    if(TokenValidation(token)) {
            console.log("Token is valid. User is logged in.");
        
        return (
            <div className="flex bg-gray-100 gap-5 px-5 relative">
                <div className='h-screen w-1/5 py-5 sticky top-0'>
                    <SideBarDesktop />
                </div>
                <div className="flex flex-col gap-10 w-full py-5">
                    <Headbar header="Account Settings" />
                    <div className="flex gap-5">
                        <SubMenu />
                        <div className="w-full flex flex-col gap-8 items-center p-5 bg-white shadow-md shadow-gray-300 rounded-xl">
                            <div className="flex items-center gap-5 w-full">
                                <label className="w-50 aspect-square border-2 border-gray-300 rounded-full flex flex-col items-center relative">
                                    <div className="flex flex-col items-center rounded-full h-full w-full relative overflow-hidden justify-center">
                                        {profilePicture ? (
                                            <img
                                                src={profilePicture}
                                                alt="Profile picture"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <p className="text-gray-400 text-sm text-center">No Image</p>
                                        )}
                                    </div>

                                    <input
                                        ref={profilePictureRef}
                                        className="hidden"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(e, 'selfie')}
                                    />

                                    <div className="absolute bottom-5 right-0 bg-[#D470B7] text-white p-1.5 rounded-full">
                                        <LiaCameraSolid className="text-2xl" />
                                    </div>
                                </label>


                                <button
                                    onClick={() => profilePictureRef.current.click()}
                                    className="bg-[#D470B7] w-fit px-5 py-2 rounded-lg text-white hover:bg-[#ad6c9b] transition-colors duration-300 cursor-pointer"
                                >
                                    Upload New
                                </button>
                            </div>

                            <div className="flex w-full justify-between gap-5 text-gray-400">
                                <label htmlFor="" className="w-1/2 flex flex-col gap-1">
                                    <p className="text-sm">First Name</p>
                                    <input type="text" className="border-2 w-full border-gray-300 rounded-lg p-2 outline-none text-black" placeholder='Moses' />
                                </label>
                                <label htmlFor="" className="w-1/2 flex flex-col gap-1">
                                    <p className="text-sm">Last Name</p>
                                    <input type="text" className="border-2 w-full border-gray-300 rounded-lg p-2 outline-none text-black" placeholder='Charles' />
                                </label>
                            </div>
                            <div className="flex w-full justify-between gap-5 text-gray-400">
                                <label htmlFor="" className="w-1/2 flex flex-col gap-1">
                                    <p className="text-sm">Email</p>
                                    <input type="email" className="border-2 w-full border-gray-300 rounded-lg p-2 outline-none text-black" placeholder='moses123@gmail.com' />
                                </label>
                                <label htmlFor="" className="w-1/2 flex flex-col gap-1">
                                    <p className="text-sm">Phone Number</p>
                                    <input type="number" className="border-2 w-full border-gray-300 rounded-lg p-2 outline-none text-black" placeholder='08096503033' />
                                </label>
                            </div>
                            <div className="flex w-full justify-between gap-5 text-gray-400">
                                <label htmlFor="" className="w-1/2 flex flex-col gap-1">
                                    <p className="text-sm">Bank Name</p>
                                    <input type="text" className="border-2 w-full border-gray-300 rounded-lg p-2 outline-none text-black" placeholder='First Bank of Nigeria' />
                                </label>
                                <label htmlFor="" className="w-1/2 flex flex-col gap-1">
                                    <p className="text-sm">Account Number</p>
                                    <input type="number" className="border-2 w-full border-gray-300 rounded-lg p-2 outline-none text-black" placeholder='2020567453' />
                                </label>
                            </div>

                            <button className="px-5 py-2 bg-[#D470B7] rounded-lg self-start text-white hover:bg-[#ad6c9b] transition-colors duration-300 cursor-pointer">Save Changes</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        console.log("Token is missing or expired. User NOT logged in.");
        return (
            <Modal
                openModal={true}
                priBtnText="Sign in"
                priBtnLink="/sign-in"
                heading="Unauthorized entry"
                headingColor="text-red-500"
                borderColor="border-red-500"
                paragragh="You are not signed in, please sign in to continue"

            />
        );
    }
}

export default ProfileSettings