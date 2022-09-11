import logo from '../assets/logo-white.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

export default function Footer(){
    ScrollReveal({
        reset:true,
        distance:"60px",
        duration:2500,
        delay:400
    });

    useEffect(()=>{
        ScrollReveal().reveal('.footer-details',{delay:550, origin:'left'});
        ScrollReveal().reveal('.services-section,company-section',{delay:600, origin:'right'});
    },[]);
    return(
        <div className="footer">
            <div className="footer-details">
                <div className="about-section">
                    <div className="logo-name">
                        <img src={logo} className="footer-logo"/>
                        <p className="footer-title">Estateistic</p>
                    </div>
                    <p className="address">9502 S. Cactus Ave.<br/>Fountain Valley, CA 92708</p>
                    <div className="socials">
                        <img className="social-logo" src={facebook}/>
                        <img className="social-logo" src={google}/>
                        <img className="social-logo" src={twitter}/>
                        <img className="social-logo" src={linkedin}/>
                    </div>
                </div>
                <div className="service-company">
                    <div className="services-section">
                        <p className="services">Services</p>
                        <p className="service">Consultants</p>
                        <p className="service">Support Center</p>
                        <p className="service">EMI</p>
                        <p className="service">Crypto Payment</p>
                    </div>
                    <div className="company-section">
                        <p className="company">Company</p>
                        <p className="service">How we work?</p>
                        <p className="service">Features</p>
                        <p className="service">Location</p>
                        <p className="service">Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}