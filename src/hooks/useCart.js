import {useEffect, useState} from "react";

export const useCart = () => {
    const [cart, setCart] = useState([])

    // Добавить в корзину. Если уже есть, то увеличить на 1 в корзине
    const addToCart = (item, amount) => {
        let toFind = cart.find(cartItem => cartItem.id === item.id)

        if (toFind !== undefined)
            increaseAmount(toFind, amount)
        else
            setCart([...cart, {...item, amount: amount}]);
    };

    // Удалить из корзины
    const deleteFromCart = (item) => {
        setCart([...cart.filter(cartItem => cartItem.id !== item.id)])
    }

    // Увеличить число продукта в корзине. Если больше 99, то не увеличивать
    const increaseAmount = (item, amount) => {
        if (item.amount + 1 > 99) return

        setCart([...cart.map((cartItem) => {
            if (cartItem.id === item.id) return {...item, amount: item.amount + amount}
            else return cartItem
        })])
    }

     // Уменьшить число продукта в корзине. Если меньше 1, то удалить из корзины
    const decreaseAmount = (item) => {
        if (item.amount - 1 === 0) deleteFromCart(item)

        else setCart(cart.map((cartItem) => {
            if (cartItem.id === item.id) return {...item, amount: item.amount - 1}
            else return cartItem
        }))
    }

    // Подгрузить корзину из localStorage, если есть
    useEffect(() => {
        const json = localStorage.getItem("cart");
        const savedCart = JSON.parse(json);
        if (savedCart) {
            setCart(savedCart);
        }
    }, []);

    // Обновлять localStorage каждый раз при изменении корзины
    useEffect(() => {
        const json = JSON.stringify(cart);
        localStorage.setItem("cart", json);
    }, [cart]);

    return {cart, addToCart, deleteFromCart, increaseAmount, decreaseAmount}
}