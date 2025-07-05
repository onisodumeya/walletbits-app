import ImageBg from '../components/AuthImageBg.jsx'
import Modal from '../components/Modals.jsx'

import { AuthForm, Input } from '../components/AuthForm.jsx'
import { useEffect, useState } from 'react'

function Register() {

    const [isModalopen, setCloseModal] = useState(false)

    const handleOpenModal = () => {
        setCloseModal(true)
    }

    const handleCloseModal = () => {
        setCloseModal(false) 
    }

    return (
        
        <>
        <Modal 
        
        openModal={isModalopen}
        closeModal={handleCloseModal}
        />
        
        <div className='flex min-h-screen bg-[#F9FAFB]'>
            <div className='w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center'>
                <h1 className='font-black text-3xl tracking-wide fixed top-10 lg:hidden text-[#D470B7]'>WALLETBITS</h1>

                <AuthForm

                    heading="Sign Up"
                    subHeading="Sign up and start exploring"

                    inputs={
                        <>

                            <Input

                                labelText="Full Name"
                                placeholder="Moses Charles"
                                id="fullName"

                            />
                            <Input

                                labelText="Email Address"
                                placeholder="moses12345@gmail.com"
                                id="Email"
                                inputType="email"

                            />

                            <Input

                                labelText="Password"
                                id="password"
                                inputType="password"

                            />

                            <Input

                                labelText="Confirm Password"
                                id="confirmPassword"
                                inputType="password"

                            />

                        </>
                    }

                    buttonText="Sign Up"
                    buttonLink='/modal'

                    hasAccount={true}
                />
            </div>
            <ImageBg />
        </div>
        </>
        
    )

}

export default Register