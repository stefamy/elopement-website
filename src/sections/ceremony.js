import React from "react";
import CeremonySlider from "../components/sliders/ceremony";
import { Link } from "react-scroll";


const Ceremony = () =>
  <section id="ceremony" className="wrapper spotlight style1 orient-right content-align-left image-position-left">
    <div className="content">
      <h2>We Tied the Knot!</h2>
      <p>We're happy to announce that we exchanged marriage vows at the Santa Barbara Courthouse on September 5th, 2020 in an intimate ceremony officiated by David's father, Bill.</p>
      <p>Due to safety concerns regarding the coronavirus pandemic, we chose to elope with a few family members present as witnesses (AKA, a "micro-wedding").
        Though we weren't able to share the occasion with all of our friends and family, please know that you were in our hearts.
        We're looking forward to many more opportunities to celebrate in the years to come.</p>
      <p>For now, stay safe! xx</p>
      <Link to="photos"
            spy={true}
            smooth={true}
            duration={500}
            className="button-arrow"></Link>
    </div>
    <div className="image-slider">
      <CeremonySlider />
    </div>
  </section>


export default Ceremony;
