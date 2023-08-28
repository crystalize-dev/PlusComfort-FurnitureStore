import React, {useContext, useEffect, useState} from 'react';
import cl from "./Product.module.css"
import {useParams} from "react-router-dom";
import Trending from "../Home/Trending/Trending";
import {store} from "../../hardcode/Store";
import {CartContext} from "../../context/CartContext";
import {ModalContext} from "../../context/ModalContext";
import classNames from "classnames";


const Product = () => {
    const productId = parseInt(useParams().id)
    const item = store.find(storeItem => storeItem.id === productId)

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

    useEffect(() => {
        setImage(item.img)
        setQuantity(1)
    }, [item])

    return (
        <div className={cl.wrapper}>
            <div onAnimationEnd={() => setNotification(false)} className={notification ? classNames(cl.notification, cl.slide) : cl.notification}>
                <p>Item has been added to the cart &nbsp; ✅</p>
            </div>

            <div className={cl.container}>
                <div className={cl.product}>
                    <div className={cl.leftBlock}>
                        <h3>{item.description}</h3>

                        <div className={cl.bigImg}>
                            <img alt={"main"} src={image} draggable={false}/>
                        </div>
                        <div className={cl.smallImgs}>
                            <img onMouseOver={e => changeImage(e)} alt={"first"} src={item.img} draggable={false}/>

                            <img onMouseOver={e => changeImage(e)} alt={"second"} src={item.otherImgs[0]} draggable={false}/>

                            <img onMouseOver={e => changeImage(e)} alt={"third"} src={item.otherImgs[1]} draggable={false}/>
                        </div>
                    </div>

                    <div className={cl.rightBlock}>
                        <h3>{item.description}</h3>

                        <p>{item.specs}</p>

                        <div className={cl.amountArea}>
                            <p className={cl.quantity}>
                                Quantity
                            </p>

                            <div className={cl.btns}>
                                <button onClick={decreaseQuantity}>-</button>

                                <p>{quantity}</p>

                                <button onClick={increaseQuantity}>+</button>
                            </div>

                            <p className={cl.price}>{(item.price * quantity).toFixed(2)}$</p>
                        </div>

                        <div className={cl.submitArea}>
                            <button onClick={addToCartAndNotify}>Add to cart</button>

                            <button onClick={buyNow}>Buy now</button>
                        </div>
                    </div>
                </div>

                <div className={cl.specifications}>
                    <div className={cl.spec}>
                        <p>Texture</p>
                        <p>{item.texture}</p>
                    </div>
                    <div className={cl.spec}>
                        <p>Weight</p>
                        <p>{item.weight}</p>
                    </div>
                    <div className={cl.spec}>
                        <p>Size</p>
                        <p>{item.size}</p>
                    </div>
                </div>

                <Trending />
            </div>
        </div>
    );
};

export default Product;