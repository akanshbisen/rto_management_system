import React from "react";
import "./style.css";
import imgcar from "./images/car.png";
import imgwheel from "./images/wheel.png";
import img1 from "./images/car2.png";
import img2 from "./images/taxi.png";
import img3 from "./images/rickshaw.png";
import img4 from "./images/truck.png";

function CarAnimation() {
  return (
    <div className="hero">
      <div className="highway"></div>
      <div className="city"></div>

      <img src={img1} className="vehicle" />
      <img src={img2} className="taxi" />
      <img src={img3} className="rickshaw" />
      <img src={img4} className="truck" />
      <div>
        <div>
          <div className="car">
            <img src={imgcar} className="livecar" />
          </div>
          <div className="wheel">
            <img src={imgwheel} className="back-wheel" />
            <img src={imgwheel} className="front-wheel" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarAnimation;
