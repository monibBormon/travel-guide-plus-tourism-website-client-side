import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleTravelService from '../SharedPage/SingleTravelService/SingleTravelService';

const AllTours = () => {
    const [tours, setTours] = useState([])
    const { isLoading } = useAuth()
    useEffect(() => {
        fetch('https://tranquil-eyrie-48733.herokuapp.com/tourPlaces')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div>
            {
                isLoading ? <div>
                    <h2 className='text-4xl text-green-500 text-center font-medium pt-30'>Loading...</h2>
                </div> : <div className="container mx-auto py-10 px-5 lg:px-0">
                    <div className="section-title mb-10 text-center">
                        <h4 className='md:text-lg italic text-green-500 capitalize'>popular package</h4>
                        <h2 className='md:text-4xl text-3xl font-semibold capitalize'>Choose your favourite tour place</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            tours.map(tour => <SingleTravelService key={tour._id} tour={tour}></SingleTravelService>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default AllTours;