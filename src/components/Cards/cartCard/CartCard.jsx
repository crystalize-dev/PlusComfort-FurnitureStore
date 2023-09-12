import React, {useContext} from 'react';
import cl from "./CartCard.module.css"
import {CartContext} from "../../../context/CartContext";
import {LangContext} from "../../../context/LangContext";


const CartCard = ({item}) => {
    const {lang} = useContext(LangContext)
    const {deleteFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)

    return (
        <div className={cl.card}>
            <div className={cl.img}>
                <img alt={item.description} src={item.img} draggable={false}/>
            </div>

            <div className={cl.middle}>
                <p>{lang === 'ru' ? item.descriptionRu : item.description}</p>
                <div className={cl.controlBtns}>
                    <button onClick={() => decreaseAmount(item)}>-</button>
                    <p>{item.amount}</p>
                    <button onClick={() => increaseAmount(item, 1)}>+</button>
                </div>
            </div>

            <div className={cl.right}>
                <div>
                    <p>{(item.price * item.amount).toFixed(2)} $</p>
                    <p className={cl.startCost}>({item.price}$ {lang === 'ru' ? "За" : "per"} 1)</p>
                </div>

                <i onClick={() => deleteFromCart(item)} className="fa-sharp fa-solid fa-xmark"></i>
            </div>
        </div>
    );
};

export default CartCard;