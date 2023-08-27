import React from 'react';
import cl from "./ProudProducts.module.css"
import {store} from "../../../hardcode/Store";
import ProudCard from "../../../components/Cards/proudCard/ProudCard";


const ProudProducts = () => {
    return (
        <div className={cl.wrapper}>
            <h1>Products we are proud of</h1>

            <div className={cl.content}>
                {store.filter(storeItem => storeItem.id <= 8).map(item =>
                        <ProudCard key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export default ProudProducts;