import { useEffect, useState } from 'react'
import Close from '../assets/svgs/close-modal-icon.svg'
import Success from '../assets/svgs/success-icon.svg'

import { Link } from 'react-router-dom'

function Modal({ priBtn = true, secBtn = false, successImg = false, priBtnLink, priBtnText, secBtnLink, secBtnText, openModal, closeModal, heading, headingColor, paragragh, text, borderColor}) {

    

    return (

        <>

            {openModal && 
                <div className='absolute w-full top-0 left-0 flex items-center justify-center h-screen bg-[rgba(0,0,0,0.05)] z-50'>
                    <div className={`w-4/5 lg:max-w-md flex flex-col gap-5 py-6 px-8 rounded-2xl border ${borderColor} border-t-4 place-items-center bg-white shadow-md`}>
                        <img src={Close} alt="" className='w-7 self-end mb-5 cursor-pointer' onClick={closeModal}/>
                        {successImg && <img src={Success} alt="" className='w-15' />}
                        <div className="flex flex-col place-items-center gap-4">
                            <h1 className={`text-center text-3xl ${headingColor}`}>{heading}</h1>
                            <p className='text-center text-sm text-[#8E9A9A]'>{paragragh}</p>
                            <p className='text-center text-sm text-[#8E9A9A]'>{text}</p>
                        </div>

                        <div className='w-full flex flex-col gap-2.5'>
                            {priBtnText &&
                                <Link to={priBtnLink}>
                                    <button className='w-full text-white bg-[#D470B7] hover:bg-[#c272ab] transition-colors duration-300 rounded-full px-3 py-2.5 cursor-pointer'>{priBtnText}</button>
                                </Link>}
                            {secBtnText &&
                                <Link to={secBtnLink}>
                                    <button className='w-full text-black bg-transparent hover:bg-[#f1f1f1] transition-colors duration-300 rounded-full px-3 py-2.5 cursor-pointer'>{secBtnText}</button>
                                </Link>}
                        </div>
                    </div>
                </div>
            }
            
        </>
    )

}

export default Modal