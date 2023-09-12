import React, {useContext} from 'react';
import cl from "./ProudCard.module.css"
import {Link} from "react-router-dom";
import {LangContext} from "../../../context/LangContext";


const ProudCard = ({item}) => {
    const {lang} = useContext(LangContext)

    return (
        <Link to={`/products/${item.id}`} className={cl.card}>
            <img alt={item.description} src={item.img} draggable={false} />
            <p>{lang === "ru" ? item.descriptionRu : item.description}</p>
            <h4>{item.price}$</h4>
        </Link>
    );
};

export default ProudCard;