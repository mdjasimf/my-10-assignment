import React from 'react';
import BannerCarosel from '../BannerCarosel/BannerCarosel';
import ExtraSection from '../ExtraSection/ExtraSection';
import HomePageServices from '../HomePageServices/HomePageServices';

const Home = () => {
    return (
        <div>
            <BannerCarosel></BannerCarosel>
            <HomePageServices></HomePageServices>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;