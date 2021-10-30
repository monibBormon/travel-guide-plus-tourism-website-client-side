import React from 'react';
import Expertise from '../Expertise/Expertise';
import Hero from '../Hero/Hero';
import HomeCounter from '../HomeCounter/HomeCounter';
import TourAbout from '../TourAbout/TourAbout';
import TourGuideTeam from '../TourGuideTeam/TourGuideTeam';
import TravelServices from '../TravelSevices/TravelServices';

const Home = () => {
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