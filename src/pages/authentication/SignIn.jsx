import ImageBg from "../../components/AuthImageBg.jsx";
import Modal from "../../components/Modals.jsx";
import Google from "../../assets/svgs/google.svg";
import Apple from "../../assets/svgs/apple.svg";
import axios from "axios";
import baseURL from "../../config/apiConfig.js";

import { Link, useNavigate } from "react-router-dom";
import { AuthForm, Input } from "../../components/AuthForm.jsx";
import { useState, useEffect, useRef } from "react";

function SignIn() {
  const [isModalopen, setCloseModal] = useState(false);

  const handleOpenModal = () => {
    setCloseModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setCloseModal(false);
    document.body.style.overflow = "scroll";
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modalHeading, setModalHeading] = useState("");
  const [modalParagraph, setModalParagraph] = useState("");
  const [borderCol, setBorderCol] = useState("");
  const [headingCol, setHeadingCol] = useState("");

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignin = async () => {
    setIsLoggingIn(true);

    try {
      const response = await axios.post(
        `${baseURL}/auth/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const accessToken = response.data.data.accessToken;
      const refreshToken = response.headers.authorization.split(" ")[1];

      const username = response.data.data.user.username;

      // console.log('Access Token:', accessToken);
      // console.log('Refresh Token:', refreshToken);

      localStorage.setItem("username", username);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      navigate("/overview");
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.response.data.message || "Login failed. Please try again.");
      setIsLoggingIn(false);
      setModalParagraph(error);
      setModalHeading("Login failed");
      setBorderCol("border-red-500");
      setHeadingCol("text-red-500");
      handleOpenModal();
    }
  };

  return (
    <>
      <Modal
        openModal={isModalopen}
        closeModal={handleCloseModal}
        successImg={false}
        heading={modalHeading}
        paragragh={modalParagraph}
        borderColor={borderCol}
        headingColor={headingCol}
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
            heading="Log in"
            subHeading="Log in to explore"
            inputs={
              <>
                <Input
                  labelText="Email"
                  placeholder="mosesjoseph@gmail.com"
                  name="email"
                  inputType="email"
                  value={email}
                  change={(e) => setEmail(e.target.value)}
                />

                <Input
                  labelText="Password"
                  name="password"
                  inputType="password"
                  value={password}
                  change={(e) => setPassword(e.target.value)}
                />
              </>
            }
            click={isLoggingIn ? null : handleSignin}
            btnType="submit"
            extraButtons={
              <>
                <button className="flex gap-2 border border-[#E6E6E6] rounded-full py-2 w-full justify-center cursor-pointer hover:border-black transition duration-300">
                  <img src={Google} alt="" />
                  <p>Login with Google</p>
                </button>
                <button className="flex gap-2 border border-[#E6E6E6] rounded-full py-2 w-full justify-center cursor-pointer hover:border-black transition duration-300">
                  <img src={Apple} alt="" />
                  <p>Login with Apple</p>
                </button>
              </>
            }
            // buttonLink = {}

            buttonText={isLoggingIn ? "Logging in..." : "Log in"}
            noAccount={true}
            forgotPassword={true}
          />
        </div>
        <ImageBg />
      </div>
    </>
  );
}

export default SignIn;
