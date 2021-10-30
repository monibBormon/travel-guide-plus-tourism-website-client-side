import React from 'react';

const TourAbout = () => {
    return (
        <div className='py-10 px-5 md:px-0'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="tour-about-image hidden md:block">
                    <img className='rounded-r-2xl' src="https://image.freepik.com/free-photo/top-view-traveling-items-arrangement_23-2148971043.jpg" alt="" />
                </div>
                <div className="tour-about-text">
                    <div className="section-title mb-10">
                        <h4 className='md:text-lg italic text-green-500 capitalize'>Among the all</h4>
                        <h2 className='md:text-4xl text-3xl font-semibold capitalize'>Choose your favourite tour</h2>
                    </div>
                    <div className="single-tour-about flex mr-10">
                        <i className="fas fa-images text-5xl md:text-6xl mr-5 md:mr-10 text-green-400"></i>
                        <div className="tour-meta">
                            <h3 className='lg:text-3xl text-2xl font-semibold'>We Suggest You The Best Tour Collection
                            </h3>
                            <p className='capitalize my-3 md:my-5'>when travelling if we have some support at unknown places then we are here to help you to your travel guide problem.</p>
                            <button style={{ transition: '.3s all' }} className='font-medium capitalize border-2 bg-green-400 border-green-400 text-white hover:bg-white hover:text-green-400 py-2 px-8 rounded-full'>book a tour <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourAbout;