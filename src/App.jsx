import React, { useState, useRef } from 'react';

const App = ({ otpBoxCount = 6 }) => {
  const [otp, setOtp] = useState(Array(otpBoxCount).fill(''));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otpBoxCount - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '') {
        if (index > 0) {
          inputsRef.current[index - 1].focus();
        }
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#96a4e4', height: '50vw' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h3>OTP INPUT BOXES</h3>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginTop: '50px',
        }}
      >
        {otp.map((digit, index) => (
          <input
            key={index}
            inputMode="[0-9]"
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputsRef.current[index] = el)}
            style={{
              width: '25px',
              height: '30px',
              fontSize: '24px',
              textAlign: 'center',
              borderRadius: '5px',
              border:"1px solid red"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
