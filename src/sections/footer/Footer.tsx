import './Footer.css'
import logo from '../../logo.png'
import {DonateButton} from "../../components/Buttons";

export const Footer = function () {
    let year = new Date().getFullYear();
    return <section id="footer">
        <div className="content">
            <div className="container">
                <div className="left">
                    <h4>Reimagine Education <span className="text-carnation">FOR THEM</span><br/>
                        Reimagine Education <span className="text-dodgerBlue">WITH US</span></h4>
                    <p>R.ED is registered as a non profit organisation in Malaysia under PERTUBUHAN PENGEMBARAAN BILIK DARJAH (PPM-013-10-23082022)</p>
                    <span className="hidden md:block"><DonateButton/></span>
                </div>
                <div className="right">
                    <p>Pudu, Kuala Lumpur, Malaysia</p>
                    <p>helloprojectred@gmail.com</p>
                    <p>@projectr.ed</p>
                    <img src={logo} alt="Logo"/>
                    <div className="motto"><span className="font-semibold">R</span>EIMAGINE <span className="font-semibold">ED</span>UCATION</div>
                </div>
            </div>
            <p className="copyright">&copy; {year}, R.ED. All Rights Reserved.</p>
        </div>
    
    </section>
}