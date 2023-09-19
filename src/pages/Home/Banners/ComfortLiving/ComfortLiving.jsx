import React from 'react';
import cl from "../Banner.module.css"
import {Link} from "react-router-dom";
import banner from "../../../../img/banner/banner2.jpg";
import {useTranslation} from "i18nano";


const ComfortLiving = () => {
    const text = useTranslation()

    return (
        <div className={cl.wrapper}>
            <div className={cl.imgArea}>
                <img alt={"banner"} src={banner} draggable={false}/>
            </div>
            <div className={cl.textArea}>
                <h2>{text('banner.header2')}</h2>
                <p><span>PlusComfort</span>{text('banner.title')}</p>
                <Link to={"categories?filter=all"}>{text('banner.button')}</Link>
            </div>
        </div>
    );
};

export default ComfortLiving;