import React from 'react';
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function AccountCard({ title, fetchAmount,icon }) {
    const [dateTime, setDateTime] = useState("");
    const [amount, setAmount] = useState("0.00");

    useEffect(() => {
        // Live date-time
        const updateTime = () => {
            const now = new Date();
            const options = { hour: '2-digit', minute: '2-digit', hour12: true };
            const time = now.toLocaleTimeString([], options);
            const date = now.toLocaleDateString([], { day: '2-digit', month: 'short' });
            setDateTime(`${time}, ${date}`);
        };

        updateTime();
        const timeInterval = setInterval(updateTime, 6000);

        // Amount fetcher
        const getAmount = async () => {
            try {
                const response = await fetchAmount(); // fetchAmount is a function prop
                setAmount(response);
            } catch (error) {
                console.error("Failed to fetch amount:", error);
            }
        };

        getAmount();
        const amountInterval = setInterval(getAmount, 10000); // refresh amount every 10 seconds

        return () => {
            clearInterval(timeInterval);
            clearInterval(amountInterval);
        };
    }, [fetchAmount]);

    return (
        <div className="w-full h-fit rounded-2xl shadow-lg p-4 bg-white flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center">
                    {icon && React.createElement(icon)}
                </div>
                <p className="text-sm text-black">{dateTime}</p>
            </div>

            <div className="mt-4">
                <p className="text-gray-700 text-sm">{title}</p>
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold text-gray-600">${amount}</p>
                    <p className="text-3xl font-bold tracking-widest text-gray-400">···</p>
                </div>
            </div>
        </div>
    );
}
AccountCard.proptypes={
    title: PropTypes.string,
    fetchAmount: PropTypes.func
};



export default AccountCard;
