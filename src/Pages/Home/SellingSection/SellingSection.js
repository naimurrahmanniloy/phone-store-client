import React from 'react';
import { BsPhoneFill } from 'react-icons/bs';

const SellingSection = () => {
    return (
        <div className="hero my-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mockup-phone mr-9">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">Welcome to phone store. <br /> Sell your phone at best price here....
                            <BsPhoneFill className='text-2xl mt-3'></BsPhoneFill>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Great News for you guys!!!</h1>
                    <p className="py-6">You can sell your phone free of cost here. Try to get the best from here.</p>
                    <button className="btn btn-primary">Sell Your Phone</button>
                </div>
            </div>
        </div>
    );
};

export default SellingSection;