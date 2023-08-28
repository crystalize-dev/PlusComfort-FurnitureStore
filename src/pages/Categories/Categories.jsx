import React, {useEffect, useState} from 'react';
import cl from "./Categories.module.css"
import {Link, useSearchParams} from "react-router-dom";
import {store} from "../../hardcode/Store";
import ProudCard from "../../components/Cards/proudCard/ProudCard";


const Categories = () => {
    const [query, setQuery] = useSearchParams()
    const [resultArr, setResultArr] = useState([])

    useEffect(() => {
        const filter = query.get('filter')

        switch (filter) {
            case 'all': {
                setResultArr(store)
                break
            }
            case 'furniture': {
                setResultArr(store.filter(storeItem => ~storeItem.category.indexOf('furniture')))
                break
            }
            case 'skincare': {
                setResultArr(store.filter(storeItem => ~storeItem.category.indexOf('skincare')))
                break
            }
            case 'electronics': {
                setResultArr(store.filter(storeItem => ~storeItem.category.indexOf('electronics')))
                break
            }
            case 'chairs': {
                setResultArr(store.filter(storeItem => ~storeItem.category.indexOf('chair')))
                break
            }
            case 'lamps': {
                setResultArr(store.filter(storeItem => ~storeItem.category.indexOf('lamp')))
                break
            }
            case 'kitchen': {
                setResultArr(store.filter(storeItem => ~storeItem.category.indexOf('kitchen')))
                break
            }
            default: {
                setResultArr(store)
            }
        }
    }, [query])

    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.title}>
                    <Link to={"/"}><i className="fa-solid fa-chevron-left"></i> Home</Link>
                    <h3>{query.get('filter')}</h3>
                </div>

                <div className={cl.btns}>
                    <button onClick={() => setQuery("filter=all")}
                            className={query.get("filter") === "all" ? cl.active : null}
                            disabled={query.get('filter') === "all"}>All</button>

                    <button onClick={() => setQuery("filter=furniture")}
                            className={query.get("filter") === "furniture" ? cl.active : null}
                            disabled={query.get('filter') === "furniture"}>Furniture</button>

                    <button onClick={() => setQuery("filter=skincare")}
                            className={query.get("filter") === "skincare" ? cl.active : null}
                            disabled={query.get('filter') === "skincare"}>Skincare</button>

                    <button onClick={() => setQuery("filter=kitchen")}
                            className={query.get("filter") === "kitchen" ? cl.active : null}
                            disabled={query.get('filter') === "kitchen"}>Kitchen</button>

                    <button onClick={() => setQuery("filter=lamps")}
                            className={query.get("filter") === "lamps" ? cl.active : null}
                            disabled={query.get('filter') === "lamps"}>Lamps</button>

                    <button onClick={() => setQuery("filter=chairs")}
                            className={query.get("filter") === "chairs" ? cl.active : null}
                            disabled={query.get('filter') === "chairs"}>Chairs</button>

                    <button onClick={() => setQuery("filter=electronics")}
                            className={query.get("filter") === "electronics" ? cl.active : null}
                            disabled={query.get('filter') === "electronics"}>Electronics</button>
                </div>

                <div className={cl.gridContainer}>
                    {resultArr.map(item => <ProudCard key={item.id} item={item}/>)}
                </div>
            </div>
        </div>
    );
};

export default Categories;