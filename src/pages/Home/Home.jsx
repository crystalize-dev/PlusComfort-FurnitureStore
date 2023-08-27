import React from 'react';
import cl from "./Home.module.css"
import GridPreview from "./GridPreview/GridPreview";
import ProudProducts from "./ProudProducts/ProudProducts";
import CreateLiving from "./Banners/CreateLiving/CreateLiving";
import Trending from "./Trending/Trending";
import ComfortLiving from "./Banners/ComfortLiving/ComfortLiving";



const Home = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <GridPreview />

                <ProudProducts />

                <CreateLiving />

                <Trending />

                <ComfortLiving />
            </div>
        </div>
    );
};

export default Home;