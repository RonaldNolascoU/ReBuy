import React, { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';
const ProductList = () =>  {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('http://localhost:5000/api/products');
            setProduct(data);
        }
        fetchData();
        return () => {
            //
        };
    }, []);

    const renderProducts = () => {
        return (products.map(product =>
            <Product key={product.id} product={product} />
        )
        )
    }

        return (<ul className="products">
            {renderProducts()}
        </ul>);
}

export default ProductList;