
import SideBar from '../../components/Sidebar.jsx'
import Headbar from '../../components/Headbar.jsx'
import AccountCard from '../../components/FinanceCard.jsx'

// import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';

import { useState, useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import { FaHistory, FaWallet, FaArrowAltCircleDown, FaArrowAltCircleUp, FaArrowUp } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function Overview() {

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

    return(
      <>
      <div className="flex bg-gray-100 gap-5 px-5 relative">
            <div className='h-screen w-1/5 py-5 sticky top-0'>
                <SideBar />
            </div>
            <div className=" flex flex-col gap-10 w-full py-5">
                <Headbar header="Dashboard" subHeader="See an overview of your dashboard"/>
                <div className="flex w-full justify-between gap-5">
                        <AccountCard title="balance" icon={FaWallet} amount={balance} />
                        <AccountCard title="Total deposit" icon={FaArrowAltCircleDown} amount={deposit} />
                    <AccountCard title="Total Withdrawal" icon={FaArrowAltCircleUp} amount={withdrawal}/>
                </div>
                <div className='flex gap-5'>

                    <div className='bg-white text-[#000000B2] shadow-md shadow-gray-200 h-fit w-3/5 p-5 rounded-3xl flex flex-col gap-5'>

                        <div className='flex justify-between w-full h-fit'>
                                <h3 className='text-2xl font-semibold'>Finance</h3>
                                <select className="rounded-full px-3 py-1 bg-[#D470B7] text-white custom-select">
                                    <option>Today</option>
                                    <option>This Week</option>
                                    <option>This Month</option>
                                    <option>Year Year</option>
                                </select>
                        </div>
                        
                        <div className='flex gap-5'>
                            <div className='flex gap-2 items-center'>
                                <div className='h-2.5 w-2.5 bg-[#D470B7] rounded-full'></div>
                                <h4 className='font-semibold text-lg'>Income</h4>
                            </div>
                            <div className='flex gap-2 items-center'>
                                    <div className='h-2.5 w-2.5 bg-[#2F4F7F] rounded-full'></div>
                                <h4 className='font-semibold text-lg'>Expenses</h4>
                            </div>
                        </div>

                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barGap={5} barSize={20}>
                                <XAxis dataKey="month" />
                                <YAxis tickFormatter={(value) => `$${value}`} />
                                <Tooltip formatter={(value) => `$${value}`} />
                                
                                <Bar dataKey="income" fill="#D470B7" radius={[20, 20, 0, 0]} />
                                <Bar dataKey="expense" fill="#2F4F7F" radius={[20, 20, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>

                    </div>

                        <div className="flex flex-col justify-between max-w-sm p-4 bg-white rounded-2xl shadow-md shadow-gray-200 space-y-4">
                    
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
export default Overview