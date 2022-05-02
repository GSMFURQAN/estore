import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Products from './components/Products';
import Addcart from './components/Cart';
function App() {
  return (
    <div className="App">
      
      
      <Router>
      <Navbar/>
      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/products/:id" element={<Product/>}/>
          <Route exact path="/cart" element={<Addcart/>}/>
        </Routes>
      </Router>
     {/* <Cart/> */}
    </div>
  );
}

export default App;
