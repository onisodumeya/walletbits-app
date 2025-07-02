import Image from '../assets/pngs/why-choose-img.png'

function ImageBg(){

    return(
        <div className='w-1/2 bg-[#D470B766] px-10 py-10 flex flex-col gap-20 items-center h-full'>
            <h1 className='font-black text-3xl tracking-wide text-[#D470B7] self-start'>WALLETBITS</h1>
            <img src={Image} alt="" className='max-w-3/4' />
        </div>
    )
    
}

export default ImageBg