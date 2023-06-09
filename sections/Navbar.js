import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='  flex justify-between '>
            {/* Logo Section */}
            <div>
                <p className='text-5xl font-bold text-green-500 '>Bike<span className=' text-red-500'>BD</span></p>
            </div>
            {/* Navigation */}
            <div className=' flex space-x-2'>
                <div className='text-2xl hover:bg-gray-50  rounded-md p-2'>
                    <Link to="/">Home</Link>
                </div>
                <div className='text-2xl hover:bg-gray-50  rounded-md p-2'>
                    <Link to="/services">Products</Link>
                </div>
                <div className='text-2xl hover:bg-gray-50  rounded-md p-2'>
                    <Link to="/manage">Manage</Link>
                </div>
                <div className='text-2xl hover:bg-gray-50  rounded-md p-2'>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className='text-2xl hover:bg-gray-50  rounded-md p-2'>
                    <Link to="/banner">Banner</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;