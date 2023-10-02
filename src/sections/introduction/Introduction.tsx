import './Introduction.css'
import logo from '../../logo.png'
import girls from './girls.jpg'
import {DonateButton} from "../../components/Buttons";
import React from "react";

interface Props {
    activeSection: string
}

export const Introduction: React.FC<Props> = ({activeSection}) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    
    
    const scrollTo = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({behavior: 'smooth'})
        }
    }
    return <section id='intro'>
        <div className="content">
            <div className={`intro-header-container ${isModalOpen ? 'modal-open' : ''}`}>
                <header className="intro-header">
                    <img src={logo} alt="Logo"/>
                    {!isModalOpen ?
                        <svg className="lg:hidden" onClick={() => setIsModalOpen(true)} width="22" height="14"
                             viewBox="0 0 22 14" fill="none">
                            <path
                                d="M0.599976 1.40005C0.599976 1.06868 0.890994 0.800049 1.24998 0.800049H20.75C21.1089 0.800049 21.4 1.06868 21.4 1.40005C21.4 1.73142 21.1089 2.00005 20.75 2.00005H1.24998C0.890994 2.00005 0.599976 1.73142 0.599976 1.40005ZM0.599976 7.40005C0.599976 7.06868 0.890994 6.80005 1.24998 6.80005H20.75C21.1089 6.80005 21.4 7.06868 21.4 7.40005C21.4 7.73142 21.1089 8.00005 20.75 8.00005H1.24998C0.890994 8.00005 0.599976 7.73142 0.599976 7.40005ZM1.24998 12.8C0.890994 12.8 0.599976 13.0687 0.599976 13.4C0.599976 13.7314 0.890994 14 1.24998 14H20.75C21.1089 14 21.4 13.7314 21.4 13.4C21.4 13.0687 21.1089 12.8 20.75 12.8H1.24998Z"
                                fill="#212121"/>
                        </svg>
                        :
                        <svg className="lg:hidden" onClick={() => setIsModalOpen(true)} width="14" height="14"
                             viewBox="0 0 14 14" fill="none">
                            <path
                                d="M0.756995 1.00719C1.00688 0.74707 1.41461 0.725254 1.70842 0.942033L1.78555 1.00704L6.95755 5.97394L11.731 1.00499C12.0036 0.721229 12.4641 0.721265 12.7595 1.00507C13.0303 1.26524 13.0684 1.67358 12.863 1.95837L12.8009 2.03277L8.02743 7.00173L13.1992 11.9674C13.4947 12.2511 13.5134 12.7113 13.2408 12.9951C12.9909 13.2552 12.5832 13.277 12.2894 13.0602L12.2122 12.9952L7.04025 8.02935L2.26952 12.9955C1.99691 13.2793 1.53641 13.2792 1.24098 12.9954C0.970161 12.7352 0.93203 12.3269 1.13751 12.0421L1.19963 11.9677L5.97037 7.00156L0.798583 2.03486C0.50308 1.75112 0.484401 1.29095 0.756995 1.00719Z"
                                fill="white"/>
                        </svg>
                    }
                    
                    {isModalOpen &&
                        <div className="nav-modal-wrapper" onClick={() => setIsModalOpen(false)}>
                            <div><Nav activeSection={activeSection} scrollTo={scrollTo} /></div>
                        </div>
                    }
                    <span className="hidden lg:block"><Nav activeSection={activeSection} scrollTo={scrollTo} /></span>
                    <span className="hidden lg:block"><DonateButton/></span>
                </header>
            </div>
            <div className="intro-content">
                <div className="left">
                    <h2>Reimagine
                        Education</h2>
                    <p>An alternative education platform for marginalized communities in Malaysia</p>
                    <DonateButton/>
                </div>
                <div className="right">
                    <svg className="right-bg" viewBox="0 0 497 416" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M497 268.633V357.245C476.01 375.582 409.335 426.872 333.072 413.932C240.643 398.249 248.458 314.99 274.5 253.777C285.468 227.996 326.64 201.591 367.644 175.295C423.996 139.155 480.03 103.22 456.908 69.3847C431.976 32.9025 332.476 120.028 246.526 195.288C194.76 240.615 147.91 281.638 125.226 288.762C64.8761 307.715 0.26813 134.492 0.268433 93.2679C0.268735 52.0434 28.355 24.4154 48.0971 40.6676C63.3418 53.2173 73.7408 81.7785 84.172 110.428C97.215 146.251 110.308 182.212 132.988 187.182C152.752 191.513 210.327 149.109 272.138 103.585C337.98 55.0934 408.627 3.06168 443.501 0.205817C445.187 0.0676945 446.844 0 448.47 0C470.381 0 486.757 12.2934 497 30.1905V131.042C493.639 136.929 489.585 142.326 484.82 147.028C445.26 186.06 427.745 195.621 379.974 221.697C373.013 225.497 365.409 229.648 357 234.292C290.891 270.803 333.16 350.953 388.5 350.953C417.345 350.953 450.928 315.9 476.472 289.238C484.159 281.215 491.117 273.953 497 268.633Z"
                              fill="#FF839F"/>
                    </svg>
                    <div className="right-top">
                        <svg>
                            <clipPath id="intro-girls-clip-path" clipPathUnits="objectBoundingBox">
                                <path
                                    d="M0.984,0.354 C0.888,0.109,0.712,-0.076,0.452,0.036 C0.192,0.148,0.202,0.227,0.096,0.307 C-0.01,0.387,-0.004,0.626,0.009,0.679 C0.023,0.732,0.096,0.901,0.303,0.967 C0.511,1,0.72,0.996,0.793,0.953 C0.865,0.91,0.919,0.855,0.951,0.787 C0.984,0.719,1,0.468,0.984,0.354"></path>
                            </clipPath>
                        </svg>
                        <img src={girls} alt="Girls posing for the camera"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

interface NavProps {
    activeSection: string;
    scrollTo: (sectionId: string) => void;
}

const Nav: React.FC<NavProps> = ({activeSection, scrollTo}) => (
    <nav>
        <button
            className={activeSection === 'intro' ? 'active' : ''}
            onClick={() => scrollTo('intro')}>
            Introduction
        </button>
        <button
            className={activeSection === 'mission' ? 'active' : ''}
            onClick={() => scrollTo('mission')}>
            Mission
        </button>
        <button
            className={activeSection === 'what-we-do' ? 'active' : ''}
            onClick={() => scrollTo('what-we-do')}>
            What We Do
        </button>
        <button
            className={activeSection === 'testimonial' ? 'active' : ''}
            onClick={() => scrollTo('team')}>
            Testimonials
        </button>
        <button
            className={activeSection === 'footer' ? 'active' : ''}
            onClick={() => scrollTo('footer')}>
            Contact
        </button>
    </nav>
);
