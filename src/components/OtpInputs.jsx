import React, { useRef } from 'react'

function OTPInputs({ length = 5, onOTPChange }){
    const inputsRef = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (/^[0-9]$/.test(value)) {
            e.target.value = value[0];

            
            if (index < length - 1) {
                inputsRef.current[index + 1].focus();
            }
        } else {
            
            e.target.value = '';
        }

        const otp = inputsRef.current.map((input) => input?.value || '').join('');
        onOTPChange(otp);
    };

    const handleKeyDown = (e, index) => {
        
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <>
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-1/5 h-15 rounded-md flex text-center border border-gray-400 text-lg outline-0"
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputsRef.current[index] = el)}
                />
            ))}
        </>
    );
}

export default OTPInputs