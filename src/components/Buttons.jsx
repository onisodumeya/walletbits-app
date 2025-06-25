


export const PriBtn = (props) => {
    return(
        <button className="pri-btn font-medium bg-[#18181B] text-white border-none px-6 py-3 rounded-2xl cursor-pointer transition-[0.3s]">{props.btnText}</button>
    )
}

export const SecBtn = (props) => {
    return(
        <button className="sec-btn font-medium bg-transparent border-none px-4 py-3 rounded-2xl cursor-pointer transition-[0.3s]">{props.btnText}</button>
    )
}