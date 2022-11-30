import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { name, picture, _id } = category;


    return (


        <div className="card card-compact w-full bg-base-700 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If you want to buy second hand phone this will be the best choice for you..</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${_id}`}> <button className="btn btn-primary px-20">show</button></Link>
                </div>
            </div>
        </div>

    );
};

export default CategoryCard;