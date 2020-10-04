import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  "./img/img-128.jpg",
  "./img/img-130.jpg",
  "./img/img-131.jpg"
];

const IntroSlider = () => {

  return (
      <div className="slide-container">
        <Fade autoplay={true} duration={3000} arrows={false} transitionDuration={1000} ease={'ease-out'} infinite={true}>
          <div className="each-fade">
            <div className="image-container">
              <img src={images[0]}/>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={images[1]}/>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={images[2]}/>
            </div>
          </div>
        </Fade>
      </div>
  )
}

export default IntroSlider;
