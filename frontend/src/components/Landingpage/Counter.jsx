// components/Landingpage/Counter.jsx
import React from "react";

import CountUp from 'react-countup';
const Counter = () => {
  return (
    <section className="slider-section text-center ">
      <div className="container">
        <h5 className="text-danger fw-bold"></h5>
        <p className="text-danger small fw-semibold bg-danger-subtle d-inline px-3 py-1 rounded-pill mb-2 ">Achievements</p>
        <h2 className="fw-bold text-center mb-5">Our Achievements</h2>
        <div className="row justify-content-center gap-4 text-center">
          <div className="col-md-2">
            <i className="ri-crop-line fs-2 text-danger mb-2"></i>
            <h3 className="fw-bold text-dark">560+</h3>
            <p>Total Area Sq</p>
          </div>
          <div className="col-md-2">
            <i className="ri-building-line fs-2 text-danger mb-2"></i>
            <h3 className="fw-bold text-dark">197K+</h3>
            <p>Apartments Sold</p>
          </div>
          <div className="col-md-2">
            <i className="ri-building-2-line fs-2 text-danger mb-2"></i>
            <h3 className="fw-bold text-dark">268+</h3>
            <p>Total Constructions</p>
          </div>
          <div className="col-md-2">
            <i className="ri-sofa-line fs-2 text-danger mb-2"></i>
            <h3 className="fw-bold text-dark">340+</h3>
            <p>Apartment Rooms</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;