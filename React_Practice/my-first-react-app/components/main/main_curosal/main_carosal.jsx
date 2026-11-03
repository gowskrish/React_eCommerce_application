import React from "react";
import "../main_curosal/main_carosal.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
// import "../../../assets/images/Destination(1).png";
// import "../../../assets/images/Destination.png";
// import "../../../assets/images/Rectangle14.png";



const curImage = [
    "../../../assets/images/Destination(1).png",
    "../../../assets/images/Destination.png",
    "../../../assets/images/Rectangle14.png",
    "../../../assets/images/Destination(1).png",
    "../../../assets/images/Rectangle14.png",
    "../../../assets/images/Destination.png",
    "../../../assets/images/Destination(1).png",
    "../../../assets/images/Destination.png",
    "../../../assets/images/Destination(1).png",
    "../../../assets/images/Destination(1).png"];

function Main_curosal() {
    const [currentSlide, setCurrentSlide] = useState(0); const imgPerSlide = 3; const start = currentSlide * imgPerSlide; const end = start + imgPerSlide; const currentImages = curImage.slice(start, end); const nextSlide = () => { if (currentSlide < 2) { setCurrentSlide(currentSlide + 1); } }; const prevSlide = () => { if (currentSlide > 0) { setCurrentSlide(currentSlide - 1); } }; return (
        <div className="slide-carousel_main">
            <button id="prev" onClick={prevSlide}> &lt;
            </button> <div id="image_container"> {currentImages.map((image, index) => (<img key={index} src={image} alt="Destination" />))}
            </div> <button id="next" onClick={nextSlide}> &gt; </button> </div>);
}

export default Main_curosal;


