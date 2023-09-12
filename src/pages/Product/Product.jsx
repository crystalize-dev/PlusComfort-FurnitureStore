import React, {useContext, useEffect, useState} from 'react';
import cl from "./Product.module.css"
import {useParams} from "react-router-dom";
import Trending from "../Home/Trending/Trending";
import {store} from "../../hardcode/Store";
import {CartContext} from "../../context/CartContext";
import {ModalContext} from "../../context/ModalContext";
import {LangContext} from "../../context/LangContext";
import classNames from "classnames";


const Product = () => {
    const productId = parseInt(useParams().id)
    const item = store.find(storeItem => storeItem.id === productId)
    const {lang} = useContext(LangContext)

    const {addToCart} = useContext(CartContext)
    const {setModal} = useContext(ModalContext)

    const [image, setImage] = useState(item.img)
    const [quantity, setQuantity] = useState(1)
    const [notification, setNotification] = useState(false)

    const changeImage = (e) => {
        setImage(e.target.src);
    }

    const increaseQuantity = () => {
        if (quantity + 1 > 99) return

        setQuantity(quantity + 1)
    }
    const decreaseQuantity = () => {
        if (quantity - 1 <= 0) return

        setQuantity(quantity - 1)
    }

    const addToCartAndNotify = () => {
        addToCart(item, quantity)

        setNotification(true)
    }
    const buyNow = () => {
        addToCart(item, quantity)

        setModal(true)
    }

    const limitInput = e => {
        let newValue = Number(e.target.value)

        if (newValue > 99) return

        setQuantity(newValue)
    }

    useEffect(() => {
        let header = document.getElementById('header')
        header.scrollIntoView()

        setImage(item.img)
        setQuantity(1)
    }, [item])

    return (
        <div className={cl.wrapper}>
            <div onAnimationEnd={() => setNotification(false)}
                 className={notification ? classNames(cl.notification, cl.slide) : cl.notification}>
                <p>{lang === 'ru' ? "Товар добавлен в корзину" : "Item has been added to the cart"} &nbsp; ✅</p>
            </div>

            <div className={cl.container}>
                <div className={cl.product}>
                    <div className={cl.leftBlock}>
                        <h3>{lang === 'ru' ? item.descriptionRu : item.description}</h3>

                        <div className={cl.bigImg}>
                            <img alt={"main"} src={image} draggable={false}/>
                        </div>
                        <div className={cl.smallImgs}>
                            <img onMouseOver={e => changeImage(e)} alt={"first"} src={item.img} draggable={false}/>

                            <img onMouseOver={e => changeImage(e)} alt={"second"} src={item.otherImgs[0]}
                                 draggable={false}/>

                            <img onMouseOver={e => changeImage(e)} alt={"third"} src={item.otherImgs[1]}
                                 draggable={false}/>
                        </div>
                    </div>

                    <div className={cl.rightBlock}>
                        <h3>{lang === 'ru' ? item.descriptionRu : item.description}</h3>

                        <p>{lang === 'ru' ? item.specsRu : item.specs}</p>

                        <div className={cl.amountArea}>
                            <p className={cl.quantity}>
                                {lang === 'ru' ? 'Количество' : "Quantity"}
                            </p>

                            <div className={cl.btns}>
                                <button onClick={decreaseQuantity}>-</button>

                                <input type={"number"} value={quantity} onChange={e => limitInput(e)} min={1} max={99}/>

                                <button className={cl.fix} onClick={increaseQuantity}>+</button>
                            </div>

                            <p className={cl.price}>{(item.price * quantity).toFixed(2)}$</p>
                        </div>

                        <div className={cl.submitArea}>
                            <button
                                onClick={addToCartAndNotify}>{lang === 'ru' ? 'Добавить в корзину' : "Add to cart"}</button>

                            <button onClick={buyNow}>{lang === 'ru' ? "Купить сейчас" : "Buy now"}</button>
                        </div>
                    </div>
                </div>

                <div className={cl.specifications}>
                    {
                        lang === 'ru'
                            ?
                            item.specificationsRu.map(spec =>
                                <div key={spec.name} className={cl.spec}>
                                    <p>{spec.name}</p>
                                    <p>{spec.value}</p>
                                </div>)
                            :
                            item.specifications.map(spec =>
                                <div key={spec.name} className={cl.spec}>
                                    <p>{spec.name}</p>
                                    <p>{spec.value}</p>
                                </div>)
                    }
                </div>
                <Trending/>
            </div>
        </div>
    );
};

export default Product;