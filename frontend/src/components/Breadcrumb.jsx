import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    return (<nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item" aria-current="page">{props.product}</li>
        </ol>
    </nav>);
}

export default Breadcrumb;