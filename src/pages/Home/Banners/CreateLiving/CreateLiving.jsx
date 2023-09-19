import React from 'react';
import cl from "../Banner.module.css"
import banner from "../../../../img/banner/banner1.jpg"
import {Link} from "react-router-dom";
import {useTranslation} from "i18nano";


const CreateLiving = () => {
    const text = useTranslation()

    return (
        <div className={cl.wrapper}>
            <div className={cl.textArea}>
                <h2>{text('banner.header1')}</h2>
                <p><span>PlusComfort</span>{text('banner.title')}</p>
                <Link to={"categories?filter=all"}>{text('banner.button')}</Link>
            </div>
            <div className={cl.imgArea}>
                <img alt={"banner"} src={banner} draggable={false}/>
            </div>
        </div>
    );
};

export default CreateLiving;