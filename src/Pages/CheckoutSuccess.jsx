import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

const CheckoutSuccess = () => {
  const [width, height] = useWindowSize();

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <Confetti width={width} height={height} />
      <h1 style={{ color: "#7b2cbf", fontSize: "2.5rem" }}>Thank you for your order!</h1>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Your traditional Nepali outfit is on its way to you ✨
      </p>
      <a 
        href="/" 
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#7b2cbf",
          color: "white",
          border: "none",
          borderRadius: "8px",
          display: "inline-block",
          textDecoration: "none"
        }}
      >
        Continue Shopping
      </a>
    </div>
  );
};

export default CheckoutSuccess;
