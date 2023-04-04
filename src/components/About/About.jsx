import React from 'react';
import './About.css';
import aboutImg from '../../assets/about-img.jpg';
import { FiCheck } from 'react-icons/fi';

const About = () => {
    return (
        <section className="about section">
            <div className="about-grid container grid">

                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>

                <div className="about-content">
                    <h2 className="section-title title-left" data-title='About-Us'>
                        Fresh Quality and organic testy Coffee house for you
                    </h2>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit perspiciatis ipsum itaque totam minus qui magnam in unde? Corporis voluptate non quas amet omnis accusantium neque ipsa dolor deserunt molestiae?
                    </p>
                    <div className="about-details grid">
                        <p className="about-details-description"> <FiCheck className='about-icon' />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quod. </p>
                        <p className="about-details-description"> <FiCheck className='about-icon' />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quod. </p>
                        <p className="about-details-description"> <FiCheck className='about-icon' />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quod. </p>
                    </div>
                    <a href="#item" className='btn about-btn'>Our Experts</a>
                </div>

            </div>

        </section>
    );
};

export default About;