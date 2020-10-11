import {Fade} from "react-slideshow-image";
import React from "react";

const images = {
   'firstLook': [
    "./img/gallery/first-look/img-29.jpg",
    "./img/gallery/first-look/img-2.jpg",
    "./img/gallery/first-look/img-14.jpg",
    "./img/gallery/first-look/img-31.jpg",
    "./img/gallery/first-look/img-32.jpg",
    "./img/gallery/first-look/img-35.jpg",
    "./img/gallery/first-look/img-41.jpg",
    "./img/gallery/first-look/img-49.jpg",
    "./img/gallery/first-look/img-15.jpg",
    "./img/gallery/first-look/img-54.jpg",
    "./img/gallery/first-look/img-55.jpg",
    "./img/gallery/first-look/img-58.jpg",
    "./img/gallery/first-look/img-59.jpg",
    "./img/gallery/first-look/img-63.jpg",
    "./img/gallery/first-look/img-116.jpg",
    "./img/gallery/first-look/img-94.jpg"
  ],

  'ceremony': [
    "./img/gallery/ceremony/img-150.jpg",
    "./img/gallery/ceremony/img-153.jpg",
    "./img/gallery/ceremony/img-154.jpg",
    "./img/gallery/ceremony/img-1951.jpg",
    "./img/gallery/ceremony/img-156.jpg",
    "./img/gallery/ceremony/img-158.jpg",
    "./img/gallery/ceremony/img-160.jpg",
    "./img/gallery/ceremony/img-173.jpg",
    "./img/gallery/ceremony/img-176.jpg",
    "./img/gallery/ceremony/img-178.jpg",
    "./img/gallery/ceremony/img-183.jpg",
    "./img/gallery/ceremony/img-184.jpg",
    "./img/gallery/ceremony/img-193.jpg",
    "./img/gallery/ceremony/img-196.jpg",
    "./img/gallery/ceremony/img-198.jpg",
    "./img/gallery/ceremony/img-199.jpg",
    "./img/gallery/ceremony/img-201.jpg",
    "./img/gallery/ceremony/img-208.jpg",
    "./img/gallery/ceremony/img-209.jpg",
    "./img/gallery/ceremony/img-214.jpg",
    "./img/gallery/ceremony/img-215.jpg",
    "./img/gallery/ceremony/img-217.jpg",
    "./img/gallery/ceremony/img-219.jpg",
    "./img/gallery/ceremony/img-220.jpg",
    "./img/gallery/ceremony/img-222.jpg",
    "./img/gallery/ceremony/img-225.jpg",
    "./img/gallery/ceremony/img-228.jpg",
    "./img/gallery/ceremony/img-227.jpg",
    "./img/gallery/ceremony/img-232.jpg",
    "./img/gallery/ceremony/img-233.jpg",
    "./img/gallery/ceremony/img-239.jpg",
    "./img/gallery/ceremony/img-241.jpg",
    "./img/gallery/ceremony/img-242.jpg",
    "./img/gallery/ceremony/img-243.jpg"
  ],

  'portraits': [
    "./img/gallery/courthouse-portraits/img-282.jpg",
    "./img/gallery/courthouse-portraits/img-272.jpg",
    "./img/gallery/courthouse-portraits/img-268.jpg",
    "./img/gallery/courthouse-portraits/img-253.jpg",
    "./img/gallery/courthouse-portraits/img-248.jpg",
    "./img/gallery/courthouse-portraits/img-260.jpg",
    "./img/gallery/courthouse-portraits/img-262.jpg",
    "./img/gallery/courthouse-portraits/img-310.jpg",
    "./img/gallery/courthouse-portraits/img-297.jpg",
    "./img/gallery/courthouse-portraits/img-277.jpg",
    "./img/gallery/courthouse-portraits/img-279.jpg",
    "./img/gallery/courthouse-portraits/img-149.jpg",
    "./img/gallery/courthouse-portraits/img-274.jpg",
    "./img/gallery/courthouse-portraits/img-145.jpg",
    "./img/gallery/courthouse-portraits/img-317.jpg",
    "./img/gallery/courthouse-portraits/img-320.jpg",
    "./img/gallery/courthouse-portraits/img-356.jpg",
    "./img/gallery/courthouse-portraits/img-342.jpg",
    "./img/gallery/courthouse-portraits/img-337.jpg",
    "./img/gallery/courthouse-portraits/img-338.jpg",
    "./img/gallery/courthouse-portraits/img-339.jpg",
    "./img/gallery/courthouse-portraits/img-360.jpg"
  ],

  'dinner': [
    "./img/gallery/dinner-weekend/img-0026.jpg",
    "./img/gallery/dinner-weekend/img-0027.jpg",
    "./img/gallery/dinner-weekend/img-0028.jpg",
    "./img/gallery/dinner-weekend/img-0145.jpg",
    "./img/gallery/dinner-weekend/img-0180.jpg",
    "./img/gallery/dinner-weekend/img-0029.jpg",
    "./img/gallery/dinner-weekend/img-0032.jpg",
    "./img/gallery/dinner-weekend/img-0192.jpg",
    "./img/gallery/dinner-weekend/img-0183.jpg"
  ]
}


const Gallery = ({which}) => {
  return (
        <div className="slide-container">
        <Fade autoplay={false} transitionDuration={300} ease={'linear'} infinite={true}>
          { images[which] && images[which].map((image, index) =>
              <div key={index} className="each-fade">
                <div className="image-container lightbox">
                  <img alt="" src={image}/>
                </div>
              </div>
          )}
        </Fade>
      </div>
  )
}

export default Gallery;
