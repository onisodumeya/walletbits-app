import { Link } from "react-router-dom"

export const AuthForm = ({ method, heading, subHeading, inputs, buttonText, redirectText, linkText, link, buttonLink, forgotPasswordText, extra }) => {

    return(
        <form method={method} className="flex flex-col shadow-md items-center w-4/5 bg-white px-8 py-8 rounded-[20px] gap-6">
            <div className="self-start">
                <img src="" alt="" />
                <p>Back</p>
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-center place-items-center text-4xl">{heading}</h1>
                <p>{subHeading}</p>
            </div>

            {inputs && <div className="w-full flex flex-col gap-6">
                {inputs}
            </div>}

            <div>
                {extra}
            </div>

            <Link to={buttonLink} className="w-full">
                <button className="text-white bg-[#D470B7] hover:bg-[#c272ab] transition-colors duration-300 w-full rounded-full px-3 py-2.5 cursor-pointer">
                    {buttonText}
                </button>
            </Link>

            {redirectText && <p>{redirectText}{" "}<Link to={link} className="text-[#D470B7]">{linkText}</Link></p>}
            {forgotPasswordText && <Link to={link}><u>{forgotPasswordText}</u></Link>}
        </form>
    )

}

export const Input = ({ name, labelText, placeholder, type = "text", value, onChange}) => {

    return(
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-xs font-medium">{labelText}</label>
            <input type={name} id={name} placeholder={placeholder} value={value} onChange={onChange} className="border w-full border-[#E6E6E6] px-5 py-3 outline-0 text-sm rounded-xl"/>
        </div>
    )

}