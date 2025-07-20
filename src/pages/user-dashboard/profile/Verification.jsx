import SideBar from "../../../components/Sidebar";
import Headbar from "../../../components/Headbar";
import SubMenu from "../../../components/SettingsSubMenu";

import { FiCheck } from "react-icons/fi";
import { LiaFileUploadSolid, LiaCameraSolid } from 'react-icons/lia'
import { useState, useRef } from "react";


function Verification() {

    const verificationNum = ["1", "2", "3", "4"]

    const lent = verificationNum.length;

    const [isVerified, setIsVerified] = useState(false)

    const [emailAvailable, setEmailAvailable] = useState(false);
    const [phoneAvailable, setPhoneAvailable] = useState(false);

    const [idFront, setIdFront] = useState(null);
    const [idBack, setIdBack] = useState(null);
    const [selfie, setSelfie] = useState(null);

    const selfieRef = useRef(null)

    const handleImageUpload = (event, type) => {
        const file = event.target.files[0];
        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        switch (type) {
            case 'front':
                setIdFront(imageUrl);
                break;
            case 'back':
                setIdBack(imageUrl);
                break;
            case 'selfie':
                setSelfie(imageUrl);
                break;
            default:
                console.warn('Unknown image type');
        }
    };
    


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
                        <h2 className="text-2xl font-bold">Verification Progress</h2>
                        <div className="flex w-full justify-between">
                            {verificationNum.map((num, index) => (
                                <div className={index + 1 === lent ? 'w-fit items-center' : 'flex w-full items-center'}>
                                    <h2 key={index} className="text-2xl font-bold px-5 py-3 rounded-full border-2 border-[#D470B7] bg-gray-200">{num}</h2>
                                    {lent > index + 1 && <div className="w-full h-[2px] bg-[#D470B7]"></div>}
                                </div>
                            ))}
                        </div>

                        <div className="border w-full p-5 rounded-lg flex flex-col gap-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold">Email Verfication</h3>
                                <div className={isVerified ? 'bg-[#64AD8D78]  flex items-center px-2 rounded-md' : 'bg-[#CB6D5396] flex items-center px-2 rounded-md'}>
                                    {isVerified && <FiCheck />}
                                    <p>Not verified</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>{emailAvailable ? email : "Moses123@gmail.com"}</p>
                                {isVerified ? null : <button className="text-[#D470B7] cursor-pointer">Send Verification Code</button>}
                            </div>
                        </div>
                        
                        <div className="border w-full p-5 rounded-lg flex flex-col gap-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold">Phone Number Verfication</h3>
                                <div className={isVerified ? 'bg-[#64AD8D78]  flex items-center px-2 rounded-md' : 'bg-[#CB6D5396] flex items-center px-2 rounded-md'}>
                                    {isVerified && <FiCheck />}
                                    <p>Not verified</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>{phoneAvailable ? phone : "08096503033"}</p>
                                {isVerified ? null : <button className="text-[#D470B7] cursor-pointer">Send Verification Code</button>}
                            </div>
                        </div>
                        
                        <div className="border w-full p-5 rounded-lg flex flex-col gap-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold">Government ID Verfication</h3>
                                <div className={isVerified ? 'bg-[#64AD8D78]  flex items-center px-2 rounded-md' : 'bg-[#CB6D5396] flex items-center px-2 rounded-md'}>
                                    {isVerified && <FiCheck />}
                                    <p>Not verified</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-5">
                                    <label className="w-1/2 max-h-60 border-dashed border-2 border-gray-300 rounded-lg flex flex-col items-center p-5">
                                        {idFront ? 
                                            <img
                                                src={idFront}
                                                alt="ID Front Preview"
                                                className="h-40 rounded shadow"
                                            /> : <><LiaFileUploadSolid className="text-8xl" />
                                                <p>Upload Front of ID</p>
                                                <input
                                                    className="hidden"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleImageUpload(e, 'front')}
                                                /></>
                                        }
                                        
                                    </label>
                                        
                                    <label className="w-1/2 max-h-60 border-dashed border-2 border-gray-300 rounded-lg flex flex-col items-center p-5">
                                        {idBack ? 
                                            <img
                                                src={idBack}
                                                alt="ID Front Preview"
                                                className="h-40 rounded shadow"
                                            /> : <><LiaFileUploadSolid className="text-8xl" />
                                                <p>Upload Back of ID</p>
                                                <input
                                                    className="hidden"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleImageUpload(e, 'back')}
                                                /></>
                                        }  
                                    </label>
                                </div>
                                <p className="text-sm text-gray-400">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
                            </div>
                        </div>
                        <div className="border w-full p-5 rounded-lg flex flex-col gap-10">
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-2xl font-bold">Government ID Verfication</h3>
                                    <p className="text-sm text-gray-400">Take a selfie holding your ID card</p>
                                </div>
                                <div className={isVerified ? 'bg-[#64AD8D78]  flex items-center px-2 rounded-md' : 'bg-[#CB6D5396] flex items-center px-2 rounded-md'}>
                                    {isVerified && <FiCheck />}
                                    <p>Not verified</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-5">
                                    <label className="w-1/2 max-h-60 border-dashed border-2 border-gray-300 rounded-lg flex flex-col items-center p-5">
                                        <div className="flex flex-col items-center p-5">
                                            {selfie ? 
                                                <img
                                                    src={selfie}
                                                    alt="ID Front Preview"
                                                    className="h-40 rounded shadow"
                                                /> : <><LiaCameraSolid className="text-8xl" />
                                                    <p>Upload Selfie</p>
                                                    <input
                                                        ref={selfieRef}
                                                        className="hidden"
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => handleImageUpload(e, 'selfie')}
                                                    /></>
                                            }
                                            
                                        </div>
                                    </label>
                                    <button onClick={() => selfieRef.current.click()} className="bg-[#D470B7] w-1/2 py-2 rounded-full hover:bg-[#ad6c9b] transition-colors duration-300 cursor-pointer">Upload selfie</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-4">
                            <p className="text-sm text-gray-400">We use this information to verify your identity and keep your account secure</p>
                            <button className="bg-[#D470B7] w-1/2 py-2 rounded-full hover:bg-[#ad6c9b] transition-colors duration-300 cursor-pointer">Submit for Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Verification