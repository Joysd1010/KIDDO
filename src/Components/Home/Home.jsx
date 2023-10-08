import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import SpecialService from './SpecialService';
import NewItems from './NewItems';

const Home = () => {
    return (
        <div className=' '>
            <Banner/>
            <Brands/>
            <SpecialService/>
            <NewItems/>
        </div>
    );
};

export default Home;