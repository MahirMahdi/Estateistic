import logo from '../assets/logo.png';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
export default function Navbar(){
    function handleClick(){
        const navbar = document.querySelector('.navbar');
        const navToggle = document.querySelector('.mobile-nav-toggle');
        const visibility = navbar.getAttribute('data-visible');

        if(visibility === "false"){
            navbar.setAttribute('data-visible', true)
            navToggle.setAttribute('aria-expanded',true)
        }else{
            navbar.setAttribute('data-visible', false)
            navToggle.setAttribute('aria-expanded',false)
        };
    };

    ScrollReveal({
        reset:true,
        distance:"60px",
        duration:2500,
        delay:400
    });

    useEffect(()=>{
        ScrollReveal().reveal('.primary-header',{delay:500, origin:'left'});
        ScrollReveal().reveal('.mobile-nav-toggle',{delay:500, origin:'left'});
        ScrollReveal().reveal('.browse, .estateistic',{delay:500, origin:'right'});
        ScrollReveal().reveal('.nav-item, .button-signup',{delay:500, origin:'left'});
    },[]);
    return(
        <div className="header">
            <div className="primary-header">
                <img src={logo} className="logo"/>
                <p className="title">Estateistic</p>
            </div>
            <button onClick={handleClick} className="mobile-nav-toggle" aria-controls="navbar" aria-expanded="false"></button>
            <nav>
                <ul className="navbar" data-visible="false">
                    <div className="nav-header">
                        <p className="browse">Browse</p>
                        <p className="estateistic">Estateistic</p>
                    </div>
                    <li className="nav-item">Buy</li>
                    <li className="nav-item">Rent</li>
                    <li className="nav-item">Sell</li>
                    <li className="nav-item signup">Signup</li>
                    <button className="button button-signup">Signup</button>
                </ul>
            </nav>
        </div>
    )
};
