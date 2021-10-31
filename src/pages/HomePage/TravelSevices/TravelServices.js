import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SingleTravelService from '../../SharedPage/SingleTravelService/SingleTravelService';

const TravelServices = () => {
    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch('https://tranquil-eyrie-48733.herokuapp.com/tourPlaces')
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
                        tours.map(tour => <SingleTravelService key={tour._id} tour={tour}></SingleTravelService>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/tourPlaces'>
                        <button className='px-10 border-2 py-3 mx-auto bg-green-500 text-white font-semibold text-2xl mt-10 mb-5'>See All Travel Services</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TravelServices;