import React from 'react';
import AboutSection from '../component/aboutSection/aboutSection';
import ContactInfo from '../component/contactinfo/contactinfo';
import ComponentTeam from '../component/ComponentTeam/ComponentTeam';

const About = () => {
    return (
        <div className="min-h-screen md:h">
            <AboutSection />
            <ContactInfo />
            <ComponentTeam />
        </div>
    );
};

export default About; 