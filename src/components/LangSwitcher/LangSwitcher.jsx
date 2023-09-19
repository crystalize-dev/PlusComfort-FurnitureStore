import React from 'react';
import cl from "./LangSwitcher.module.css"
import {useTranslationChange} from "i18nano";


const LangSwitcher = () => {
    const translation = useTranslationChange()

    const switchLang = () => {
        translation.lang === 'ru' ? translation.change('en') : translation.change('ru')
    }

    return (
        <p className={cl.lang} onClick={switchLang}>
            {translation.lang}
        </p>
    );
};

export default LangSwitcher;