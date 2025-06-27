


export const PriBtn = (props) => {
    return(
        <button className="pri-btn font-medium bg-[#18181B] hover:bg-[#353535] text-white border-none px-6 py-3 rounded-2xl cursor-pointer transition duration-300">{props.btnText}</button>
    )
}

export const SecBtn = (props) => {
    return(
        <button className="sec-btn font-medium bg-transparent hover:bg-[#ececec] border-none px-4 py-3 rounded-2xl cursor-pointer transition duration-300">{props.btnText}</button>
    )
}