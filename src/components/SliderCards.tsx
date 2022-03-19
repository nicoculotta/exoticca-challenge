import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderCards = ({ children }:any ) => {

  const settings = {
    className: "left",
    infinite: false,
    centerPadding: "20px",
    slidesToShow: 5,
    swipeToSlide: true,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}

export default SliderCards