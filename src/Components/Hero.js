import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div>
            
          <h1 className="display-4 fw-bold">Delicious Meals Delivered Fast</h1>
          <p className="lead ">Order your favorite food from top restaurants near you</p>
          <Link to="/restaurant" className="btn btn-warning btn-lg mt-3">Order Now</Link>
        </div>
      </section>
  );
};

export default Hero;
