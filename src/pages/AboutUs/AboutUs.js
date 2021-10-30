import React from 'react';
import Counter from '../SharedPage/Counter/Counter';


const AboutUs = () => {
    return (
        <div>
            <div className='text-center bg-green-400 py-10'>
                <h3 className='md:text-5xl text-4xl font-semibold text-white underline'>About Us</h3>
            </div>
            <div className="container mx-auto gap-4 py-10 px-5 lg:px-0">
                <img className='border-8 border-green-300 rounded md:border-0 md:rounded-none' src="https://image.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg" alt="" />
                <div className="about-text">
                    <h2 className='md:text-5xl text-3xl font-semibold my-5 capitalize'>About our beloved travel guide agency</h2>
                    <p className='md:text-xl my-5'>We are here to help you for your travelling journey.In case of travelling people faces many types of problems. At this moment every one is very passionate for travel. But they didn't find any travel guide who can help them for in difficulties situation.After hearing this we started our journey for helping the travelers to make their life easier.</p>
                    <p className='font-semibold mb-5 text-xl md:text-2xl'>We have many travel packages for travellers.</p>
                    <button style={{ transition: '.3s all' }} className='font-medium capitalize border-2 bg-green-400 border-green-400 text-white hover:bg-white hover:text-green-400 py-2 px-8 rounded-full'>Discover Packages <i className="fas fa-arrow-right ml-2"></i></button>
                </div>
                <Counter></Counter>
            </div>
        </div>
    );
};

export default AboutUs;