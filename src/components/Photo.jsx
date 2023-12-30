import React from "react";
import image1 from "../assets/images/1 (1).jpg";
import image2 from "../assets/images/1 (2).jpg";
import image3 from "../assets/images/1 (3).jpg";
import image4 from "../assets/images/1 (4).jpg";
import image5 from "../assets/images/1 (5).jpg";
import image6 from "../assets/images/1 (6).jpg";
import image7 from "../assets/images/1 (7).jpg";
import image8 from "../assets/images/1 (8).jpg";
import "./Photo.css"

const Photo = () => {
  return (
    <>
      <section class="gallery min-vh-100">
        <h1 class="text-center mt-5 mb-3">Photo Gallery</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2">
          <div class="col">
            <a href={image1} data-lightbox="models">
              <img src={image1} class="gallery-item" alt="gallery" />
            </a>
          </div>
          <div class="col">
            <a href={image2} data-lightbox="models">
              <img src={image2} class="gallery-item" alt="gallery" />
            </a>
          </div>
          <div class="col">
            <a href={image3} data-lightbox="models">
              <img src={image3} class="gallery-item" alt="gallery" />
            </a>
          </div>
          <div class="col">
            <a href={image4} data-lightbox="models">
              <img src={image4} class="gallery-item" alt="gallery" />
            </a>
          </div>
          <div class="col">
            <a href={image5} data-lightbox="models">
              <img src={image5} class="gallery-item" alt="gallery" />
            </a>
          </div>
          <div class="col">
            <a href={image6} data-lightbox="models">
              <img src={image6} class="gallery-item" alt="gallery" />
            </a>
          </div>
          <div class="col">
            <a href={image7} data-lightbox="models">
              <img src={image7} class="gallery-item" alt="gallery" />
            </a>
          </div>
          <div class="col">
            <a href={image8} data-lightbox="models">
              <img src={image8} class="gallery-item" alt="gallery" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Photo;
