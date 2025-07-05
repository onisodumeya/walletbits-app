import Image from '../assets/pngs/why-choose-img.png'

function ImageBg(){

    return(
        <div className='hidden w-1/2 lg:flex lg:max-h-screen lg:overflow-y-hidden bg-[#D470B766] px-10 py-10 flex-col gap-20 items-center'>
            <h1 className='font-black text-3xl tracking-wide text-[#D470B7] self-start'>WALLETBITS</h1>
            <div className="flex-1" />
            <img src={Image} alt="" className='w-3/4 self-center' />
            <div className="flex-1" />
            <div className="flex-1" />
        </div>
    )
    
}

export default ImageBg