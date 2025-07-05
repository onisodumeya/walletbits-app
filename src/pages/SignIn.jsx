import ImageBg from '../components/AuthImageBg.jsx'
import Modal from '../components/Modals.jsx'

import { useNavigate } from 'react-router-dom';
import {AuthForm, Input} from '../components/AuthForm.jsx'
import { useState, useEffect, useRef } from 'react'

function SignIn(){

    return(
        <>
        <Modal

            modal = {false}
            successImg = {true}
            heading = "Done"
            paragragh = ""

        />
        <div className='flex min-h-screen bg-[#F9FAFB]'>
            <div className='w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center'>
                <h1 className='font-black text-3xl tracking-wide fixed top-10 lg:hidden text-[#D470B7]'>WALLETBITS</h1>
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

                    buttonLink = ""

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