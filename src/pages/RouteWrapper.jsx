import React from 'react';
import Header from "../components/header/Header";
import {Outlet} from "react-router-dom"
import cl from "./RouteWrapper.module.css"
import Footer from "../components/footer/Footer";


const RouteWrapper = () => {
    return (
        <div className={cl.wrapper}>
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
};

export default RouteWrapper;