import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import SpecialService from './SpecialService';
import NewItems from './NewItems';
import Offer from './Offer';


const Home = () => {
    return (
        <div className='bg-white'>
            <Banner />
            <Brands/>
            <SpecialService/>
            <NewItems/>
            <Offer/>
        </div>
    );
};

export default Home;