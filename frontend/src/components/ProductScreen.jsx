import React  from 'react';
import Navbar from './Navbar';
import Aside from './Aside';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import LoginScreen from './Auth/LoginScreen';
import Cart from './Auth/Cart';

import { BrowserRouter, Route } from 'react-router-dom';

const ProductScreen = () => {
    return (
        <BrowserRouter>
        <div className="grid-container">
            <Navbar/>
            <Aside/>
            <main className="main">
                <div className="content">
                    <Route path="/product/:id" exact={true} component={ProductDetail}/>
                    <Route path="/" exact={true} component={ProductList}/>
                    <Route path="/cart" exact={true} component={Cart}/>
                    <Route path="/login" exact={true} component={LoginScreen}/>
                </div>

            </main>
            <footer className="footer">
                All rights reserved.
        </footer>
        </div>
        </BrowserRouter>
    );
}

export default ProductScreen;