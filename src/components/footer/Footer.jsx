import React, {useState} from 'react';
import cl from "./Footer.module.css"


const Footer = () => {
    const [value, setValue] = useState('')

    return (
        <footer>
            <div className={cl.upperBlock}>
                <h1>Newsletter</h1>

                <form>
                    <input placeholder={"your@email.com"}
                           value={value} onChange={e => setValue(e.target.value)}/>
                    <button onClick={e => e.preventDefault()}>Subscribe</button>
                </form>
            </div>
            <div className={cl.bottomBlock}>
                <div className={cl.links}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>About</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>Store locator</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>FAQs</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>News</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>Careers</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={"#"}>Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;