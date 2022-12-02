import React, { useContext } from 'react';
import { BsPhoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const SellingSection = () => {
    const { user } = useContext(AuthContext)
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
                    {
                        user?.email ? <Link to='/dashboard/sellpost'><button className="btn btn-primary">Sell Your Phone</button></Link>
                            : <Link to='/signup'><button className="btn btn-primary">Sell Your Phone</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default SellingSection;