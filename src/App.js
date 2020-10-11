import React from "react";
import './App.scss';
import IntroSlider from './components/sliders/intro';
import Ceremony from './sections/ceremony';
import Photos from './sections/photos';
import Footer from './sections/footer';
import { Link } from "react-scroll";


class App extends React.Component {


  render() {
    return (
        <div id="wrapper" className="divided">

          <section id="intro" className="banner style1 orient-left content-align-left image-position-right">
            <div className="content fadeInLeft">
              <h1>Amy Stefani <br/>& David Panek</h1>
              <p>September 5th, 2020<br/>
               Santa Barbara, California</p>
            </div>
            <div className="image-slider">
              <IntroSlider />
            </div>
            <Link to="ceremony"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="button-arrow"></Link>
          </section>
          <Ceremony />
          <Photos />
          <Footer />
        </div>
        )
  }
}


export default App;
