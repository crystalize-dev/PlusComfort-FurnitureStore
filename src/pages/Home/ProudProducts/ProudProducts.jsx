import React, {useContext} from 'react';
import cl from "./ProudProducts.module.css"
import {store} from "../../../hardcode/Store";
import ProudCard from "../../../components/Cards/proudCard/ProudCard";
import {LangContext} from "../../../context/LangContext";


const ProudProducts = () => {
    const {lang} = useContext(LangContext)

    return (
        <div className={cl.wrapper}>
            <h1>{lang === 'ru' ? "Наша гордость" : "Products we are proud of"}</h1>

            <div className={cl.content}>
                {store.filter(storeItem => storeItem.id <= 8).map(item =>
                        <ProudCard key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export default ProudProducts;