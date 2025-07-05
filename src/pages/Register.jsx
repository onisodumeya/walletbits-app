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
        
            <div className='flex max-h-screen'>
                <div className='auth-pages pt-40 bg-[#F9FAFB] max-h-screen lg:h-fit lg:overflow-scroll w-full lg:pt-40 lg:pb-10 lg:w-1/2 flex flex-col lg:flex-row items-center justify-center'>
                <h1 className='font-black text-3xl tracking-wide absolute top-5 lg:hidden text-[#D470B7]'>WALLETBITS</h1>

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