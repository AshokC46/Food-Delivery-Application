import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Categories from './Categories';
import Footer from './Footer';
import "./Home.css";


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Categories />
      <Footer />
    </>
  );
};

export default Home;
