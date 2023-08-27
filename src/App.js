import './App.css';
import AppRouter from "./routing/AppRouter";
import {CartContext} from "./context/CartContext";
import {useEffect, useState} from "react";


function App() {
    const [cart, setCart] = useState([])

    const addToCart = (item, amount) => {
        if (cart.find(cartItem => cartItem.id === item.id) !== undefined)
            increaseAmount(cart.find(cartItem => cartItem.id === item.id), amount)
        else
            setCart([...cart, {...item, amount: amount}]);
    };

    const deleteFromCart = (item) => {
        setCart([...cart.filter(cartItem => cartItem.id !== item.id)])
        const json = JSON.stringify(cart);
        localStorage.setItem("cart", json);
    }

    const increaseAmount = (item, amount) => {
        setCart([...cart.map((cartItem) => {
            if (cartItem.id === item.id) return {...item, amount: item.amount + amount}
            else return cartItem
        })])
    }

    const decreaseAmount = (item) => {
        if (item.amount - 1 === 0) deleteFromCart(item)
        else setCart(cart.map((cartItem) => {
            if (cartItem.id === item.id) return {...item, amount: item.amount - 1}
            else return cartItem
        }))
    }

    // useEffect(() => {
    //     const json = localStorage.getItem("cart");
    //     const savedCart = JSON.parse(json);
    //     if (savedCart) {
    //         setCart(savedCart);
    //     }
    // }, []);

    useEffect(() => {
        const json = JSON.stringify(cart);
        localStorage.setItem("cart", json);
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, addToCart, deleteFromCart, increaseAmount, decreaseAmount}}>
            <AppRouter/>
        </CartContext.Provider>
    );
}

export default App;
