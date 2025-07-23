import { FiArrowUpRight } from 'react-icons/fi'


function MarketCard({title, amount, percentage}) {
    return(
        <div className="w-full flex flex-col gap-5 bg-white shadow-sm shadow-gray-300 p-2.5 rounded-xl">
            <div>
                <p className="text-gray-400">{title}</p>
                <h2 className="text-2xl">{amount}</h2>
            </div>
            
            <div className="text-green-400 flex items-center gap-2">
                <FiArrowUpRight />
                <p>{percentage} Today</p>
            </div>
        </div>
    )
}

export default MarketCard