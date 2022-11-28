import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
            <div>

                <p className="font-bold">
                    Phone Store LtD. <br />Providing reliable tech since 1999
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link className='text-2xl' href='https://twitter.com/i/flow/login'><FaTwitter></FaTwitter></Link>
                    <Link className='text-2xl' to='https://twitter.com/i/flow/login'><FaYoutube></FaYoutube></Link>
                    <Link className='text-2xl' to='https://twitter.com/i/flow/login'><FaFacebookF></FaFacebookF></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;