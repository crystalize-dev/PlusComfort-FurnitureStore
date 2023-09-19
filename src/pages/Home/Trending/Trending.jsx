import React from 'react';
import cl from "./Trending.module.css"
import {store} from "../../../hardcode/Store";
import ProudCard from "../../../components/Cards/proudCard/ProudCard";
import {useTranslation} from "i18nano";


const Trending = () => {
    const text = useTranslation()

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    };

    return (
        <div>
            <div className={cl.header}>
                <h3>{text('trending.header')}</h3>

                <div className={cl.btns}>
                    <button onClick={slideLeft}><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={slideRight}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

            <div className={cl.container} id={"slider"}>
                {
                    store.filter(storeItem => storeItem.id >= 8).map(item =>
                        <ProudCard key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default Trending;