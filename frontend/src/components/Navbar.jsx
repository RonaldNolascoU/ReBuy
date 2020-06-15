import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    openMenu = () => {
        let el = document.querySelector(".sidebar").classList.add('open');
    }
    render() {
        return (
            <header className="header">
                <div className="brand">
                    <button onClick={this.openMenu}>
                        &#9776;
    </button>
                    <Link to="/">ReBuy</Link>
                </div>
                <div className="header-links">
                    <Link to="/cart">Cart</Link>
                    <Link to="/login">Sign In</Link>
                </div>
            </header>
        );
    }
}

export default Navbar;