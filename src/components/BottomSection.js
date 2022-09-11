import Review from './Review';
import { reviewData } from '../data/Data';
import bottomCoverImage from '../assets/bottomcoverimage.png';
import Footer from './Footer';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

export default function BottomSection(){
    ScrollReveal({
        reset:true,
        distance:"60px",
        duration:2500,
        delay:400
    });

    useEffect(()=>{
        ScrollReveal().reveal('.user-reviews',{delay:500, origin:'top'});
        ScrollReveal().reveal('.reviews',{delay:550, origin:'right'});
        ScrollReveal().reveal('.bottom-cover-header',{delay:500, origin:'top'});
        ScrollReveal().reveal('.explore',{delay:550, origin:'left'});
        ScrollReveal().reveal('.explore-button',{delay:550, origin:'left'});
        ScrollReveal().reveal('.content-image',{delay:600, origin:'right'});
    },[]);
    return(
        <div className="bottom-section">
            <p className='user-reviews'>User Reviews</p>
            <div className="reviews">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div className="carousel-item active">
                            <Review img={reviewData[0].img} author={reviewData[0].author} content={reviewData[0].content}/>
                        </div>
                        {reviewData.slice(1,reviewData.length+1).map((review)=>(
                            <div className="carousel-item">
                                <Review img={review.img} author={review.author} content={review.content}/>
                            </div>
                        ))}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="bottom-cover">
                <div className="bottom-cover-content">
                    <div className="content-text">
                        <p className="bottom-cover-header">Are you Ready to find your dream house?</p>
                        <button className="button explore">Explore</button>
                    </div>
                    <img className="content-image" src={bottomCoverImage}/>
                    <button className="explore-button">Explore</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
};