import React, { useRef, useState, useEffect } from 'react';

function OTPInputs({ length = 6, onOTPChange }) {
    const [otpValues, setOtpValues] = useState(Array(length).fill(''));
    const inputsRef = useRef([]);

    useEffect(() => {
        onOTPChange(otpValues.join(''));
    }, [otpValues]);

    const handleChange = (e, index) => {
        const val = e.target.value;

        if (!/^[0-9]?$/.test(val)) return;

        const newOtp = [...otpValues];
        newOtp[index] = val;

        setOtpValues(newOtp);
        onOTPChange(newOtp.join(''));

        // Move focus
        if (val && index < length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            const newOtp = [...otpValues];
            if (newOtp[index]) {
                newOtp[index] = '';
                setOtpValues(newOtp);
                onOTPChange(newOtp.join(''));
            } else if (index > 0) {
                inputsRef.current[index - 1].focus();
                newOtp[index - 1] = '';
                setOtpValues(newOtp);
                onOTPChange(newOtp.join(''));
            }
        }
    };

    return (
        <div className="flex gap-2.5 w-full">
            {otpValues.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    ref={(el) => (inputsRef.current[index] = el)}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-1/5 h-15 rounded-md text-center border border-gray-400 text-lg outline-0"
                />
            ))}
        </div>
    );
}

export default OTPInputs;
