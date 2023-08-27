import React from 'react';
import cl from "./Product.module.css"
import {useParams} from "react-router-dom";


const Product = () => {
    const productId = useParams().id

    return (
        <div>
            {productId}
        </div>
    );
};

export default Product;