import React from 'react';
import cl from "./ProudCard.module.css"
import {Link} from "react-router-dom";


const ProudCard = ({item}) => {
    return (
        <Link to={`/products/${item.id}`} className={cl.card}>
            <img alt={item.description} src={item.img} draggable={false} />
            <p>{item.description}</p>
            <h4>{item.price}$</h4>
        </Link>
    );
};

export default ProudCard;