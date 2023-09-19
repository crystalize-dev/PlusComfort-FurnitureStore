import React from 'react';
import cl from "./ProudProducts.module.css"
import {store} from "../../../hardcode/Store";
import ProudCard from "../../../components/Cards/proudCard/ProudCard";
import {useTranslation} from "i18nano";


const ProudProducts = () => {
    const text = useTranslation()

    return (
        <div className={cl.wrapper}>
            <h1>{text('proud.header')}</h1>

            <div className={cl.content}>
                {store.filter(storeItem => storeItem.id <= 8).map(item =>
                        <ProudCard key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export default ProudProducts;