import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './pages/checkout/Checkout';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Support from './pages/support/support'
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/support" element={<Support/>}/>
                <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
