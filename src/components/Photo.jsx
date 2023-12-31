import React from "react";
import image1 from "../assets/images/1 (1).jpg";
import image2 from "../assets/images/1 (2).jpg";
import image3 from "../assets/images/1 (3).jpg";
import image4 from "../assets/images/1 (4).jpg";
import image5 from "../assets/images/1 (5).jpg";
import image6 from "../assets/images/1 (6).jpg";
import image7 from "../assets/images/1 (7).jpg";
import image8 from "../assets/images/1 (8).jpg";
import "./Photo.css";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const Photo = () => {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <>
      <h1 className="text-center mt-5 mb-3">Photo Gallery</h1>
      <div className="gallery">
        <div className="main">
          <LightGallery
            onInit={onInit}
            speed={500}
            onBeforeSlide={onBeforeSlide}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a href={image1} className="col">
              <img src={image1} className="gallery-item" alt="gallery" />
            </a>

            <a href={image2} className="col">
              <img src={image2} className="gallery-item" alt="gallery" />
            </a>

            <a href={image3} className="col">
              <img src={image3} className="gallery-item" alt="gallery" />
            </a>

            <a href={image4} className="col">
              <img src={image4} className="gallery-item" alt="gallery" />
            </a>

            <a href={image5} className="col">
              <img src={image5} className="gallery-item" alt="gallery" />
            </a>

            <a href={image6} className="col">
              <img src={image6} className="gallery-item" alt="gallery" />
            </a>

            <a href={image7} className="col">
              <img src={image7} className="gallery-item" alt="gallery" />
            </a>

            <a href={image8} className="col">
              <img src={image8} className="gallery-item" alt="gallery" />
            </a>
          </LightGallery>
        </div>
      </div>
    </>
  );
};

export default Photo;
