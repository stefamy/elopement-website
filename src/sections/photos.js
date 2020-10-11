import React from "react";
import Gallery from "../components/sliders/gallery";
import {Link} from "react-scroll/modules";

class Photos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      galleryIsOpen: false,
      whichGallery: ''
    };
  }

  openGallery(id) {
    this.setState({
      galleryIsOpen: true,
      gallery: id
    });
  }

  closeGallery() {
    this.setState({
      galleryIsOpen: false,
      gallery: ''
    });
  }

  render() {
    return (
    <section id="photos" className="wrapper spotlight style1 align-center">
      <div className="inner">
        <h2 className="text-center">Photo Galleries</h2>
        <div className="items style1 big">
          <section>
            <a onClick={() => this.openGallery('firstLook')}><div className="bg-image-link" id="firstLook"></div><span>First Look</span></a>
          </section>
          <section>
            <a onClick={() => this.openGallery('ceremony')}><div className="bg-image-link" id="ceremony"></div><span>Ceremony</span></a>
          </section>
          <section>
            <a onClick={() => this.openGallery('portraits')}><div className="bg-image-link" id="portraits"></div><span>Courthouse Portraits</span></a>
          </section>
          <section>
            <a onClick={() => this.openGallery('dinner')}><div className="bg-image-link" id="dinner"></div><span>Drinks, Dinner, & Cake</span></a>
          </section>
        </div>
        <Link to="footer"
              spy={true}
              smooth={true}
              duration={500}
              className="button-arrow"></Link>
      </div>
      {this.state && this.state.galleryIsOpen && <div className="slideshow-modal">
        <button className="close" onClick={() => this.closeGallery()}><i className="fa fa-times" /></button>
        <Gallery which={this.state.gallery}/>
      </div> }
    </section> )
  }
}

export default Photos;
