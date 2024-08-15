import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import Cart from "./pages/Cart";
import Order from "./components/Order";
import Product from "./pages/Product";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";

export default function App() {

  const [showLogin, setShowLogin] = useState(false);
  return (
    <BrowserRouter>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <Header setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}/>
          </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={ <Order/>} />
        <Route path="/verify" element={ <Verify/>} />
        <Route path="/myorders" element={ <MyOrders/>} />
      </Routes>
    </BrowserRouter>
  );
}
