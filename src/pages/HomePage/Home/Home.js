import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Expertise from '../Expertise/Expertise';
import Hero from '../Hero/Hero';
import HomeCounter from '../HomeCounter/HomeCounter';
import TourAbout from '../TourAbout/TourAbout';
import TourGuideTeam from '../TourGuideTeam/TourGuideTeam';
import TravelServices from '../TravelSevices/TravelServices';

const Home = () => {
    const { isLoading } = useAuth()
    if (isLoading) {
        return <div>
            <h2 className='text-4xl text-green-500 text-center font-medium pt-30'>Loading...</h2>
        </div>
    }
    return (
        <div>
            <Hero></Hero>
            <TravelServices></TravelServices>
            <Expertise></Expertise>
            <TourGuideTeam></TourGuideTeam>
            <TourAbout></TourAbout>
            <HomeCounter></HomeCounter>
        </div>
    );
};

export default Home;