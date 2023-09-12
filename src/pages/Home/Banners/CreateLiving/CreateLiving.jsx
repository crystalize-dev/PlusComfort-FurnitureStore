import React, {useContext} from 'react';
import cl from "../Banner.module.css"
import banner from "../../../../img/banner/banner1.jpg"
import {Link} from "react-router-dom";
import {LangContext} from "../../../../context/LangContext";


const CreateLiving = () => {
    const {lang} = useContext(LangContext)

    return (
        <div className={cl.wrapper}>
            <div className={cl.textArea}>
                    <h2>{lang === 'ru' ? "Комфортная и элегантная жизнь" : "Comfortable & Elegante Living"}</h2>
                    <p><span>PlusComfort</span>{lang === 'ru' ? " Все продукты изготавливаются по стандартным размерам, поэтому вы можете свободно комбинировать их" : " Products are all made to standard sizes so that you can mix and match them freely"}</p>
                    <Link to={"categories?filter=all"}>{lang === 'ru' ? "НАЧАТЬ ПОКУПКИ" : "SHOP NOW"}</Link>
            </div>
            <div className={cl.imgArea}>
                <img alt={"banner"} src={banner} draggable={false}/>
            </div>
        </div>
    );
};

export default CreateLiving;