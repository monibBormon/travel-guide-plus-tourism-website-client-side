import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div className="container mx-auto py-5 px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    <div data-aos='fade-right' className="hero-text mb-5 md:mb-0">
                        <h2 className='md:text-6xl text-4xl font-medium md:mb-5 mb-3'>Explore the world with us</h2>
                        <p className='text-lg mb-5'>Travel is like refreshing our mind as well as soul. The world is too much beautiful that we think. We need to discover the world by travelling.</p>
                        <Link to='/tourPlaces'>
                            <button style={{ transition: '.3s all' }} className='font-medium capitalize border-2 border-green-400 py-2 px-8 hover:bg-green-400 hover:text-white rounded-full'>See all tours <i class="fas fa-arrow-right ml-2"></i></button>
                        </Link>
                    </div>
                    <div data-aos='fade-left' className="hero-img">
                        <img className='border-8 md:border-0 md:rounded-none border-green-300 rounded-lg' src="https://image.freepik.com/free-photo/people-traveling-together-with-their-backpacks_23-2149119345.jpg" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;