import React from 'react';
import banner1 from '../../../assets/img/banner-4.jpeg'


const Banner = () => {
    return (
        <div className="hero min-h-[700px]" style={{ backgroundImage: `url(${banner1})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w[400px]">
                    <h1 className="mb-6 text-white text-6xl font-bold">Welcome To The Biggest Phone Store</h1>
                    <p className="mb-5 text-white text-xl">Welcome to the biggest phone resale store. Here you can buy phone in cheaper rate. We make this platform for those people who want to sell their phones. You can sell your phone on your desired rate also. So explore this website.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;