import React from 'react';

const Checkout = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#7b2cbf" }}>Thank you for shopping with NepaliDrip!</h1>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Your traditional outfit is on its way to you ✨
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

export default Checkout;
