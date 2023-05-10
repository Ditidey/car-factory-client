import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './services/Services';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
            this is home
        </div>
    );
};

export default Home;