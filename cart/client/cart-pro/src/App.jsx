import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Admin from './components/Products/Admin';
import CreateProduct from './components/Products/CreateProduct';
import ProductList from './components/Products/ProductList';
import UpdateProduct from './components/Products/UpdateProduct';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/create' element={<CreateProduct/>} />
            <Route exact path='/products' element={<ProductList/>} />
            <Route exact path='/update' element={<UpdateProduct/>} />
            <Route exact path='/admin' element={<Admin/>} />
        </Routes>
    </Router>
  )
}

export default App