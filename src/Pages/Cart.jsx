import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom"; 


const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  const handleCheckout = () => {
    
    navigate("/checkout-success"); 
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.new_price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <img src={item.image} alt={item.name} style={{ width: "100px" }} />
              <h3>{item.name}</h3>
              <p>Price: ${item.new_price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <div style={{ marginTop: "20px", fontWeight: "bold", fontSize: "20px" }}>
            Total: ${totalPrice}
            <button 
              onClick={handleCheckout}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#7b2cbf",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px"
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
