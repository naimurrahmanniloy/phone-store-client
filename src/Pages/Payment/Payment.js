import React from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('process.env.REACT_APP_STRIPE_PK');

const Payment = () => {
    const booking = useLoaderData();
    const { price, deviceName } = booking
    return (
        <div>
            <h3 className="text-3xl">Payment for {deviceName}</h3>
            <p className='text-2xl'>Please Pay <strong>{price}</strong> for buying this phone</p>
            <div className='w-96 m-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={
                        booking
                    } />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;