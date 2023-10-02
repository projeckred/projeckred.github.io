import './AsSeen.css'
import astro from './astro.png'
import fmt from './fmt.png'
import afkl from './afkl.png'
import tmi from './tmi.png'

export const AsSeen = function () {
    let sponsors = [astro, fmt, afkl, tmi]
    return <section id="as-seen">
       <div className="content">
           <p>Trusted and supported by the following companies as seen on the logos</p>
           <div className="sponsors">
               {sponsors.map(function (i) {
                   return <img src={i} alt="" key={i}/>;
               })}
           </div>
       </div>
    </section>
}