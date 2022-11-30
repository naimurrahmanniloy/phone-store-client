import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import CategoryCard from '../Category/CategoryCard';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Category></Category>

        </div>
    );
};

export default Home;