import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import PostCard from './PostCard';

const Categories = () => {
    const products = useLoaderData();
    const [bookingInfo, setBookingInfo] = useState(null);
    console.log(products)
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-10 sm:mx-auto'>
                {
                    products.map(product => <PostCard key={product._id}
                        product={product}
                        setBookingInfo={setBookingInfo}
                    >

                    </PostCard>)
                }
            </div>
            {
                bookingInfo &&
                <BookingModal
                    bookingInfo={bookingInfo}
                    setBookingInfo={setBookingInfo}
                ></BookingModal>
            }
        </div>
    );
};

export default Categories;