import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <main> 
        <h1>JOUEZ À VOS JEUX PRÉFÉRÉS</h1>
        <p>Avec de nouvelles parties à chaque seconde, vous êtes certain d'y trouver votre compte.</p>
 <div className="slider-container ">
      <Slider {...settings}>
        <div>
            <picture>
            <img src="/accordion-image.jpg" height={400} width={500} alt=""/>
            </picture>
         
        </div>
        <div>
        <picture>
            <img src="/accordion-image.jpg" height={400} width={500} alt=""/>
            </picture>
        </div>
        <div>
        <picture>
            <img src="/accordion-image.jpg" height={400} width={500} alt=""/>
            </picture>
        </div>
        <div>
        <picture>
            <img src="/accordion-image.jpg" height={400} width={500} alt=""/>
            </picture>
        </div>
        <div>
        <picture>
            <img src="/accordion-image.jpg" height={400} width={500} alt=""/>
            </picture>
        </div>
        <div>
        <picture>
            <img src="/accordion-image.jpg" height={400} width={500} alt=""/>
            </picture>
        </div>
      </Slider>
    </div>

    </main>
   
  );
}

export default CenterMode;
