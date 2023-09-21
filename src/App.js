import './App.css';
import AppRouter from "./routing/AppRouter";
import {useState} from "react";
import {useCart} from "./hooks/useCart";
import {CartContext} from "./context/CartContext";
import {ModalContext} from "./context/ModalContext";
import {TranslationProvider} from "i18nano";
import {translations} from "./localization/translations";


function App() {
    const {cart, addToCart, deleteFromCart, increaseAmount, decreaseAmount} = useCart()
    const [modal, setModal] = useState(false)

    return (
        <TranslationProvider translations={translations}
                             fallback={'en'}
                             preloadLanguage={true} preloadFallback={true} transition={true}>
            <ModalContext.Provider value={{modal, setModal}}>
                <CartContext.Provider value={{cart, addToCart, deleteFromCart, increaseAmount, decreaseAmount}}>
                    <AppRouter/>
                </CartContext.Provider>
            </ModalContext.Provider>
        </TranslationProvider>
    );
}

export default App;
