import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 p-4 mb-8 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative pr-10 me-8'>
                <img src={person} className="lg:w-4/6 rounded-lg shadow-2xl" />
                <img src={parts} className="lg:w-3/6 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
                </div>
                <div className='space-y-4'>
                    <h1 className='text-2xl text-orange-600 font-bold'>About Us</h1>
                    <h1 className="text-5xl font-bold">Precision and innovation in motion: the car factory</h1>
                    <p className="py-3"> A car factory is a complex industrial facility designed for the production of automobiles. These factories are typically large, highly automated facilities that are designed to produce cars at a rapid pace while maintaining a high level of quality control.</p>
                    <p className='pb-6'>The process of building a car involves multiple stages, including stamping, welding, painting, and final assembly. Each of these stages requires specialized equipment and skilled workers to ensure that the end product meets the necessary safety and quality standards.</p>
                    <button className="btn btn-warning bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;