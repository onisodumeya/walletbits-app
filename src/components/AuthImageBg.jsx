import Image from '../assets/pngs/why-choose-img.png'

import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

function ImageBg(){

    const imageRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        if(!imageRef.current) return;
        if (!headerRef.current) return;

        gsap.fromTo(
            imageRef.current,
            {scale: 0.5, opacity: 0},
            {scale: 1, opacity: 1, duration: 1, ease: "power3.out"}
        )

        gsap.fromTo(
            headerRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
    }, [])

    return(
        <div className='hidden w-1/2 lg:flex lg:max-h-screen lg:overflow-y-hidden bg-[#D470B766] px-10 py-10 flex-col gap-20 items-center'>
            <h1 ref={headerRef} className='font-black text-3xl tracking-wide text-[#D470B7] self-start'>WALLETBITS</h1>
            <div className="flex-1" />
            <img ref={imageRef} src={Image} alt="" className='w-3/4 self-center' />
            <div className="flex-1" />
            <div className="flex-1" />
        </div>
    )
    
}

export default ImageBg