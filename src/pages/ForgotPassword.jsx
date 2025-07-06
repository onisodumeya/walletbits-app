import ImageBg from '../components/AuthImageBg.jsx';
import Modal from '../components/Modals.jsx';
import OTPInputs from '../components/OtpInputs.jsx';

import { Link } from 'react-router-dom';
import {AuthForm, Input} from '../components/AuthForm.jsx';
import { useState, useEffect, useRef } from 'react';

export const ForgotPassword = () => {
    const [isModalopen, setCloseModal] = useState(false);
    const [header, setHeader] = useState('');
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [modalBorder, setModalBorder] = useState('white');

    const handleOpenModal = () => {
        setCloseModal(true);
        document.body.style.overflow = "hidden";
    }

    const handleCloseModal = () => {
        setCloseModal(false);
        document.body.style.overflow = "scroll";
    }

    const setLocalStorage = () => {
        if(!email.trim()){
            handleOpenModal();
            setHeader("No Email");
            setText("Please provide an email to proceed");
            setModalBorder('border-red-500')
        } else{
            localStorage.setItem('userEmail', email.trim());
            window.location.href = '/otp';
        }
    }

    return(
        <>
            <Modal

                openModal={isModalopen}
                closeModal={handleCloseModal}
                successImg={false}
                heading={header}
                paragragh={text}
                priBtnText=""
                priBtnLink=""
                secBtnText=""
                secBtnLink=""
                borderColor={modalBorder}


            />
            <div className='flex bg-[#F9FAFB] h-screen'>
                    <div className='auth-pages pt-20 lg:pt-0 w-full overflow-hidden lg:w-1/2 flex flex-col lg:flex-row items-center justify-start lg:justify-center'>
                        <Link to='/' className='font-black text-3xl tracking-wide absolute top-5 lg:hidden text-[#D470B7]'><h1>WALLETBITS</h1></Link>
                    <AuthForm 

                        heading = "Forgot Password?"
                        subHeading = "Please provide the email address associated with your account below to receive an OTP for password reset"

                        inputs = {
                            <>

                                <Input

                                    labelText = "Email"
                                    placeholder = "mosesjoseph@gmail.com"
                                    id = "mail"
                                    inputType = "email"
                                    value = {email}
                                    onChange={(e) => setEmail(e.target.value)}

                                />


                            </>
                        }

                        buttonText = "Proceed"

                        click={setLocalStorage}


                    />
                </div>
                <ImageBg />
            </div>
        </>
    )

}

export const OTP = () => {
    const [isModalopen, setCloseModal] = useState(false)
    const [header, setHeader] = useState('');
    const [text, setText] = useState('');
    const [modalBorder, setModalBorder] = useState('white');

    const handleOpenModal = () => {
        setCloseModal(true)
        document.body.style.overflow = "hidden"
    }

    const handleCloseModal = () => {
        setCloseModal(false)
        document.body.style.overflow = "scroll"
    }

    const [censoredEmail, setCensoredEmail] = useState('');

    useEffect(() => {
        const email = localStorage.getItem('userEmail');

        if(!email){
            console.log('No email found in Local Storage');
            return
        }

        const atIndex = email.indexOf('@');

        if(atIndex <= 2) {
            setCensoredEmail = email
        }

        const firstTwo = email.slice(0, 2);

        const domain = email.slice(atIndex);
    
        const numOfStars = atIndex - 2;
    
        const writeStars = '*'.repeat(numOfStars);
    
        setCensoredEmail(firstTwo + writeStars + domain);
    }, []);




    const [otp, setOtp] = useState('');

    const handleOTPChange = (newOtp) => {
        setOtp(newOtp); // Update OTP when inputs change
        
        
    }
    
    const handleRedirect = () => {
        
        handleOTPChange
        
        if (otp.length > 4) {
            console.log("Submitted OTP: ", otp);
            localStorage.removeItem('userEmail');
            window.location.href = '/reset-password';
            
        } else {
            handleOpenModal();
            setHeader("Invalid OTP");
            setText("Please provide a valid OTP to proceed");
            setModalBorder('border-red-500')
        }
    }
     

    return(
        <>
            <Modal

                openModal={isModalopen}
                closeModal={handleCloseModal}
                successImg={false}
                heading={header}
                paragragh={text}
                priBtnText=""
                priBtnLink=""
                secBtnText=""
                secBtnLink=""
                borderColor={modalBorder}


            />
            <div className='flex bg-[#F9FAFB] h-screen'>
                    <div className='auth-pages pt-20 lg:pt-0 w-full overflow-hidden lg:w-1/2 flex flex-col lg:flex-row items-center justify-start lg:justify-center'>
                        <Link to='/' className='font-black text-3xl tracking-wide absolute top-5 lg:hidden text-[#D470B7]'><h1>WALLETBITS</h1></Link>
                    <AuthForm 

                        heading = "OTP"
                        subHeading = {`Please provide the OTP sent to ${censoredEmail}`}

                        inputs={
                                <div className='w-full flex gap-2.5'>
                                    <OTPInputs 
                                        onOTPChange={handleOTPChange}
                                    />
                                </div>
                        }


                        buttonText = "Proceed"
                        
                        click = {handleRedirect}


                    />
                </div>
                <ImageBg />
            </div>
        </>
    )

}