import React, { useState, useEffect } from 'react';
import CategoryCard from '../Category/CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);


    return (
        <div>
            <div><h1 className='text-5xl mt-10 text-center mb-12'>Phone Category</h1></div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mx-auto '>
                {
                    categories &&
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;