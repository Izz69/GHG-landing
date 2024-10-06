import React from 'react';
import videosrc from '../assests/assests/video.mp4'; // Ensure the path is correct
import "../styles/home.css"; // Your CSS file
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';

export default function Home() {
    const slidesData = [
        {
            message: "Engage in mapping and analyzing human-caused and natural greenhouse gas emissions to better understand their impact on local and global climate dynamics.",
            buttontext: "Contact Us !",
            imgSrc: "https://th.bing.com/th/id/OIP.uyjA7cNPKvmV_oLTyTkl0QHaE8?rs=1&pid=ImgDetMain",
            altText: "First Slide",
        },
        {
            message: "The past decade has been the warmest on record, with rising temperatures leading to more frequent and severe weather events, such as hurricanes, droughts, and wildfires, affecting food and water security worldwide.",
            buttontext: "Join Us !",
            imgSrc: "https://th.bing.com/th/id/OIP.uyjA7cNPKvmV_oLTyTkl0QHaE8?rs=1&pid=ImgDetMain",
            altText: "Second Slide",
        },
        {
            message: "The primary greenhouse gases are carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), and fluorinated gases. Among these, CO2 is the most significant contributor to climate change, accounting for about 76% of total greenhouse gas emissions.",
            buttontext: "Learn More!",
            imgSrc: "https://th.bing.com/th/id/OIP.uyjA7cNPKvmV_oLTyTkl0QHaE8?rs=1&pid=ImgDetMain",
            altText: "Third Slide",
        },



        {
          message: "Atmospheric CO2 levels have risen by over 50% since the start of the Industrial Revolution, from about 280 parts per million (ppm) to over 415 ppm today.",
          buttontext: "Join Us !",
          imgSrc: "https://th.bing.com/th/id/OIP.uyjA7cNPKvmV_oLTyTkl0QHaE8?rs=1&pid=ImgDetMain",
          altText: "Second Slide",
      },
      {
          message: "The oceans absorb about 30% of the CO2 emitted by human activities, leading to ocean acidification, which threatens marine ecosystems and the livelihoods of millions who depend on fishing and tourism.",
          buttontext: "Learn More!",
          imgSrc: "https://th.bing.com/th/id/OIP.uyjA7cNPKvmV_oLTyTkl0QHaE8?rs=1&pid=ImgDetMain",
          altText: "Third Slide",
      },
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true
    };

    return (
        <>
            <div className="video-animation">
                <video
                    src={videosrc}
                    autoPlay
                    loop
                    muted
                ></video>
            </div>
            <div className="page1">
                <div className="slider">
                    <Slider {...settings}>
                        {slidesData.map((slide, index) => (
                            <div key={index} className="slide">
                                <img src={slide.imgSrc} alt={slide.altText} className="slide-image" />
                                <h5>
                                
                                <span class="bigger-text">Greenhouse  </span>
                                <span class="smaller-text">Gases in</span>
                                <span class="bigger-text"> Surroundings!</span>
                            </h5>
                                <div className="slide-content">
                                    <p>{slide.message}</p>
                                    <button>{slide.buttontext}</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}
