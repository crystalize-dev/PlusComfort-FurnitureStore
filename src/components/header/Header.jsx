import React, {useContext, useState} from 'react';
import cl from "./Header.module.css"
import logo from "../../img/logo.jpg"
import {Link} from "react-router-dom";
import classNames from "classnames";
import ModalCart from "../modalCart/ModalCart";
import {store} from "../../hardcode/Store";
import {CartContext} from "../../context/CartContext";
import {ModalContext} from "../../context/ModalContext";


const Header = () => {
    const [value, setValue] = useState("")
    const [searchModalMobile, setSearchModalMobile] = useState(false)

    const {modal, setModal} = useContext(ModalContext)

    const {cart} = useContext(CartContext)

    const getQueryItems = () => {
        const result = store.filter(storeItem => storeItem.description.toLowerCase().includes(value.toLowerCase()))

        if (value.length === 0 || result.length === 0) return <div className={classNames(cl.rowQuery, cl.notFound)}>Nothing found</div>

        return  result.map(item =>
            <Link to={`/products/${item.id}`} className={cl.rowQuery} key={item.id} onClick={closeInput}>
                <i className="fa-solid fa-magnifying-glass"></i>

                {item.description}
            </Link>)
    }

    const closeInput = () => {
        let input = document.getElementById('input')
        setSearchModalMobile(false)
        setValue("")
        input.blur()
    }

    return (
        <>
            <header id={"header"} className={cl.header}>
                <div className={cl.container}>
                    <Link to={"/"}>
                        <img src={logo} alt={"logo"} draggable={false} className={cl.logo}/>
                        <div>
                            <p className={cl.redText}>Plus</p>
                            <p>Comfort</p>
                        </div>
                    </Link>

                    <div className={searchModalMobile ? classNames(cl.inputWrapper, cl.mobile) : cl.inputWrapper}>
                        <input onFocus={() => setSearchModalMobile(true)} onBlur={() => setSearchModalMobile(false)} id={"input"} type={"text"} placeholder={"Search"}
                               value={value} onChange={e => setValue(e.target.value)}/>

                        <i className={classNames(cl.search, "fa-solid fa-magnifying-glass")}></i>
                        <i onClick={closeInput} className={classNames("fa-solid fa-xmark", cl.close)}></i>

                        <div className={cl.queryModal} onMouseDown={e => e.preventDefault()}>
                            {getQueryItems()}
                        </div>
                    </div>

                    <div className={cl.navbar}>
                        <Link to={"categories?filter=all"}>Categories</Link>

                        <i className="fa-solid fa-cart-shopping" data-count={cart.length === 0 ? null : cart.length} onClick={() => setModal(true)}></i>
                    </div>
                </div>
            </header>

            <ModalCart modal={modal} setModal={setModal}/>
        </>
    );
};

export default Header;