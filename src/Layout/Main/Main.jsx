import React from 'react';
import Footer from '../../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/shared/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;