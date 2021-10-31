import React from 'react';
import { Link } from 'react-router-dom';

const SingleTravelService = ({ tour }) => {
    const { image, day, title, description, price, _id } = tour
    return (
        <div>
            <div className="single-tour-box p-4 shadow-lg mb-5">
                <img style={{ height: '350px', width: '100%' }} src={image} className='rounded' alt="..." />
                <div className="single-tour-text py-5">
                    <h4 className='font-semibold text-green-400 mb-3'><i className="far fa-calendar-alt mr-3 text-xl"></i>{day} Days</h4>
                    <Link to={`/tourDetails/${tour._id}`}>
                        <h2 className='md:text-2xl text-xl font-semibold mb-5'>{title}</h2>
                    </Link>
                    <p>{description.slice(0, 110)}...</p>
                    <h4 className='my-2 font-semibold text-green-400 text-xl'>Package Price: ${price}/per</h4>
                    <Link to={`/tourDetails/${_id}`}>
                        <button style={{ transition: '.3s all' }} className='font-medium capitalize border-2 bg-green-400 border-green-400 text-white hover:bg-white hover:text-green-400 py-2 px-8 rounded-full mt-3'>Book Tour <i class="fas fa-arrow-right"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleTravelService;