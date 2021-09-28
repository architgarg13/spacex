import React, { Component } from 'react';
import '../App.css'
import img1 from '../img/logo.png'
import img2 from '../img/search.png'
import img3 from '../img/astronaut.png'
import img4 from '../img/rocket1.png'
import img5 from '../img/rocket2.png'
import img6 from '../img/rocket3.png'
import img7 from '../img/engines.png'
import img8 from '../img/bus.png'
class Main extends Component{
    render(){
        return(
            <div>
                <div className="header">
                    <nav >
                        <div className="brand">
                            <a href="#">
                                <img src={img1} alt="" />
                            </a>
                        </div>
                        <div className="nav-right">
                            <div className="nav-link">
                                <a href="#">Home</a>
                                <a href="#">About</a>
                                <a href="#">Updates</a>
                                <a href="#">Career</a>
                                <a href="#">Shop</a>
                            </div>
                            <div className="search">
                                <div>
                                    <img src={img2} alt="" />
                                    <input type="text" placeholder="Search" />                                </div>
                            </div>
                        </div>
                    </nav>
                    <section className="hero">
                        <div className="social">
                            <div className="animate__animated animate__bounceInLeft animate__slower "><a href=""><i class="fab fa-facebook-f"></i></a></div>
                            <div className="animate__animated animate__bounceInLeft animate__slower animate__delay-1s"><a href=""><i class="fab fa-tumblr"></i></a></div>
                            <div className="animate__animated animate__bounceInLeft animate__slower animate__delay-2s"><a href=""><i class="fab fa-instagram"></i></a></div>
                            <div className="animate__animated animate__bounceInLeft animate__slower animate__delay-3s"><a href=""><i class="fab fa-youtube"></i></a></div>
                        </div>
                        <div className="cta container">
                            <div className="left-section">
                            <h1>Space Exploration Technologies Corp. trading as SpaceX, is a private American aerospace
                        manufacturer headquartered California.</h1>
                    <button class="btn btn-primary">Explore Space</button>
                            </div>
                            <div className="right-section">
                            <img className="animate__animated animate__zoomInUp animate__delay-2s animate__slower" src={img3} alt="astronaut" />
                            </div>
                        </div>
                    </section>
                </div>
            <section className="strip" >
               <h3>Starlink Mission</h3>
               <button className="btn btn-primary">Join Now</button> </section> 
               <section className="rocket container" >
                   <div className="left-block">
                       <div className="block">
                       <h1 class="with-underline">FALCON9</h1>
                <p>Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe
                    transport of satellites and the Dragon spacecraft into orbit</p>
                       </div>
                       <div className="block dragon">
                       <h2 class="with-underline">DRAGON SPACECRAFT</h2>
                <p>Dragon carries cargo in the spacecraft’s pressurized capsule and unpressurized trunk, which can also
                    accommodate secondary payloads. In the future, Dragon will carry astronauts in the pressurized
                    capsule as well.</p>
                <button class="btn btn-secondary">LEARN MORE</button>
                       </div>
                       <div class="block composite">
                <h2 class="with-underline">COMPOSITE FAIRING</h2>
                <p>The payload fairing is for the delivery of satellites to destinations in low Earth orbit (LEO),
                    geosynchronous transfer orbit (GTO) and beyond.</p>
                <button class="btn btn-secondary">LEARN MORE</button>
            </div>
            <div class="block first-stage">
                <h2 class="with-underline">FIRST STAGE</h2>
                <p>Falcon 9’s first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing
                    liquid oxygen and rocket-grade kerosene (RP-1) propellant.</p>
                <button class="btn btn-secondary">LEARN MORE</button>
            </div>
            <div class="block capacity">
                <div>
                    <h4 class="with-underline">ENGINE</h4>
                    <h6>9</h6>
                </div>
                <div>
                    <h4 class="with-underline">BURNTIME</h4>
                    <h6>162 <small>SEC</small></h6>
                </div>
            </div>
            <div class="block capacity">
                <div>
                    <h4 class="with-underline">Thrust At Sea Level</h4>
                    <h6>7,607kN1</h6>
                </div>
            </div>
                   </div>
                   <div className="rocket-body">
                       <span className="first animate__animated"><img src={img4} alt="" /></span>
                       <span className="second animate__animated"><img src={img5} alt="" /></span>
                       <span className="third animate__animated"><img src={img6} alt="" /></span>
                   </div>
                   <div className="right-block">
                       <div className="floating-graphics"><img src={img8} alt="bus" /></div>
                   <div className="block payload">
                   <h2>PAYLOAD</h2>
                <p>Falcon 9 delivers payloads to space aboard the Dragon spacecraft or inside a composite fairing.</p>
                       </div>
                       <div class="block second-stage">
                <h2 class="with-underline">SECOND STAGE</h2>
                <p>The second stage, powered by a single Merlin vacuum engine, delivers Falcon 9’s payload to the
                    desired orbit. For maximum reliability, the second stage has redundant igniter systems.</p>
                <button class="btn btn-secondary">LEARN MORE</button>
            </div>
            <div class="block capacity">
                <div>
                    <h4 class="with-underline">ENGINE</h4>
                    <h6>9</h6>
                </div>
                <div>
                    <h4 class="with-underline">BURNTIME</h4>
                    <h6>162 <small>SEC</small></h6>
                </div>
            </div>
            <div class="block capacity single">
                <div>
                    <h4 class="with-underline">Thrust At Sea Level</h4>
                    <h6>7,607kN1</h6>
                </div>
            </div>
            <div class="block engines">
                <img src={img7} alt="" />
            </div>
            <div class="block marine">
                <h2>NINE MARLINE ENGINES</h2>
                <p>With its nine first-stage Merlin engines clustered together, Falcon 9 can sustain up to two engine
                    shutdowns during flight and still successfully complete its mission. Falcon 9 is the only launch
                    vehicle in its class with this key reliability feature.</p>
            </div>
                   </div>
               </section>
               <div className="footer">
               <div class="container">
            <div class="copyright">
                <div>
                    <a href="#"><img class="footer-logo" src={img1} alt="" /></a>
                </div>
                <span>&copy; 2020 AG Design</span>
            </div>
            <div>
                <h1>About us</h1>
                <ul>
                    <li><a href="#">WHO WE ARE</a></li>
                    <li><a href="#">CONTACT US</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">MISSIONS</a></li>
                    <li><a href="#">OTHER COMPANIES</a></li>
                </ul>
            </div>
            <div>
                <h1>Company</h1>
                <ul>
                    <li><a href="#">CAREERS</a></li>
                    <li><a href="#">LEGAL</a></li>
                    <li><a href="#">POLICY</a></li>
                    <li><a href="#">PRESS</a></li>
                    <li><a href="#">BLOG</a></li>
                </ul>
            </div>
            <div class="socials">
                <div class="footer-socials">
                    <h1>Socials</h1>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-tumblr"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div> 
               </div>
            </div>
        );
    }
}
export default Main;