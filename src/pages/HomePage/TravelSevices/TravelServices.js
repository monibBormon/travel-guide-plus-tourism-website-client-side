import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TravelServices = () => {
    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tourPlaces')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div id='tours'>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <div className="section-title mb-10 text-center">
                    <h4 className='md:text-lg italic text-green-500 capitalize'>popular package</h4>
                    <h2 className='md:text-4xl text-3xl font-semibold capitalize'>Choose your favourite tour place</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        tours.map(tour => <div key={tour._id}>
                            <div className="single-tour-box p-4 shadow-lg mb-5">
                                <img style={{ height: '350px', width: '100%' }} src={tour.image} className='rounded' alt="..." />
                                <div className="single-tour-text py-5">
                                    <h4 className='font-semibold text-green-400 mb-3'><i className="far fa-calendar-alt mr-3 text-xl"></i>{tour.day} Days</h4>
                                    <h2 className='md:text-2xl text-xl font-semibold mb-5'>{tour.title}</h2>
                                    <p>{tour.description.slice(0, 110)}...</p>
                                    <h4 className='my-2 font-semibold text-green-400 text-xl'>Package Price: ${tour.price}/per</h4>
                                    <Link to={`/tourDetails/${tour._id}`}>
                                        <button style={{ transition: '.3s all' }} className='font-medium capitalize border-2 bg-green-400 border-green-400 text-white hover:bg-white hover:text-green-400 py-2 px-8 rounded-full mt-3'>Book Tour <i class="fas fa-arrow-right"></i></button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TravelServices;