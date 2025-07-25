import Arrow from '../assets/svgs/previous-arrow.svg'
import { Link } from "react-router-dom"
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export const AuthForm = ({ method, heading, value, submission, subHeading, inputs, buttonText, buttonLink, hasAccount = false, noAccount = false, forgotPassword = false, extra, text, extraButtons, click, btnType }) => {

    const formRef = useRef(null);

    useEffect(() => {
        if (!formRef.current) return;

        gsap.fromTo(
            formRef.current,
            {scale: 0.5, opacity: 0},
            {scale: 1, opacity: 1, duration: 1, ease: "power3.out"}
        )
    }, [])

    return(
        <div ref={formRef} method={method} onSubmit={submission} className="flex flex-col shadow-md items-center w-11/12 md:w-4/5 bg-white px-8 py-6 rounded-[20px] gap-4">
            <button className="self-start flex gap-2.5 cursor-pointer items-center justify-center" type='button' onClick={(e) => {e.preventDefault();
                window.history.back()}}>
                <img src={Arrow} alt="" className='w-4'/>
                <p>Back</p>
            </button>

            <div className="flex flex-col gap-2">
                <h1 className="text-center place-items-center text-4xl">{heading}</h1>
                <p className="text-center place-items-center font-thin text-gray-400">{subHeading}</p>
            </div>

            {inputs && <div className="w-full flex flex-col gap-6">
                {inputs}
            </div>}

            <div className='w-full'>
                {extra}
            </div>

            
            <button onClick={click} type={btnType} className="text-white bg-[#D470B7] hover:bg-[#c272ab] transition-colors duration-300 w-full rounded-full px-3 py-2.5 cursor-pointer">
                {buttonText}
            </button>

            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5'>
                {extraButtons}
            </div>

            {hasAccount && <p>Already have an account?{" "}<Link to='/sign-in' className="text-[#D470B7]">Login</Link></p>}
            {noAccount && <p>Don't have an account?{" "}<Link to='/register' className="text-[#D470B7]">Sign up</Link></p>}
            {forgotPassword && <Link to='/forgot-password'><u>Forgot your password?</u></Link>}
        </div>
    )

}

export const Input = (props) => {
    

    return(
        <div className="flex flex-col gap-2">
            <label htmlFor={props.id} className="text-xs font-medium">{props.labelText}</label>
            <input type={props.inputType} id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.change} className="border w-full border-[#E6E6E6] px-5 py-3 outline-0 text-sm rounded-xl"/>
        </div>
    )

}

Input.defaultProps = {
    type: 'text'
}