import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { auth } from "../../firebase"; // get the auth
import { useNavigate } from "react-router-dom"; // to navigate
import "./Item.css";

const Item = (props) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // initialize navigate

  const handleAddToCart = () => {
    if (auth.currentUser) {
      addToCart(props);
    } else {
      alert("Please login to add items to your cart!");
      navigate("/login");
    }
  };

  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Item;

