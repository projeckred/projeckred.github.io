import React, {useEffect, useState} from 'react';
import './App.css';
import {Introduction} from "./sections/introduction/Introduction";
import {About} from "./sections/about/About";
import {MissionVision} from "./sections/mission-vision/MissionVision";
import {AsSeen} from "./sections/as-seen/AsSeen";
import {WhatWeDo} from "./sections/what-we-do/WhatWeDo";
import {Donation} from "./sections/donation/Donation";
import {Team} from "./sections/team/Team";
import {Footer} from "./sections/footer/Footer";

function App() {
    const sectionIds = ['intro', 'mission', 'what-we-do', 'donation', 'testimonial', 'footer'];
    const [activeSection, setActiveSection] = useState(sectionIds[0]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.6
            }
        )
        
        sectionIds.forEach(id => {
            const section = document.getElementById(id)
            if (section) observer.observe(section)
        })
        
        return () => {
            sectionIds.forEach(id => {
                const section = document.getElementById(id)
                if (section) observer.unobserve(section)
            })
        }
    })
    return (
        <div className="App">
            <Introduction activeSection={activeSection}/>
            <About/>
            <MissionVision/>
            <AsSeen/>
            <WhatWeDo/>
            <Donation/>
            <Team/>
            <Footer/>
        </div>
    );
}

export default App;
