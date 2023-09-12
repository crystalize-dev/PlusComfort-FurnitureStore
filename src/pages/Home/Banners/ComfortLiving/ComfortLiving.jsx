import React, {useContext} from 'react';
import cl from "../Banner.module.css"
import {Link} from "react-router-dom";
import banner from "../../../../img/banner/banner2.jpg";
import {LangContext} from "../../../../context/LangContext";


const ComfortLiving = () => {
    const {lang} = useContext(LangContext)

    return (
        <div className={cl.wrapper}>
            <div className={cl.imgArea}>
                <img alt={"banner"} src={banner} draggable={false}/>
            </div>
            <div className={cl.textArea}>
                <h2>{lang === 'ru' ? "Творческая гармоничная жизнь" : "Creative harmonious living"}</h2>
                <p><span>PlusComfort</span>{lang === 'ru' ? " Все продукты изготавливаются по стандартным размерам, поэтому вы можете свободно комбинировать их" : " Products are all made to standard sizes so that you can mix and match them freely"}</p>
                <Link to={"categories?filter=all"}>{lang === 'ru' ? "НАЧАТЬ ПОКУПКИ" : "SHOP NOW"}</Link>
            </div>
        </div>
    );
};

export default ComfortLiving;