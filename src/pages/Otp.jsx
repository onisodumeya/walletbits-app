import Modal from "../components/Modals";
import { AuthForm } from "../components/AuthForm";
import OTPInputs from "../components/OtpInputs";
import ImageBg from "../components/AuthImageBg";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const OTP = () => {
  const [isModalopen, setCloseModal] = useState(false);
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const [modalBorder, setModalBorder] = useState("white");

  const handleOpenModal = () => {
    setCloseModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setCloseModal(false);
    document.body.style.overflow = "scroll";
  };

  const [censoredEmail, setCensoredEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    if (!email) {
      console.log("No email found in Local Storage");
      return;
    }

    const atIndex = email.indexOf("@");

    if (atIndex <= 2) {
      setCensoredEmail(email);
      return;
    }

    const firstTwo = email.slice(0, 2);

    const domain = email.slice(atIndex);

    const numOfStars = atIndex - 2;

    const writeStars = "*".repeat(numOfStars);

    setCensoredEmail(firstTwo + writeStars + domain);
  }, []);

  const [otp, setOtp] = useState("");

  const handleOTPChange = (newOtp) => {
    setOtp(newOtp);
    console.log(otp);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [redirectFunction, setRedirectFunction] = useState(() => () => {});
  const [resendOTPPath, setResendOTPPath] = useState("");

  const redirectToResetPassword = () =>
    navigate("/reset-password", { replace: true });
  const redirectToOverview = () => navigate("/overview", { replace: true });

  const verifyOtp = async (otp) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const formData = new URLSearchParams();
      formData.append("otp", otp);

      const response = await axios.post(
        `${baseURL}/auth/verify-otp`,
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("✅ Verification successful", response.data);
      return response.data;
    } catch (err) {
      console.error(
        "❌ OTP verification failed:",
        err.response?.data || err.message
      );
      throw err;
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    if (location.state?.from === "register") {
      setRedirectFunction(() => redirectToSignIn);
      setResendOTPPath("signup");
    } else if (location.state?.from === "forgot-password") {
      setRedirectFunction(() => redirectToResetPassword);
      setResendOTPPath("forgot-password");
    } else if (location.state?.from === "sign-in") {
      setRedirectFunction(() => redirectToOverview);
      setResendOTPPath("login");
    } else {
      // handleOpenModal();
      setHeader("You shouldn't be here");
      setText("Please create an account or log in");
      setModalBorder("border-red-500");
    }
  }, [location.state]);

  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    console.log(otp);

    try {
      if (otp.length < 6) {
        setHeader("Invalid OTP");
        setText("OTP must be 6 digits.");
        setModalBorder("border-red-500");
        handleOpenModal();
        return;
      }

      setIsVerifying(true);
      await verifyOtp(otp);

      localStorage.removeItem("userEmail");

      redirectFunction();
    } catch (err) {
      setHeader("OTP Verification Failed");
      setText(err.response?.data?.message || "Invalid or expired OTP.");
      setModalBorder("border-red-500");
      handleOpenModal();
    }
  };

  const refreshTime = "10";

  const [otpRefreshTime, setOtpRefreshTime] = useState(refreshTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (Number(otpRefreshTime) === 0) {
      setIsActive(true);
      return;
    }

    const intervalId = setInterval(() => {
      setOtpRefreshTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [otpRefreshTime]);

  const handleResendOTP = async () => {
    console.log(resendOTPPath);

    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await axiosInstance.post(
        `${baseURL}/auth/${resendOTPPath}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("✅ OTP resent:", response.data.data.message);
    } catch (error) {
      console.error(
        "❌ Resend OTP failed:",
        error.response?.data || error.message
      );
    }
  };

  const resendOTP = () => {
    handleResendOTP();

    setOtpRefreshTime(refreshTime);
    setIsActive(false);
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
            heading="OTP"
            subHeading={`Please provide the OTP sent to ${censoredEmail}`}
            inputs={
              <div className="w-full flex gap-2.5">
                <OTPInputs length={6} onOTPChange={handleOTPChange} />
              </div>
            }
            extra={
              <div className="flex gap-2">
                <p>Didn't get the code?</p>{" "}
                <button
                  onClick={resendOTP}
                  disabled={!isActive}
                  className={
                    isActive
                      ? `text-[#F20D0D] cursor-pointer`
                      : `text-[#ff8e8e] cursor-not-allowed`
                  }
                >
                  {isActive
                    ? `Resend OTP`
                    : `Resend in ${otpRefreshTime} seconds`}
                </button>
              </div>
            }
            buttonText={isVerifying ? "Verifying..." : "Verify"}
            btnType="submit"
            click={isVerifying ? null : handleVerify}
          />
        </div>
        <ImageBg />
      </div>
    </>
  );
};

export default OTP;
