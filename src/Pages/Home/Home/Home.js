import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import CategoryCard from '../Category/CategoryCard';
import SellingSection from '../SellingSection/SellingSection';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Category></Category>
            <SellingSection></SellingSection>
        </div>
    );
};

export default Home;