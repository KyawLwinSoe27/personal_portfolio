import React from 'react';
import aboutMeData from "../about-me.json";

const Footer = () => {
    const {name} = aboutMeData;
  return (
    <footer className="bg-primary text-white py-4 text-center">
      <p>&copy; 2023 {name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;