import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "../pages/Home/Home";
import RouteWrapper from "../pages/RouteWrapper";
import Categories from "../pages/Categories/Categories";
import Product from "../pages/Product/Product";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RouteWrapper />}>
        <Route index element={<Home />}/>
        <Route path={'categories'} element={<Categories />}/>
        <Route path={"/products/:id"} element={<Product />}/>
    </Route>
));


const AppRouter = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default AppRouter;