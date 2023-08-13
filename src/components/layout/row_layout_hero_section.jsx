import React from 'react';
import MyPhoto from "../../assets/images/myself.jpg";
import Blob1 from '../common/Blob1';
import Blob2 from '../common/Blob2';

const RowLayoutHeroSection = ({ aboutMeData }) => {
    const { name, title, description, skills, profile_photo } = aboutMeData;
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-5/6">
            <div className="md:w-1/2 flex items-center justify-center">
            <div>
            <p className='mb-5 text-xl'>Hello there! I'm {name} </p>
            <p className='w-96 text-justify indent-10'>a passionate {title} with expertise in building fully functional mobile applications. With a strong background in mobile app development, I specialize in creating elegant and user-friendly experiences for both iOS and Android platforms.</p>
            </div>
            <Blob1 />
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
                <img src={MyPhoto} alt="Image Description" className="rounded-full w-72 h-72" />
                <Blob2 />
                </div>
        </div>
    );
};

export default RowLayoutHeroSection;