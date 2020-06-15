import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    return (  
        <li>
        <div className="product">
            <img className="product-image" src={props.product.image} alt="product" />
            <div className="product-name">
                <Link to={'/product/' + props.product.id} >{props.product.name}</Link>
            </div>
            <div className="product-brand">{props.product.brand}</div>
            <div className="product-price">${props.product.price}</div>
            <div className="product-rating">{props.product.rating}</div>
        </div>
    </li> 
    );
}
 
export default Product;