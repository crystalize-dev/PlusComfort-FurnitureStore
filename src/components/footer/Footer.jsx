import React, {useContext, useState} from 'react';
import cl from "./Footer.module.css"
import {LangContext} from "../../context/LangContext";


const Footer = () => {
    const [value, setValue] = useState('')
    const {lang} = useContext(LangContext)

    return (
        <footer>
            <div className={cl.upperBlock}>
                <h1>{lang === 'ru' ? "Новости" : "Newsletter"}</h1>

                <form>
                    <input placeholder={"your@email.com"}
                           value={value} onChange={e => setValue(e.target.value)}/>
                    <button onClick={e => e.preventDefault()}>{lang === 'ru' ? "Подписаться" : "Subscribe"}</button>
                </form>
            </div>
            <div className={cl.bottomBlock}>
                <div className={cl.links}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>{lang === 'ru' ? "О нас" : "About"}</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>{lang === 'ru' ? "Карта складов" : "Store locator"}</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>{lang === 'ru' ? "Вопросы" : "FAQs"}</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>{lang === 'ru' ? "Новости" : "News"}</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>{lang === 'ru' ? "Карьера" : "Careers"}</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>{lang === 'ru' ? "Контакты" : "Contact Us"}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;