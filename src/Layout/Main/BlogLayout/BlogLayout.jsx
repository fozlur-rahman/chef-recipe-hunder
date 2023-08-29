import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../../pages/shared/Navbar/Navbar';
import Footer from '../../../pages/shared/Footer/Footer';
import Blog from '../../../pages/Blog/BLog/Blog';


const BLogLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Blog></Blog>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default BLogLayout;