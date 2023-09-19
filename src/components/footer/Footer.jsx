import React, {useState} from 'react';
import {useTranslation} from "i18nano";
import cl from "./Footer.module.css"


const Footer = () => {
    const [value, setValue] = useState('')
    const text = useTranslation()

    return (
        <footer>
            <div className={cl.upperBlock}>
                <h1>{text('footer.h1')}</h1>

                <form>
                    <input placeholder={"your@email.com"}
                           value={value} onChange={e => setValue(e.target.value)}/>
                    <button onClick={e => e.preventDefault()}>{text('footer.button')}</button>
                </form>
            </div>
            <div className={cl.bottomBlock}>
                <div className={cl.links}>
                    <p>{text('footer.links.about')}</p>
                    <p>{text('footer.links.location')}</p>
                    <p>{text('footer.links.faq')}</p>
                    <p>{text('footer.links.news')}</p>
                    <p>{text('footer.links.careers')}</p>
                    <p>{text('footer.links.contact')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;