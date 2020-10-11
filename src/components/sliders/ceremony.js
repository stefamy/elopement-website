import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  "./img/gallery/story/img-134.jpg",
  "./img/gallery/story/img-135.jpg",
  "./img/gallery/story/img-136.jpg",
  "./img/gallery/story/img-137.jpg",
  "./img/gallery/story/img-140.jpg",
  "./img/gallery/story/img-153.jpg",
  "./img/gallery/story/img-157.jpg",
  "./img/gallery/story/img-132.jpg"
];

const CeremonySlider = () => {

  return (
      <div className="slide-container">
        <Fade autoplay={true} duration={3000} arrows={false} transitionDuration={1000} ease={'ease-out'} infinite={true}>
          { images && images.map((image, index) =>
          <div key={index} className="each-fade">
            <div style={{backgroundImage: 'url(' + image + ')'}} className="bg-slide each-fade">
              <img alt="" src={image}/>
            </div>
          </div>
          )}
        </Fade>
      </div>
  )
}

export default CeremonySlider;
