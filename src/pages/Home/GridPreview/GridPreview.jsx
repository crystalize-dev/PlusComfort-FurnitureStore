import React from 'react';
import cl from "./GridPreview.module.css"
import {Link} from "react-router-dom";
import furniture from "../../../img/header/home-img-1.jpg";
import skincare from "../../../img/header/home-img-2.jpg";
import kitchen from "../../../img/header/home-img-3.jpg";
import electronics from "../../../img/header/home-img-4.jpg";
import {useTranslation} from "i18nano";



const GridPreview = () => {
    const text = useTranslation()

    return (
        <div className={cl.gridContainer}>
            <Link to={"categories?filter=furniture"} className={cl.one}>
                <img alt={"furniture"} src={furniture} draggable={false}/>
                <p>{text('grid.card1')}</p>
            </Link>

            <Link to={"categories?filter=skincare"} className={cl.two}>
                <img alt={"skincare"} src={skincare} draggable={false}/>
                <p>{text('grid.card2')}</p>
            </Link>

            <Link to={"categories?filter=kitchen"} className={cl.four}>
                <img alt={"kitchen"} src={kitchen} draggable={false}/>
                <p>{text('grid.card3')}</p>
            </Link>

            <Link to={"categories?filter=electronics"} className={cl.fourLow}>
                <img alt={"electronics"} src={electronics} draggable={false}/>
                <p>{text('grid.card4')}</p>
            </Link>
        </div>
    );
};

export default GridPreview;