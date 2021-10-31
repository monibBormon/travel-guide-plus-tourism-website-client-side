import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-10 border-t-2 border-green-100' >
            <div className="container mx-auto px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="footer-text">
                        <div className="logo mb-3">
                            <Link to='/'>
                                <h2 className='text-green-400 text-3xl font-medium'>Travel<span className='text-red-400'>Guide+</span></h2>
                            </Link>
                        </div>
                        <p>We are here to help you for your travelling journey.In case of travelling people faces many types of problems. At this moment every one is very passionate for travel.</p>
                    </div>
                    <div className="footer-links">
                        <h2 className='text-green-400 text-3xl font-medium mb-3'>Important Links</h2>
                        <div className="links">
                            <Link to='/about' className='block underline mb-2'>About Us</Link>
                            <Link to='myOrders' className='block underline mb-2'>My Orders</Link>
                            <Link to='tourPlaces' className='block underline mb-2'>Tours Packages</Link>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h2 className='text-green-400 text-3xl font-medium mb-3'>Contact Us</h2>
                        <p className='mb-3'> <i className="text-xl mr-2 text-green-400 fas fa-envelope"></i> travelguide@mail.com</p>
                        <p className='mb-3'> <i className="text-xl mr-2 text-green-400 fas fa-map-marker-alt"></i> Bandarban,Bangladesh</p>
                        <p className='mb-3'> <i className="text-xl mr-2 text-green-400 fas fa-phone-alt"></i> +8801922-222211</p>
                    </div>
                </div>
                <h3 className='text-center text-xl mt-5 font-semibold'>All right reserved to Travel Guide+ &copy; 2021</h3>
            </div>
        </div >

    );
};

export default Footer;