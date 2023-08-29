import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import BLogLayout from '../Layout/Main/BlogLayout/BlogLayout';
import Chefs from '../pages/Home/Chefs/Chefs';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Chefs></Chefs>
            }
        ]
    }, {
        path: '/blog',
        element: <BLogLayout></BLogLayout>
    }

])

export default router;