import './Team.css'
import React, {useEffect, useState} from "react";

export const Team = function () {
    
    return <section id="team">
        <div className="content">
            <header>Voices of <span className="text-dodgerBlue">Impact</span></header>
            <Carousel testimonials={testimonials}/>
        </div>
    </section>
}


class Testimonial {
    title: string;
    text: string;
    attribution: string;
    
    constructor(title: string, text: string, attribution: string) {
        this.title = title
        this.text = text
        this.attribution = attribution
    }
}

interface CarouselProps {
    testimonials: Testimonial[];
}

const Carousel: React.FC<CarouselProps> = ({testimonials}) => {
    const [itemsPerPage, setItemsPerPage] = useState(1);  // default for mobile
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoScroll, setAutoScroll] = useState(true);
    
    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth >= 640) { // the breakpoint where you switch from 1 to 2 testimonials
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };
        
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();  // initial check
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    
    useEffect(() => {
        if (autoScroll) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + itemsPerPage) % testimonials.length);
            }, 3000);
            
            return () => clearInterval(interval);
        }
    }, [autoScroll, testimonials.length, itemsPerPage]);
    
    const handleIndicatorClick = (index: number) => {
        setAutoScroll(false);
        setCurrentSlide(index);
    };
    
    return (
        <div className="carousel-container">
            <div className="carousel">
                {Array.from({ length: itemsPerPage }).map((_, index) => {
                    const testimonial = testimonials[currentSlide + index];
                    return testimonial ? (
                        <div className="testimonial" key={testimonial.title}>
                            <h3>{testimonial.title}</h3>
                            <p>{testimonial.text}</p>
                            <small><NewlineText text={testimonial.attribution} /></small>
                        </div>
                    ) : null;
                })}
            
            </div>
            <div className="indicators">
                {Array(Math.ceil(testimonials.length / itemsPerPage)).fill(0).map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleIndicatorClick(index * itemsPerPage)}
                        style={{
                            backgroundColor: index * itemsPerPage === currentSlide ? '#38B6FF' : '#E8E8E8',
                            borderRadius: '50%',
                            width: '16px',
                            height: '16px',
                        }}
                    ></span>
                ))}
            </div>
        
        </div>
    );
};

function NewlineText({text}: { text: string }) {
    return (
        <>
            {text.split('\n').map((line, index) => (
                <span key={index}>
                    {line}
                    {index !== text.split('\n').length - 1 && <br/>}
                </span>
            ))}
        </>
    );
}


let testimonials: Testimonial[] = [
    new Testimonial("Parent Testimonial", "This course gives the children plenty of knowledge. Not only classroom education for children but also creating activities that are quite interesting. The teachers arranged the field trips for children and brought the children to the camp as well. Going to the camp gives the children confidence. The children have also made new friends. All the teachers are patient and friendly. I am also grateful to the teachers for taking care of our children. My son is very eager to join the R.ED project. As a parent,  I hope to continue  the project again in 2023.  It is a beneficial project for our children's future.", "Z, mother of our Student at R.ED"),
    new Testimonial("Volunteer’s Testimonial", "Volunteering with R.E.D. taught me patience and the significance of ensuring that no one is left behind in terms of education. Every child should receive a decent education, be taught appropriate discipline from an early age, and have good social skills. I'm appreciative of team R.ED for accepting me as a volunteer and allowing me to gain valuable experience interacting with children away from the clinic. Well done, team R.ED", "Dr Syazana Ali M.D \n" +
        "Family Medicine Residency (ICGP) \nMinistry of Health, Malaysia \nFounder of NobleDr"),
    new Testimonial("Student’s Testimonial ", "I like it because I feel comfortable and met a lot of friends. I learned about things I've never learn before and understand a lot of stuff. It feel incredible and I am grateful for it. The teachers will try to explain us until we understand it and they are kind and responsible as they help us with many things and take care of us. I really appreciate my time in R.ED. It's amazing..", "J, A student at R.ED"),
    new Testimonial("Teacher’s Testimonial", "It takes a lot of resilience for a refugee child to understand why their circumstances are different. R.ED can be a safe space for them to explore and find their voices. It helps when you have a group of people who believes in you as you grow and figure out your purpose in life despite the challenges.", "Aunger Aung, Volunteer Teacher at R.ED"),
]