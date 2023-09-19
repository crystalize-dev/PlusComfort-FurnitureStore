import React, {useContext} from 'react';
import {useTranslation} from "i18nano";
import cl from "./ModalCart.module.css"
import classNames from "classnames";
import {CartContext} from "../../context/CartContext";
import {ModalContext} from "../../context/ModalContext";
import empty from "../../img/cart/empty-cart.png"
import CartCard from "../Cards/cartCard/CartCard";


const ModalCart = () => {
    const {modal, setModal} = useContext(ModalContext)
    const {cart} = useContext(CartContext)

    const text = useTranslation()

    const calcSum = (cart) => {
        return cart.reduce((acc, curr) => acc + curr.price* curr.amount, 0);
    };

    return (
        <div className={modal ? cl.wrapper : classNames(cl.wrapper, cl.hide)} onMouseDown={() => setModal(false)}>
            <div className={cl.window} onMouseDown={e => e.stopPropagation()}>
                <i className="fa-solid fa-xmark" onClick={() => setModal(false)}></i>

                <h1>{text('cart.header')}({cart.length})</h1>

                <div className={cl.content}>
                    {cart.length === 0
                        ?
                            <div className={cl.empty}>
                                <img alt={"empty"} src={empty} draggable={false}/>
                                <p>{text("cart.empty")}</p>
                            </div>
                        :
                        cart.map(item =>
                            <CartCard key={item.id} item={item} />)}
                </div>

                <hr/>

                <div className={cl.sumArea}>
                    <div className={cl.textArea}>
                        <p>{text('cart.summary')}</p>
                        <p>{calcSum(cart).toFixed(2)}$</p>
                    </div>

                    <button>{text('cart.buy')}</button>
                </div>
            </div>
        </div>
    );
};

export default ModalCart;