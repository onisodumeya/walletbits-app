import ImageBg from '../components/AuthImageBg.jsx'
import CheckMark from '../assets/svgs/check-mark.svg'

import { AuthForm, Input } from '../components/AuthForm.jsx'
import { Link } from 'react-router-dom'



function ResetPassword(){

    return (
        <div className='flex max-h-screen'>
            <div className='auth-pages pt-20 bg-[#F9FAFB] max-h-screen lg:h-fit lg:overflow-scroll w-full lg:pt-40 lg:pb-10 lg:w-1/2 flex flex-col lg:flex-row items-center justify-start lg:justify-center'>
            <Link to='/' className='font-black text-3xl tracking-wide absolute top-5 lg:hidden text-[#D470B7]'><h1>WALLETBITS</h1></Link>
                <AuthForm 
                
                    heading = "Reset Password"
                    subHeading = "Please enter a new password"

                    inputs={
                        <>
                        
                            <Input 
                            
                                labelText=" Password"
                                id="Password"
                                inputType="password"
                            
                            />

                            <Input 
                            
                                labelText="Confirm Password"
                                id="confirmPassword"
                                inputType="password"
                            
                            />
                        
                        </>
                    }

                    buttonText="Create New Password"

                    extra={
                        
                        <div className='text-[10px] flex flex-wrap gap-7 text-green-500'>
                            <div className='flex gap-1'>
                                <p>8 Characters</p>
                                <img src={CheckMark} alt="" />
                            </div>
                            <div className='flex gap-1'>
                                <p>Uppercase</p>
                                <img src={CheckMark} alt="" />
                            </div>
                            <div className='flex gap-1'>
                                <p>Lowercase</p>
                                <img src={CheckMark} alt="" />
                            </div>
                            <div className='flex gap-1'>
                                <p>Number</p>
                                <img src={CheckMark} alt="" />
                            </div>
                            <div className='flex gap-1'>
                                <p>Special character</p>
                                <img src={CheckMark} alt="" />
                            </div>
                        </div>
                    }
                />
            </div>
            <ImageBg />
        </div>
    )

}

export default ResetPassword