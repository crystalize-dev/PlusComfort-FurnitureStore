import React from 'react';
import cl from "./Product.module.css"
import {useProductData} from "../../hooks/useProductData";
import {useTranslation, useTranslationChange} from "i18nano";
import {useParams} from "react-router-dom";
import Trending from "../Home/Trending/Trending";


const Product = () => {
    const productId = parseInt(useParams().id)

    const {
        item,
        image,
        changeImage,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        limitInput,
        addToCartAndNotify,
        buyNow,
        notificationElem
    } = useProductData(productId)

    const lang = useTranslationChange().lang
    const text = useTranslation()

    return (
        <div className={cl.wrapper}>
            {notificationElem}

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
                                {text('product.quantity')}
                            </p>

                            <div className={cl.btns}>
                                <button onClick={decreaseQuantity}>-</button>

                                <input type={"number"}
                                       value={quantity} onChange={e => limitInput(e)}
                                       min={1} max={99}/>

                                <button className={cl.fix} onClick={increaseQuantity}>+</button>
                            </div>

                            <p className={cl.price}>{(item.price * quantity).toFixed(2)}$</p>
                        </div>

                        <div className={cl.submitArea}>
                            <button
                                onClick={addToCartAndNotify}>
                                {text('product.button.add')}
                            </button>

                            <button onClick={buyNow}>
                                {text('product.button.buy')}
                            </button>
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