import React from "react";
import './App.scss';
import OurStory from './sections/our-story';
import IntroSlider from './sliders/intro';


class App extends React.Component {


  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    return (
        <div id="wrapper" className="divided">

          <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
            <div className="content">
              <h1>Amy Stefani <br/>& David Panek</h1>
              <p className="major">We eloped!</p>
              <p>9.5.2020 / Santa Barbara</p>
              <ul className="actions stacked">
                <li><a href="#first"
                       className="button large wide smooth-scroll-middle">Our Story</a></li>
              </ul>
            </div>
            <div className="image-slider">
              <IntroSlider />
            </div>
          </section>

          <OurStory />

          <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
            <div className="content">
              <h2>Spotlight</h2>
              <p>This is also a <strong>Spotlight</strong> element, and it's here because this demo would look a bit empty with just one spotlight. Like all spotlights, you can customize its <span className="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-spotlight">details</a>).</p>
            </div>
            <div className="image">
              <img src="img/img-358.jpg" alt="" />
            </div>
          </section>


        </div>


        )
  }
}


export default App;
