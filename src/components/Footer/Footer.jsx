import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaRegEnvelope, FaCaretRight } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-grid container grid">

                <div className="footer-content ">
                    <a href="/" className="footer-logo">
                        <img src={logo} alt="" className='footer-logo-img' />
                    </a>
                    <p className="footer-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, alias, impedit temporibus esse aliquid repellendus autem, distinctio at libero vel nesciunt tempore beatae culpa debitis non inventore quas porro suscipit!
                    </p>
                    <ul className="footer-contact">
                        <li className="footer-contact-item">
                            <AiOutlinePhone className='icon' /> +2 1234 5678 6789
                        </li>
                        <li className="footer-contact-item">
                            <MdOutlineLocationOn className='icon' /> 63/1 Dhanmondi,Dhaka
                        </li>
                        <li className="footer-contact-item">
                            <FaRegEnvelope className='icon' /> info@gmail.com
                        </li>
                    </ul>
                </div>

                <div className="footer-content">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className='footer-links'>
                        <li>
                            <a href="/about" className='footer-link'> <FaCaretRight className="icon" />About Us </a>
                        </li>
                        <li>
                            <a href="/menu" className='footer-link'> <FaCaretRight className="icon" />Menu </a>
                        </li>
                        <li>
                            <a href="/features" className='footer-link'> <FaCaretRight className="icon" />Features </a>
                        </li>
                        <li>
                            <a href="/gallery" className='footer-link'> <FaCaretRight className="icon" />Gallery </a>
                        </li>
                        <li>
                            <a href="/team" className='footer-link'> <FaCaretRight className="icon" />Team </a>
                        </li>
                        <li>
                            <a href="/reservation" className='footer-link'> <FaCaretRight className="icon" />Reservation </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-content">
                    <h3 className='footer-title'>Opening Hours</h3>
                    <div className="footer-opening-hour">
                        <ul className="opening-hour-list">
                            <li className="opening-hour-item">
                                <span>Saturday:</span>
                                <span>6AM-9PM</span>
                            </li>
                            <li className="opening-hour-item">
                                <span>Sunday:</span>
                                <span>6AM-9PM</span>
                            </li>
                            <li className="opening-hour-item">
                                <span>Monday:</span>
                                <span>6AM-9PM</span>
                            </li>
                            <li className="opening-hour-item">
                                <span>Tuesday:</span>
                                <span>6AM-9PM</span>
                            </li>
                            <li className="opening-hour-item">
                                <span>Wednesday:</span>
                                <span>6AM-9PM</span>
                            </li>
                            <li className="opening-hour-item">
                                <span>Thursday:</span>
                                <span>6AM-9PM</span>
                            </li>
                            <li className="opening-hour-item">
                                <span>Friday:</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-content">

                    <h3 className="footer-title">Newsletter</h3>
                    <p className="description">Subscribe our newsletter to get latest update and news</p>
                    <form className="subscribe-form">
                        <input type="text" placeholder='Your Email' className="form-input subscribe-input" />
                    </form>
                    <div className="btn btn-flex subscribe-btn">
                        <FaRegEnvelope /> Subscribe Now
                    </div>
                    <div className="footer-social">
                        <h3 className='footer-social-follow'>Follow us:</h3>

                        <div className="footer-social-links">
                            <a href="/" className="footer-social-link"> <FaFacebookF /> </a>
                            <a href="/" className="footer-social-link"> <FaTwitter /> </a>
                            <a href="/" className="footer-social-link"> <FaLinkedin /> </a>
                            <a href="/" className="footer-social-link"> <FaYoutube /> </a>
                        </div>

                    </div>

                </div>







            </div>
            <p className="copyright-text">
                &copy; Copyright 2023 <span>Coffero</span> all right reserved
            </p>
        </footer>
    );
};

export default Footer;