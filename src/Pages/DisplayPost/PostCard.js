import React from 'react';

const PostCard = ({ product, setBookingInfo }) => {
    const { deviceName, phone, description, location, originalPrice, resalePrice, yearsOfUse, sellerName, img, } = product;
    return (

        <div>
            <div className="card card-compact w-auto bg-base-100 shadow-xl mx-5 ">
                <figure><img src={img} alt="Shoes" style={{ height: 280, width: 500 }} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{deviceName}</h2>
                    <p>Original price: {originalPrice}$</p>
                    <p>Resale price: {resalePrice}$</p>
                    <p>Year of Use: {yearsOfUse}</p>
                    <p>Location: {location}</p>
                    <p>Seller name: {sellerName}</p>
                    <p>Description: {description}</p>
                    <p>Phone Number: {phone}</p>
                    <div>
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary text-white"
                            onClick={() => setBookingInfo(product)}

                        >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;