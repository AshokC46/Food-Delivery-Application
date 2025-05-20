import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="container">
          &copy; {new Date().getFullYear()} FoodExpress. All rights reserved.
        </div>
      </footer>
  );
};

export default Footer;
