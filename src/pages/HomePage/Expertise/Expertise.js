import React from 'react';

const Expertise = () => {
    return (
        <div className='bg-green-50'>
            <div className="container mx-auto py-10 px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="expertise-offer">
                        <div className="section-title mb-10">
                            <h4 className='md:text-lg italic text-green-500 capitalize'>we are specialized in</h4>
                            <h2 className='md:text-4xl text-3xl font-semibold capitalize'>Tour & travel arrangement</h2>
                        </div>
                        <div className="single-expertise flex mb-6">
                            <div className="expertise-icon mr-5">
                                <i className="text-5xl mt-1 text-green-400 fas fa-monument"></i>
                            </div>
                            <div className="expertise-text">
                                <h4 className='md:text-3xl text-2xl font-medium capitalize'>We can be a great travel planner for you</h4>
                                <p>when travelling if we have some support at unknown places then we are here to help you to your travel guide problem.</p>
                            </div>
                        </div>
                        <div className="single-expertise flex mb-6">
                            <div className="expertise-icon mr-5">
                                <i className="text-5xl mt-1 text-green-400 fas fa-bahai"></i>
                            </div>
                            <div className="expertise-text">
                                <h4 className='md:text-3xl text-2xl font-medium'>We Guide You All Over The World
                                </h4>
                                <p>when travelling if we have some support at unknown places then we are here to help you to your travel guide problem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="expertise-image">
                        <img className='border-8 border-green-300 shadow-xl rounded' src="https://image.freepik.com/free-photo/happy-tourist-sightseeing-city-with-map_329181-477.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;