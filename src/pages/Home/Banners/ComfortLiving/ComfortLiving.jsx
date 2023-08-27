import React from 'react';
import cl from "../Banner.module.css"
import {Link} from "react-router-dom";
import banner from "../../../../img/banner/banner2.jpg";


const ComfortLiving = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.imgArea}>
                <img alt={"banner"} src={banner} draggable={false}/>
            </div>
            <div className={cl.textArea}>
                <h2>Creative harmonious living</h2>
                <p><span>PlusComfort</span> Products are all made to standard sizes so that you can mix and match them freely</p>
                <Link to={"categories?filter=all"}>SHOP NOW</Link>
            </div>
        </div>
    );
};

export default ComfortLiving;