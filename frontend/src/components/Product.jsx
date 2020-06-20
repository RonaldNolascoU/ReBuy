import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const Product = (props) => {
    return (
        <Grid padded='vertically'>
                <Grid.Column width={15}>
                    <Card>
                        <Image src={props.product.image} wrapped ui={false} className="img" />
                        <Card.Content>
                            <Link to={'/product/' + props.product.id}>
                                <Card.Header>{props.product.name}</Card.Header>
                            </Link>
                            <Card.Meta>
                                <span className='date'>{props.product.brand}</span>
                            </Card.Meta>
                            <Card.Description>
                                {props.product.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='dollar sign' />
                                {props.product.price}
                            </a>
                        </Card.Content>
                    </Card>

                </Grid.Column>
        </Grid>
    );
}

export default Product;