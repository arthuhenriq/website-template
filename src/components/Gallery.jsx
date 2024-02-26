import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Gallery.module.css";

import foto1 from "../images/foto-1.png";
import foto2 from "../images/foto-2.jpg";
import foto3 from "../images/foto-3.jpg";
import foto4 from "../images/foto-4.jpg";
import foto5 from "../images/foto-5.png";
import foto6 from "../images/foto-6.jpg";
import foto7 from "../images/foto-7.png";
import foto8 from "../images/foto-8.jpg";
import foto9 from "../images/foto-9.jpg";
import foto10 from "../images/foto-10.jpg";

const images = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
];

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: "60px",
  };

  return (
    <div className={styles.carrousel}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
