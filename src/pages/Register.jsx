import ImageBg from '../components/AuthImageBg.jsx'
import Modal from '../components/Modals.jsx'
import { AuthForm, Input } from '../components/AuthForm.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Register() {
    const [isModalopen, setCloseModal] = useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const togglePassword = () => setShowPassword(!showPassword)
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

    const handleOpenModal = () => setCloseModal(true)
    const handleCloseModal = () => setCloseModal(false)

    return (
        <>
            <Modal openModal={isModalopen} closeModal={handleCloseModal} />

            <div className='flex max-h-screen'>
                <div className='auth-pages pt-20 bg-[#F9FAFB] max-h-screen lg:h-fit lg:overflow-scroll w-full lg:pt-40 lg:pb-10 lg:w-1/2 flex flex-col lg:flex-row items-center justify-start lg:justify-center'>
                    <Link to='/' className='font-black text-3xl tracking-wide absolute top-5 lg:hidden text-[#D470B7]'>
                        <h1>WALLETBITS</h1>
                    </Link>

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

                                {/* Password Field with Eye Toggle */}
                                <div className="relative">
                                    <Input
                                        labelText="Password"
                                        id="password"
                                        inputType={showPassword ? "text" : "password"}
                                    />
                                    <div className="absolute right-3 bottom-3 cursor-pointer" onClick={togglePassword}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>

                                {/* Confirm Password Field with Eye Toggle */}
                                <div className="relative">
                                    <Input
                                        labelText="Confirm Password"
                                        id="confirmPassword"
                                        inputType={showConfirmPassword ? "text" : "password"}
                                    />
                                    <div className="absolute right-3 bottom-3 cursor-pointer" onClick={toggleConfirmPassword}>
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>
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