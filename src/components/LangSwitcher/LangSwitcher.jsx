import React, {useContext} from 'react';
import cl from "./LangSwitcher.module.css"
import {LangContext} from "../../context/LangContext";


const LangSwitcher = () => {
    const {lang, switchLang} = useContext(LangContext)

    return (
        <p className={cl.lang} onClick={switchLang}>
            {lang}
        </p>
    );
};

export default LangSwitcher;