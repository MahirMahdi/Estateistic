import '../App.css';
import Navbar from './Navbar';
import topCoverHouse from '../assets/top-cover-house.png';
import location from '../assets/location.png'
import type from '../assets/home.png'
import price from '../assets/price.png'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
export default function TopCover(){
    ScrollReveal({
        reset:true,
        distance:"60px",
        duration:2500,
        delay:400
    });

    useEffect(()=>{
        ScrollReveal().reveal('.headline-tagline',{delay:500, origin:'left'});
        ScrollReveal().reveal('.top-cover-house',{delay:500, origin:'right'});
        ScrollReveal().reveal('.search-bar',{delay:500, origin:'top'});
        ScrollReveal().reveal('.tagline-mobile',{delay:500, origin:'left'});
        ScrollReveal().reveal('.top-cover-info-mobile',{delay:500, origin:'right'});
    },[]);
    return(
        <div className="top-view">
            <div className="top-cover">
                <Navbar/>
                <div className="top-cover-content">
                    <div className='headline-tagline'>
                        <p className="headline">LET'S FIND YOUR DREAM HOUSE</p>
                        <p className="tagline">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="top-cover-info">
                            <div>
                                <p className="info-number">2000+</p>
                                <p className="info-text">Property<br/>Ready</p>
                            </div>
                            <div>
                                <p className="info-number">750+</p>
                                <p className="info-text">Happy<br/>Customers</p>
                            </div>
                            <div>
                                <p className="info-number">500+</p>
                                <p className="info-text">Reviews</p>
                            </div>
                        </div>
                    </div>
                    <img className="top-cover-house" src={topCoverHouse}/>
                    <p className="tagline-mobile">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="top-cover-info-mobile">
                        <div>
                            <p className="info-number">2000+</p>
                            <p className="info-text">Property<br/>Ready</p>
                        </div>
                        <div>
                            <p className="info-number">750+</p>
                            <p className="info-text">Happy<br/>Customers</p>
                        </div>
                        <div>
                            <p className="info-number">500+</p>
                            <p className="info-text">Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-bar">
                <div className="search-info">
                    <img className="info-logo" src={location}/>
                    <p className="searh-info-text"><span className="search-info-header">Location</span><br/>New York</p>
                </div>
                <div className="search-info">
                    <img className="info-logo" src={price}/>
                    <p className="searh-info-text"><span className="search-info-header">Price</span><br/>$5000-10000</p>
                </div>
                <div className="search-info">
                    <img className="info-logo" src={type}/>
                    <p className="searh-info-text"><span className="search-info-header">Type</span><br/>Buy/Rent</p>
                </div>
                <button className="search-button"></button>
            </div>
        </div>
    )
};