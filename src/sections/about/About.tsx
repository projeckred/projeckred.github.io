import './About.css'
import aboutRed from './about_red.png'

export const About = function () {
    return <section id="about">
        <div className="content">
            <div><img src={aboutRed} alt="About Red"/></div>
            <p>
                R.ED stands for Reimagine Education. And we are reimagining the type of education that refugee children
                in Malaysia need in order to thrive through the challenges and uncertainties that awaits them.
                <br/>
                <br/>
                We aim to provide a safe space of learning in character development and exposure that will empower every
                child to thrive and be the best versions of themselves no matter where they may be.
            </p>
        </div>
    </section>
}