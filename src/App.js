import React from 'react';
import './styles/App.css'
import { Routes, Route} from "react-router-dom"
import Home from './components/home';
import Cart from './components/cart';
import Checkout from './components/Checkout';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">
      
        <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/cart" element={<Cart />} />
            <Route path = "/checkout" element={<Checkout />} />
            <Route path ="/payment" element = {<Payment />} />
          
        </Routes>
  
      
      
        
    </div>
  );
}

export default App;