import ImageBg from '../../components/AuthImageBg.jsx'
import Modal from '../../components/Modals.jsx'
import Google from '../../assets/svgs/google.svg'
import Apple from '../../assets/svgs/apple.svg'
import axios from 'axios'

import { AuthForm, Input } from '../../components/AuthForm.jsx'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const baseURL = import.meta.env.VITE_API_BASE_URL;

function Register() {
    const [isModalopen, setCloseModal] = useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const togglePassword = () => setShowPassword(!showPassword)
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

    const handleOpenModal = () => setCloseModal(true)
    const handleCloseModal = () => setCloseModal(false)

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [messageColor, setMessageColor] = useState('')

    const navigate = useNavigate()

    const [isRegistering, setIsRegistering] = useState(false)

    useEffect(() => {

        if (confirmPassword === "") {
            setMessageColor("");
            setMessage("");
            return;
        }

        if (confirmPassword !== password) {
            setMessageColor("text-red-500");
            setMessage("Passwords do not match");
        } else {
            setMessageColor("");
            setMessage("");
        }

    }, [password, confirmPassword]);

    const handleRegistration = async () => {
        setIsRegistering(true)

        if (!username || !email || !password) {
            setMessage("All fields are required.");
            return;
        }



        try {
            const formData = new URLSearchParams();
            formData.append("username", username);
            formData.append("email", email);
            formData.append("password", password);

            const response = await axios.post(
                `${baseURL}/auth/signup`,
                formData,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }
            );
            const accessToken = response.data.data.accessToken;
            const refreshToken = response.headers.authorization;

            localStorage.setItem('accessToken', accessToken);
            console.log("refreshToken: ", refreshToken)
            localStorage.setItem('userEmail', email)

            console.log("Registration Successfull");
            navigate('/otp', { state: { from: 'register' } });

        } catch (err) {
            setIsRegistering(false)
            console.log("❌ Error Response:", err);
            console.log("❌ Status Code:", err.response?.status);
            setError(err.response?.data?.message || 'Sign-up failed. Try again.')
        }
    }

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
                                    value={username}
                                    change={(e) => setUsername(e.target.value)}
                                />
                                <Input
                                    labelText="Email Address"
                                    placeholder="moses12345@gmail.com"
                                    value={email}
                                    inputType="email"
                                    change={(e) => setEmail(e.target.value)}
                                />

                                {/* Password Field with Eye Toggle */}
                                <div className="relative">
                                    <Input
                                        labelText="Password"
                                        value={password}
                                        inputType={showPassword ? "text" : "password"}
                                        change={(e) => setPassword(e.target.value)}
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
                                        change={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <div className="absolute right-3 bottom-3 cursor-pointer" onClick={toggleConfirmPassword}>
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>

                            </>
                        }

                        extra={<p className={`text-start ${messageColor}`}>{message}</p>}

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

                        buttonText={isRegistering ? "Registering..." : "Sign up"}
                        click={handleRegistration}
                        hasAccount={true}
                    />
                </div>
                <ImageBg />
            </div>
        </>
    )
}

export default Register