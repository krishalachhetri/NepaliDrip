import React, {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase"; // Make sure the path is correct
import {useNavigate} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext"; 


const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const [menu,setMenu] = useState("shop")
  const { cartItems } = useContext(CartContext);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  
    return () => unsubscribe(); // cleanup listener
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} style={{ width: '180px' }} alt="" />
        <p>NEPALIDRIP</p>
      </div>
  
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => setMenu("mens")}><Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>{menu === "mens" ? <hr /> : null}</li>
        <li onClick={() => setMenu("womens")}><Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>{menu === "womens" ? <hr /> : null}</li>
        <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : null}</li>
      </ul>
  
      <div className="nav-login-cart">
        {currentUser ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login"><button>Login</button></Link>
        )}
        <Link to="/cart"><img src={cart_icon} style={{ width: '100px' }} alt="" /></Link>
        <div className="nav-cart-count">{cartItems.length}</div>
      </div>
    </div>
  );
}

export default Navbar