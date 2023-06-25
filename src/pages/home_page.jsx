import React from 'react';

import RowLayoutHeroSection from '../components/layout/row_layout_hero_section';
import aboutMeData from "../about-me.json";
const HomePage = () => {
  return (
    <section className="h-screen bg-backgroundColor1" id="#">
    <RowLayoutHeroSection aboutMeData = {aboutMeData}/>
    </section>
  )
}

export default HomePage