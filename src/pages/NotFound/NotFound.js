import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='text-center bg-green-400 py-32'>
                <h3 className='md:text-5xl text-3xl font-semibold text-white underline'>404 Page Not Found</h3>
                <Link to='/'>
                    <button className='mt-10 text-white border-2 px-10 py-2 text-xl'>Go To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;