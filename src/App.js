import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
// import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Kids from "./Pages/Kids";
import Women from "./Pages/Women";
import Men from './Pages/Men';
import Signup from './Pages/Signup';
import ProtectedRoute from "./Pages/ProtectedRoute";
import { CartProvider } from "./Context/CartContext";
import CheckoutSuccess from "./Pages/CheckoutSuccess";

function App() {
  return (
    <CartProvider> 
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={
          <ProtectedRoute>
         <Cart />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/kids" element={<Kids />}/>
        <Route path="/womens" element={<Women />} />
        <Route path="/mens" element={<Men />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
      </Routes>
      </BrowserRouter>
    </CartProvider> 
  );
}

export default App;

