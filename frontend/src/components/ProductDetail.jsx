import React, { useEffect, useState } from 'react';
import { Grid, Card, Image, Button } from 'semantic-ui-react';
import Breadcrumbs from './Breadcrumbs';
import axios from 'axios';
const ProductDetail = (props) => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:5000/api/product/' + props.match.params.id);
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
            <Breadcrumbs product={products.name} />
                    <Card.Group centered className="card-group">
                        <Card>
                            <Image src={products.image} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header className="product-name">{products.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{products.brand}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {products.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button animated='fade'>
                                    <Button.Content visible>Buy</Button.Content>
                                    <Button.Content hidden>${products.price}</Button.Content>
                                </Button>
                            </Card.Content>
                        </Card>
                    </Card.Group>
        </React.Fragment>

    );
}

export default ProductDetail;