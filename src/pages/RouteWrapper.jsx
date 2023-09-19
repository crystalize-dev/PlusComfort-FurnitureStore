import React from 'react';
import {useInView} from "react-intersection-observer";
import {Outlet} from "react-router-dom"
import cl from "./RouteWrapper.module.css"
import Footer from "../components/footer/Footer";
import ModalCart from "../components/modalCart/ModalCart";
import Header from "../components/header/Header";
import ArrowUp from "../components/ArrowUp/ArrowUp";


const RouteWrapper = () => {
    const {ref, inView} = useInView()

    return (
        <div className={cl.wrapper}>
            <ArrowUp inView={inView}/>

            <ModalCart />

            <Header header={ref}/>

            <Outlet />

            <Footer />
        </div>
    );
};

export default RouteWrapper;