import '../App.css';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData, popularData } from '../data/Data';
import Card from './Card';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';


function srcset(image ,size, rows = 1, cols = 1) {
    return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function MidSection(){
    ScrollReveal({
        reset:true,
        distance:"60px",
        duration:2500,
        delay:400
    });

    useEffect(()=>{
        ScrollReveal().reveal('.mid-section-header,.mid-section-tagline',{delay:500, origin:'bottom'});
        ScrollReveal().reveal('.image-section',{delay:500, origin:'left'});
        ScrollReveal().reveal('.description-1',{delay:500, origin:'right'});
        ScrollReveal().reveal('.description-2',{delay:550, origin:'right'});
        ScrollReveal().reveal('.description-3',{delay:600, origin:'right'});
        ScrollReveal().reveal('.popular-header',{delay:500, origin:'left'});
        ScrollReveal().reveal('.popular-residences',{delay:550, origin:'right'});
    },[]);
    return(
        <div className="mid-section">
            <p className="mid-section-header">WHY OUR COMPANY?</p>
            <p className="mid-section-tagline">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="image-section">
                <ImageList
                    className="image-list"
                    variant="quilted"
                    cols={4}
                    rowHeight={110}
                    >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 110, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
                <div className="description-section">
                    <div className="description-1">
                        <p className="description-header"><button className="info-button"></button>20 YEARS + EXPERIENCE</p>
                        <p className="description-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="description-2">
                        <p className="description-header"><button className="info-button"></button>QUALITY ASSURANCE</p>
                        <p className="description-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="description-3">
                        <p className="description-header"><button className="info-button"></button>PROPERTY INSURANCE</p>
                        <p className="description-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div className="popular">
                <p className="popular-header">Popular Residences</p>
                <div className="popular-residences">
                    {popularData.map((data)=>(
                        <Card img={data.img} name={data.name} price={data.price} description={data.description}/>
                    ))}
                </div>
            </div>
        </div>
    )
};