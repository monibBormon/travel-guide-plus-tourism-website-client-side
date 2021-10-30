import React from 'react';

const TourGuideTeam = () => {
    return (
        <div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <div className="section-title mb-10 text-center">
                    <h4 className='md:text-lg italic text-green-500 capitalize'>Persons who guide you</h4>
                    <h2 className='md:text-4xl text-3xl font-semibold capitalize'>Meet Our Awesome Travel Guide</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    <div className="single-tour-guide p-3 shadow-lg">
                        <img src="https://i.ibb.co/G7CD0bz/attractive-mixed-race-male-with-positive-smile-shows-white-teeth-keeps-hands-stomach-being-high-spir.jpg" alt="" />
                        <div className="tour-guide-meta pt-5 pb-5">
                            <h3 className='text-2xl font-semibold'>Alex Akash</h3>
                            <p className='font-medium'>Mountain Guide</p>
                            <div className="guide-social-icons mt-3">
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-facebook-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-instagram-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-google-plus-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-twitter-square"></i>
                            </div>
                        </div>
                    </div>
                    <div className="single-tour-guide p-3 shadow-lg">
                        <img src="https://i.ibb.co/x822wkJ/portrait-young-blonde-woman-wearing-denim-overalls-273609-10495.jpg" alt="" />
                        <div className="tour-guide-meta pt-5 pb-5">
                            <h3 className='text-2xl font-semibold'>Muskan Jenifer</h3>
                            <p className='font-medium'>Mountain Guide</p>
                            <div className="guide-social-icons mt-3">
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-facebook-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-instagram-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-google-plus-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-twitter-square"></i>
                            </div>
                        </div>
                    </div>
                    <div className="single-tour-guide p-3 shadow-lg">
                        <img src="https://i.ibb.co/hBMbQQP/happy-man-with-long-thick-ginger-beard-has-friendly-smile-273609-16616.jpg" alt="" />
                        <div className="tour-guide-meta pt-5 pb-5">
                            <h3 className='text-2xl font-semibold'>Pulok Stephen</h3>
                            <p className='font-medium'>Park Guide</p>
                            <div className="guide-social-icons mt-3">
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-facebook-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-instagram-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-google-plus-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-twitter-square"></i>
                            </div>
                        </div>
                    </div>
                    <div className="single-tour-guide p-3 shadow-lg">
                        <img src="https://i.ibb.co/JvLP949/happy-asian-man-standing-with-arms-crossed-grey-wall-171337-10467.jpg" alt="" />
                        <div className="tour-guide-meta pt-5 pb-5">
                            <h3 className='text-2xl font-semibold'>Mio Sao</h3>
                            <p className='font-medium'>Tour Guide</p>
                            <div className="guide-social-icons mt-3">
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-facebook-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-instagram-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-google-plus-square"></i>
                                <i className="text-2xl text-green-400 mr-3 cursor-pointer fab fa-twitter-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourGuideTeam;