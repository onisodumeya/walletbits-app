import ImageBg from '../components/AuthImageBg.jsx'
import Modal from '../components/Modals.jsx'
import Google from '../assets/svgs/google.svg'
import Apple from '../assets/svgs/apple.svg'

import { Link } from 'react-router-dom';
import {AuthForm, Input} from '../components/AuthForm.jsx'
import { useState, useEffect, useRef } from 'react'

function SignIn(){

    const [isModalopen, setCloseModal] = useState(false)

    const handleOpenModal = () => {
        setCloseModal(true)
        document.body.style.overflow = "hidden"
    }

    const handleCloseModal = () => {
        setCloseModal(false)
        document.body.style.overflow = "scroll"
    }

    return(
        <>
        <Modal

            openModal={isModalopen}
            closeModal={handleCloseModal}
            successImg = {false}
            heading = ""
            paragragh = ""

        />
        <div className='flex bg-[#F9FAFB] h-screen'>
                <div className='auth-pages pt-20 lg:pt-0 w-full overflow-hidden lg:w-1/2 flex flex-col lg:flex-row items-center justify-start lg:justify-center'>
                    <Link to='/' className='font-black text-3xl tracking-wide absolute top-5 lg:hidden text-[#D470B7]'><h1>WALLETBITS</h1></Link>
                <AuthForm 

                    heading = "Log in"
                    subHeading = "Log in to explore"
                
                    inputs = {
                        <>

                            <Input

                                labelText = "Email"
                                placeholder = "mosesjoseph@gmail.com"
                                name = "email"
                                inputType = "email"

                            />

                            <Input

                                labelText = "Password"
                                name = "password"
                                inputType = "password"

                            />
                        
                        </>
                    }

                    buttonText = "Log in"

                    extraButtons={
                        <>
                            <button className='flex gap-2 border border-[#E6E6E6] rounded-full py-2 w-full justify-center cursor-pointer hover:border-black transition duration-300'>
                                    <img src={Google} alt="" />
                                    <p>Login with Google</p>
                                </button>
                            <button className='flex gap-2 border border-[#E6E6E6] rounded-full py-2 w-full justify-center cursor-pointer hover:border-black transition duration-300'>
                                    <img src={Apple} alt="" />
                                    <p>Login with Apple</p>
                                </button>
                        </>
                    }

                    // buttonLink = {}

                    noAccount = {true}

                    forgotPassword = {true}

                />
            </div>
            <ImageBg />
        </div>
        </>
    )

}

export default SignIn