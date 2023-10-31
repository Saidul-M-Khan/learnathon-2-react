import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <>
            <Header/>
            <div className="flex flex-col h-screen justify-between">
                <Outlet/>
                <Footer/>
            </div>
        </>
    );
};

export default Main;