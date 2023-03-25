import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';


const Category = () => {
    const [categories, setCategories] = useState('');

    useEffect(() => {
        fetch('https://phone-store-server-nu.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);


    return (
        <div>
            <div><h1 className='text-5xl text-center mb-12'>Phone Category</h1></div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mx-auto '>
                {
                    categories &&
                    categories.map(product => <CategoryCard
                        key={product._id}
                        product={product}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;