import React, { useEffect, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import axios from 'axios';
const ProductDetail = (props) => {
    console.log(props.match.params.id);
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('http://localhost:5000/api/product/' + props.match.params.id);
            setProduct(data);
             console.log(data, 'data')
        }
        fetchData();
        return () => {
            //
        };
    }, []);
        return ( 
        
        <React.Fragment>
        <Breadcrumb product={products.name}/>
            
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img  src={products.image} alt=""/>
                    </div>
                    <div className="col-4">
                        <h2>{products.name}</h2>
                        <h3 className="badge badge-primary">${products.price}</h3>
                    </div>
                    <div className="col-4">
                        
                    </div>
                </div>
            </div>
            
            </React.Fragment>
            
            );
}
 
export default ProductDetail;