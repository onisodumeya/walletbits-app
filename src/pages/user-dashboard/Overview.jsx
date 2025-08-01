
import { SideBarDesktop, SideBarMobile } from '../../components/Sidebar.jsx'
import Headbar from '../../components/Headbar.jsx'
import AccountCard from '../../components/FinanceCard.jsx'
import FinanceChart from '../../components/PriceChart.jsx'
import TokenValidation from '../../utils/auth.jsx'
import Modal from '../../components/Modals.jsx'
import { jwtDecode } from 'jwt-decode'

import { useState, useEffect } from 'react'
import { FaWallet, FaArrowAltCircleDown, FaArrowAltCircleUp, FaArrowUp } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';

const Overview = () => {

    const [balance, setBalance] = useState("0.00");
    const [deposit, setDeposit] = useState("0.00");
    const [withdrawal, setWithdrawal] = useState("0.00");

    // const getBalance = async () => {
    //     try {
    //         const response = await axios.get('');
    //         setBalance(response);
    //     } catch (error) {
    //         console.error("Failed to fetch amount:", error);
    //     }
    // };

    const data = [
        { month: 'Jan', income: 45, expense: 30 },
        { month: 'Feb', income: 35, expense: 25 },
        { month: 'Mar', income: 45, expense: 20 },
        { month: 'Apr', income: 30, expense: 22 },
        { month: 'May', income: 45, expense: 28 },
        { month: 'Jun', income: 55, expense: 25 },
        { month: 'Jul', income: 45, expense: 30 },
    ];


    const [mode, setMode] = useState('buy');
    const [fromToken, setFromToken] = useState('ETH');
    const [toToken, setToToken] = useState('USDT');
    const [fromAmount, setFromAmount] = useState('124.76');
    const [toAmount, setToAmount] = useState('4');

    const rate = 0.0004;

    const tokens = [
        { symbol: 'ETH', icon: '💠' },
        { symbol: 'USDT', icon: '💵' },
        { symbol: 'BTC', icon: '🪙' },
    ];


    const marketData = [
        {
            name: "Bitcoin",
            symbol: "BTC",
            icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
            price: 130356,
            change24h: 8.5,
            marketCap: 560356000000,
            volume24h: 346346000000,
            volumeChange: 2.258,
            supply: 2146346000,
            chartTrend: [0, 1, 2, 3, 3, 4, 5],
        },
        {
            name: "Ethereum",
            symbol: "ETH",
            icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
            price: 58345,
            change24h: -2.5,
            marketCap: 250356000000,
            volume24h: 346346000000,
            volumeChange: -1.159,
            supply: 1145346000,
            chartTrend: [5, 5, 4, 3, 2, 2, 1],
        },
    ];

    const mobileScreen = 768;


    const token = localStorage.getItem("accessToken");

    if (!token) {
        console.log("Token is missing or expired. User NOT logged in.");
        return (
            <Modal
                openModal={true}
                priBtnText="Sign in"
                priBtnLink="/sign-in"
                heading="Unauthorized entry"
                headingColor="text-red-500"
                borderColor="border-red-500"
                paragragh="You are not signed in, please sign in to continue"

            />
        );
    } else {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        
        if (decoded.exp < currentTime) {
            console.log("Session expired");
            
            <Modal
                openModal={true}
                priBtnText="Sign in"
                priBtnLink="/sign-in"
                heading="Session Expired"
                headingColor="text-red-500"
                borderColor="border-red-500"
                paragragh="Your session has expired, please sign in."

            />
            
            localStorage.removeItem("accessToken")
        } else {
            return (
                <>
                    <SideBarMobile />
                    <div className="flex bg-gray-100 gap-0 lg:gap-5 px-5 relative">
                        <div className='h-screen w-0 lg:w-1/5 lg py-5 sticky top-0'>
                            <SideBarDesktop />
                        </div>
                        <div className=" flex flex-col gap-10 w-full py-5 mb-25 lg:mb-0">
                            <Headbar header="Dashboard" subHeader="See an overview of your dashboard" />
                            <div className="flex flex-col md:flex-row w-full justify-between gap-5">
                                <AccountCard title="balance" icon={FaWallet} amount={balance} />
                                <AccountCard title="Total deposit" icon={FaArrowAltCircleDown} amount={deposit} />
                                <AccountCard title="Total Withdrawal" icon={FaArrowAltCircleUp} amount={withdrawal} />
                            </div>
                            <div className='flex flex-col lg:flex-row gap-5'>

                                <div className='w-full lg:w-3/5'>
                                    <FinanceChart
                                        title='Finanace'
                                        gap={5}
                                        size={window.innerWidth <= mobileScreen ? 14 : 20}
                                        data={data}

                                    />
                                </div>

                                <div className="flex flex-col justify-between w-full lg:w-2/5 p-4 bg-white rounded-2xl shadow-md shadow-gray-200 space-y-4">

                                    {/* Toggle Buy/Exchange */}
                                    <div className="flex justify-between">
                                        <button
                                            onClick={() => setMode('buy')}
                                            className={`px-4 py-1 rounded-md font-semibold ${mode === 'buy' ? 'bg-[#D470B7] text-white' : 'text-[#D470B7]'
                                                }`}
                                        >
                                            Buy
                                        </button>
                                        <button
                                            onClick={() => setMode('exchange')}
                                            className={`px-4 py-1 rounded-md font-semibold ${mode === 'exchange' ? 'bg-[#D470B7] text-white' : 'text-[#D470B7]'
                                                }`}
                                        >
                                            Exchange
                                        </button>
                                    </div>

                                    {/* From Token */}
                                    <div className="border border-[#D470B7] rounded-lg p-2 space-y-1">
                                        <label className="text-gray-700 text-sm">You Pay</label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                value={fromAmount}
                                                onChange={(e) => setFromAmount(e.target.value)}
                                                className="bg-transparent outline-none text-lg font-semibold w-full"
                                            />
                                            <select
                                                value={fromToken}
                                                onChange={(e) => setFromToken(e.target.value)}
                                                className="ml-2 border p-2 rounded-lg outline-none appearance-none bg-transparent font-semibold text-[#D470B7]"
                                            >
                                                {tokens.map((token) => (
                                                    <option key={token.symbol} value={token.symbol}>
                                                        {token.icon} {token.symbol}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* To Token */}
                                    <div className="border border-[#D470B7] rounded-lg p-2 space-y-1">
                                        <label className="text-gray-700 text-sm">You Recieve</label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                value={toAmount}
                                                onChange={(e) => setToAmount(e.target.value)}
                                                className="bg-transparent outline-none text-lg font-semibold w-full"
                                            />
                                            <select
                                                value={toToken}
                                                onChange={(e) => setToToken(e.target.value)}
                                                className="ml-2 border p-2 rounded-lg outline-none appearance-none bg-transparent font-semibold text-[#D470B7]"
                                            >
                                                {tokens.map((token) => (
                                                    <option key={token.symbol} value={token.symbol}>
                                                        {token.icon} {token.symbol}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Exchange Rate */}
                                    <p className="text-center border border-[#D470B7] rounded-md py-1 text-sm text-gray-700">
                                        1 {toToken} = {rate} {fromToken}
                                    </p>

                                    {/* Connect Wallet */}
                                    <button className="w-full py-2 bg-[#D470B7] text-white font-semibold rounded-xl">
                                        Connect Wallet
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-4 overflow-x-auto">
                                <h2 className="text-2xl font-bold mb-4">Market History</h2>

                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-[#E9B8DB] text-[#000000B2] rounded-lg">
                                            <th className="p-2 text-sm">Asset</th>
                                            <th className="p-2 text-sm">Price (USD)</th>
                                            <th className="p-2 text-sm">24H Change</th>
                                            <th className="p-2 text-sm">Market Cap (USD)</th>
                                            <th className="p-2 text-sm">Volume 24H</th>
                                            <th className="p-2 text-sm">Circulating Supply</th>
                                            <th className="p-2 text-sm">Chart Trend</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {marketData.map((coin, index) => (
                                            <tr key={index} className="border-b hover:bg-gray-50">
                                                {/* Asset */}
                                                <td className="p-3 flex items-center gap-2">
                                                    <img src={coin.icon} alt={coin.symbol} className="w-6 h-6" />
                                                    <div>
                                                        <div className="font-semibold text-xs">{coin.name}</div>
                                                        <div className="text-xs text-gray-500">{coin.symbol}</div>
                                                    </div>
                                                </td>

                                                {/* Price */}
                                                <td className="p-3">
                                                    <div className='text-xs'>
                                                        ${coin.price.toLocaleString()}
                                                    </div>
                                                </td>

                                                {/* 24H Change */}
                                                <td className="p-3">
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${coin.change24h > 0
                                                            ? "bg-green-100 text-green-600"
                                                            : "bg-red-100 text-red-600"
                                                            }`}
                                                    >
                                                        {coin.change24h > 0 ? "+" : ""}
                                                        {coin.change24h}%
                                                    </span>
                                                </td>

                                                {/* Market Cap */}
                                                <td className="p-3 ">
                                                    <div className='text-xs'>
                                                        ${coin.marketCap.toLocaleString(undefined, {
                                                            maximumFractionDigits: 2,
                                                        })}
                                                    </div>
                                                </td>

                                                {/* Volume + % */}
                                                <td className="p-3">
                                                    <div className='text-xs inline-block'>${coin.volume24h.toLocaleString()}</div>
                                                    <div
                                                        className={`text-xs inline-block ml-2 ${coin.volumeChange > 0 ? "text-green-500" : "text-red-500"
                                                            }`}
                                                    >
                                                        {coin.volumeChange > 0 ? "+" : ""}
                                                        {coin.volumeChange}%
                                                    </div>
                                                </td>

                                                {/* Supply */}
                                                <td className="p-3">
                                                    <div className='text-xs'>
                                                        ${coin.supply.toLocaleString()}{" "}
                                                        <span className="text-blue-600 underline text-xs">
                                                            {coin.symbol}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* Chart */}
                                                <td className="p-3">
                                                    <ResponsiveContainer width={100} height={30}>
                                                        <LineChart data={coin.chartTrend.map((val, i) => ({ x: i, y: val }))}>
                                                            <Line
                                                                type="monotone"
                                                                dataKey="y"
                                                                stroke={coin.change24h >= 0 ? "#16a34a" : "#dc2626"}
                                                                strokeWidth={1}
                                                                dot={false}
                                                            />
                                                        </LineChart>
                                                    </ResponsiveContainer>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )

        }
    }

}
export default Overview