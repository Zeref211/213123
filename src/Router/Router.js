import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../Component/Home';
import Product from '../Component/Product';
import Ql from '../Component/Ql';
import Login from '../Component/Login';
import Resigter from '../Component/Resigter';
import ProductDetail from '../Component/ProductDetail';

function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Product" element={<Product/>}/>
                <Route path="/Ql" element={<Ql/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/Resigter" element={<Resigter/>}/>
                <Route path="/ProductDetail" element={<ProductDetail/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router