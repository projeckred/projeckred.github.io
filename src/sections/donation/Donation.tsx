import './Dontation.css'
import {DonateButton} from "../../components/Buttons";

export const Donation = function () {
    return <section id="donation">
       <div className="content">
           <header>Reimagine <span className="text-greenHaze">Education</span> with Us!</header>
           <p>Join us in reimagining education, as we believe that every child deserves a chance to learn and grow. Together, let's stay connected and make a difference in the lives of refugee children through R.ED.</p>
           <p>Support our mission and help create a brighter future for them</p>
           <DonateButton text="Get Involved Today!"/>
       </div>
    </section>
}
