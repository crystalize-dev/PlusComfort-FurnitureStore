import React from 'react';
import cl from "../Banner.module.css"
import banner from "../../../../img/banner/banner1.jpg"
import {Link} from "react-router-dom";


const CreateLiving = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.textArea}>
                    <h2>Comfortable & Elegante Living</h2>
                    <p><span>PlusComfort</span> Products are all made to standard sizes so that you can mix and match them freely</p>
                    <Link to={"categories?filter=all"}>SHOP NOW</Link>
            </div>
            <div className={cl.imgArea}>
                <img alt={"banner"} src={banner} draggable={false}/>
            </div>
        </div>
    );
};

export default CreateLiving;