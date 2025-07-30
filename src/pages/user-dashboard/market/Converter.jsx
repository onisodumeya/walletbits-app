import Headbar from '../../../components/Headbar.jsx';
import PriceChart from '../../../components/PriceChart.jsx';
import MarketCard from '../../../components/market-cards/MarketCard.jsx';
import TokenValidation from '../../../utils/auth.jsx';

import { SideBarDesktop } from '../../../components/Sidebar.jsx';
import { NavLink } from 'react-router-dom'

function Converter() {
    const data = [
        { month: 'Jan', income: 45, expense: 30 },
        { month: 'Feb', income: 35, expense: 25 },
        { month: 'Mar', income: 45, expense: 20 },
        { month: 'Apr', income: 30, expense: 22 },
        { month: 'May', income: 45, expense: 28 },
        { month: 'Jun', income: 55, expense: 25 },
        { month: 'Jul', income: 45, expense: 30 },
        { month: 'Aug', income: 65, expense: 32 },
        { month: 'Sep', income: 25, expense: 17 },
        { month: 'Oct', income: 40, expense: 10 },
        { month: 'Nov', income: 36, expense: 20 },
        { month: 'Dec', income: 32, expense: 12 },
    ];

    const cryptos = [
        {
            name: 'Bitcoin',
            symbol: 'BTC',
            price: '$28,000',
            change: '+2.2%',
            marketCap: '$500B',
            volume: '$30B',
            supply: '19M'
        },
        {
            name: 'Ethereum',
            symbol: 'ETH',
            price: '$1,800',
            change: '-1.3%',
            marketCap: '$300B',
            volume: '$20B',
            supply: '120M'
        },
        {
            name: 'Tether',
            symbol: 'USDT',
            price: '$1.00',
            change: '+0.1%',
            marketCap: '$90B',
            volume: '$80B',
            supply: '90B'
        },
        {
            name: 'BNB',
            symbol: 'BNB',
            price: '$240',
            change: '-0.4%',
            marketCap: '$40B',
            volume: '$2B',
            supply: '160M'
        },
        {
            name: 'Solana',
            symbol: 'SOL',
            price: '$90',
            change: '+3.1%',
            marketCap: '$30B',
            volume: '$3B',
            supply: '500M'
        }
    ];

    

    return (
        <>
            <div className="flex bg-gray-100 gap-5 px-5 relative">
                <div className='h-screen w-1/5 py-5 sticky top-0'>
                    <SideBarDesktop />
                </div>

                <div className="flex flex-col gap-5 p-6 w-full">
                    <Headbar
                        header="Crypto Market Overview"
                    />

                    <div className='flex gap-2.5 items-center'>
                        <NavLink to='/market/market-overview' end className={({ isActive }) => isActive ? 'bg-[#D470B7] rounded-lg py-2 px-4 text-white' : 'rounded-lg py-2 px-4'}>Market Overview</NavLink>
                        <NavLink to='/market/converter' end className={({ isActive }) => isActive ? 'bg-[#D470B7] rounded-lg py-2 px-4 text-white' : 'rounded-lg py-2 px-4'}>Converter</NavLink>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow flex flex-col gap-10">
                        <h2 className='text-2xl font-semibold'>Cryptocurrency Converter</h2>

                        <div className='w-full flex flex-col gap-5'>
                            <div className='flex flex-col gap-1'>
                                <label>From</label>
                                <select className="rounded-lg px-3 py-2.5 border border-[#D470B7] outline-none">
                                    <option>Bitcoin BTC</option>
                                    <option>Ethereum ETH</option>
                                    <option>USDT</option>
                                    <option>Solana Sol</option>
                                    <option>Ripple XRP</option>
                                    <option>USDC</option>
                                </select>
                            </div>

                            <input type="text" className="rounded-lg px-3 py-2.5 border border-[#D470B7] outline-none" placeholder="1" />
                        </div>
                        
                        <div className='w-full flex flex-col gap-5'>
                            <div className='flex flex-col gap-1'>
                                <label>To</label>
                                <select className="rounded-lg px-3 py-2.5 border border-[#D470B7] outline-none">
                                    <option>Ethereum ETH</option>
                                    <option>Bitcoin BTC</option>
                                    <option>USDT</option>
                                    <option>Solana Sol</option>
                                    <option>USDC</option>
                                    <option>Ripple XRP</option>
                                </select>
                            </div>

                            <input type="text" className="rounded-lg px-3 py-2.5 border border-[#D470B7] outline-none" placeholder="1" disabled />
                        </div>

                        <button className='bg-[#D470B7] w-full rounded-lg py-2 hover:bg-[#bd74a9] transition-colors duration-300 cursor-pointer'>Convert</button>
                        
                        <div className=' flex flex-col gap-3 items-center rounded-lg py-4 w-fit self-center px-20 shadow-md shadow-gray-400 bg-gradient-to-r from-50% from-[#D470B7] to-[#6E3A5F] font-semibold'>
                            <p className='text-white'>Current Exchange Rate</p>
                            <p className='text-white'>{"1BTC"} = {"109,339.70 USD" } </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Converter;