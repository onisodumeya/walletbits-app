import ImageBg from "../components/AuthImageBg.jsx";
import Modal from "../components/Modals.jsx";
import OTPInputs from "../components/OtpInputs.jsx";
import axios from "axios";
import axiosInstance from "../api/axiosInstance.jsx";

import { Link, useNavigate, useLocation, replace } from "react-router-dom";
import { AuthForm, Input } from "../components/AuthForm.jsx";
import { useState, useEffect, useRef } from "react";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const ForgotPassword = () => {
  const [isModalopen, setCloseModal] = useState(false);
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [modalBorder, setModalBorder] = useState("white");

  const handleOpenModal = () => {
    setCloseModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setCloseModal(false);
    document.body.style.overflow = "scroll";
  };

  const navigate = useNavigate();

  const setLocalStorage = () => {
    if (!email.trim()) {
      handleOpenModal();
      setHeader("No Email");
      setText("Please provide an email to proceed");
      setModalBorder("border-red-500");
    } else {
      localStorage.setItem("userEmail", email.trim());
      navigate("/otp", { state: { from: "forgot-password" } });
    }
  };

  return (
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
      <div className="flex bg-[#F9FAFB] h-screen">
        <div className="auth-pages pt-20 lg:pt-0 w-full overflow-hidden lg:w-1/2 flex flex-col lg:flex-row items-center justify-start lg:justify-center">
          <Link
            to="/"
            className="font-black text-3xl tracking-wide absolute top-5 lg:hidden text-[#D470B7]"
          >
            <h1>WALLETBITS</h1>
          </Link>
          <AuthForm
            heading="Forgot Password?"
            subHeading="Please provide the email address associated with your account below to receive an OTP for password reset"
            inputs={
              <>
                <Input
                  labelText="Email"
                  placeholder="mosesjoseph@gmail.com"
                  id="mail"
                  inputType="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </>
            }
            buttonText="Proceed"
            click={setLocalStorage}
          />
        </div>
        <ImageBg />
      </div>
    </>
  );
};
