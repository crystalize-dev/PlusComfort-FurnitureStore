import React, {useContext, useEffect, useState} from 'react';
import cl from "./Categories.module.css"
import {Link, useSearchParams} from "react-router-dom";
import {store} from "../../hardcode/Store";
import {categories} from "../../hardcode/categories";
import {LangContext} from "../../context/LangContext";
import ProudCard from "../../components/Cards/proudCard/ProudCard";


const Categories = () => {
    const [query, setQuery] = useSearchParams()
    const [resultArr, setResultArr] = useState([])
    const {lang} = useContext(LangContext)

    useEffect(() => {
        const filter = query.get('filter')

        setResultArr(filter === 'all' ? store : store.filter(storeItem => ~storeItem.category.indexOf(filter)))
    }, [query])

    const translate = (en) => {
        switch (en) {
            case 'all': return "Все"
            case 'furniture': return "Мебель"
            case 'electronics': return "Электроника"
            case 'lamp': return "Лампы"
            case 'chair': return "Стулья"
            case 'skincare': return "Уход за кожей"
            case 'kitchen': return "Кухня"
            default: return "unknown"
        }
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.title}>
                    <Link to={"/"}><i className="fa-solid fa-chevron-left"></i>{lang === "ru" ? " Назад" : " Home"}</Link>
                    <h3>{lang === 'ru' ? translate(query.get('filter')) : query.get('filter')}</h3>
                </div>

                <div className={cl.btns}>
                    {categories.map(item =>
                        <button key={item} onClick={() => setQuery(`filter=${item}`)}
                                className={query.get('filter') === item ? cl.active : null}
                                disabled={query.get('filter') === item}>
                            {lang === 'ru' ? translate(item) : item}
                        </button>)}
                </div>

                <div className={cl.gridContainer}>
                    {resultArr.map(item => <ProudCard key={item.id} item={item}/>)}
                </div>
            </div>
        </div>
    );
};

export default Categories;