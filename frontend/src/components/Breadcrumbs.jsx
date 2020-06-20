import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react'

const Breadcrumbs = (props) => {
    return (
        <Breadcrumb size={'huge'}>
            <Link to='/'>
                <Breadcrumb.Section>Products</Breadcrumb.Section>
            </Link>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section active>{props.product}</Breadcrumb.Section>
        </Breadcrumb>
    );
}

export default Breadcrumbs;