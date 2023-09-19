import React from 'react';
import cl from "./ProudCard.module.css"
import {Link} from "react-router-dom";
import {useTranslationChange} from "i18nano";


const ProudCard = ({item}) => {
    const lang = useTranslationChange().lang

    return (
        <Link to={`/products/${item.id}`} className={cl.card}>
            <img alt={item.description} src={item.img} draggable={false} />
            <p>{lang === "ru" ? item.descriptionRu : item.description}</p>
            <h4>{item.price}$</h4>
        </Link>
    );
};

export default ProudCard;