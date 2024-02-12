import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Product from './Products';
import Navbar from './Navbar';
import Cart from './Cart';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
