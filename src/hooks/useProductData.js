import {store} from "../hardcode/Store";
import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../context/CartContext";
import {ModalContext} from "../context/ModalContext";
import Notification from "../components/Notification/Notification";


export const useProductData = (id) => {
    // Получаем продукт
    const item = store.find(storeItem => storeItem.id === id)

    const {addToCart} = useContext(CartContext)
    const {setModal} = useContext(ModalContext)

    const [image, setImage] = useState(item.img)
    const [quantity, setQuantity] = useState(1)
    const [notification, setNotification] = useState(false)

    // Изменение превью картинки продукта
    const changeImage = (e) => {
        setImage(e.target.src);
    }

    // Увеличить число продукта, если больше 99, е увеличивать
    const increaseQuantity = () => {
        if (quantity + 1 > 99) return

        setQuantity(quantity + 1)
    }

    // Уменьшить число продукта, если меньше 1, не уменьшать
    const decreaseQuantity = () => {
        if (quantity - 1 <= 0) return

        setQuantity(quantity - 1)
    }

    // Добавить продукт в корзину и отобразить уведомления
    const addToCartAndNotify = () => {
        if (quantity === 0) return

        addToCart(item, quantity)

        setNotification(true)
    }

    // Добавить в корзину и открыть её
    const buyNow = () => {
        if (quantity === 0) return

        addToCart(item, quantity)

        setModal(true)
    }

    // Не позволять вводить больше 99 в количество продукта
    const limitInput = e => {
        let newValue = parseInt(e.target.value, 10)

        if (isNaN(newValue)) newValue = ""

        if (newValue > 99) return

        setQuantity(newValue)
    }

    const onBlur = e => {
        if (Number(e.target.value) === 0) {
            setQuantity(1)
        }
    }

    const notificationElem = <Notification notification={notification} setNotification={setNotification}/>

    // при каждом изменении продукта скролить вверх, обнулять кол-во и картинку
    useEffect(() => {
        let header = document.getElementById('start')
        header.scrollIntoView()

        setImage(item.img)
        setQuantity(1)
    }, [item])

    return {
        item,
        image,
        changeImage,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        limitInput,
        addToCartAndNotify,
        buyNow,
        notificationElem,
        onBlur
    }
}