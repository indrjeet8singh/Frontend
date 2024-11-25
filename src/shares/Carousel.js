import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  
  const settings = {
    dots: true,              
    infinite: true,          
    speed: 500,              
    slidesToShow: 3,         
    slidesToScroll: 1,       
    autoplay: true,          
    autoplaySpeed: 3000,     
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="carousel">
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1710845987606_G2Dtn.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1711527206968_sfwcx.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1722246133302_eDFFv.png" alt="Slide 3" />
      </div>
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1722246098532_F4ewx.png" alt="Slide 4" />
      </div>
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1711527197852_OKns3.jpg" alt="Slide 5" />
      </div>
      <div>
        <img src="https://cdn.vegease.in/home-page/LIVE/1710845987606_G2Dtn.jpg" alt="Slide 6" />
      </div>
    </Slider>
  );
};

export default Carousel;
