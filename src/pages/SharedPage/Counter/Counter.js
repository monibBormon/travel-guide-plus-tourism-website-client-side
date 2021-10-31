import React from 'react';
import CountUp from 'react-countup'


const Counter = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <div className="singleCounter text-center mb-5 px-4 py-10 shadow hover:shadow-lg">
                <i className="text-5xl mb-5 text-green-400 fas fa-rocket"></i>
                <div className="counter-meta">
                    <CountUp end={200} duration={3} />
                    <h4 className='text-4xl font-semibold'>10</h4>
                    <h2 className='text-xl mt-2'>Travel Package</h2>
                </div>
            </div>
            <div className="singleCounter text-center mb-5 px-4 py-10 shadow hover:shadow-lg">
                <i className="text-5xl mb-5 text-green-400 far fa-smile"></i>
                <div className="counter-meta">
                    <h4 className='text-4xl font-semibold'>350</h4>
                    <h2 className='text-xl mt-2'>Total Customers</h2>
                </div>
            </div>
            <div className="singleCounter text-center mb-5 px-4 py-10 shadow hover:shadow-lg">
                <i className="text-5xl mb-5 text-green-400 fas fa-location-arrow"></i>
                <div className="counter-meta">
                    <h4 className='text-4xl font-semibold'>6</h4>
                    <h2 className='text-xl mt-2'>Countries</h2>
                </div>
            </div>
            <div className="singleCounter text-center mb-5 px-4 py-10 shadow hover:shadow-lg">
                <i className="text-5xl mb-5 text-green-400 fas fa-user-alt"></i>
                <div className="counter-meta">
                    <h4 className='text-4xl font-semibold'>20</h4>
                    <h2 className='text-xl mt-2'>Team Member</h2>
                </div>
            </div>
        </div>
    );
};

export default Counter;