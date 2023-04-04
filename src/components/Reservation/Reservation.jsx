import React from 'react';
import './Reservation.css';
import { FaRegBookmark } from 'react-icons/fa';
import shape2 from '../../assets/shape-2.png';
import shape3 from '../../assets/shape-3.png';

const Reservation = () => {
    return (
        <section className="reservation container" id="reservation">
            <h2 className="section-title" data-title="Reservation">
                Book a Table
            </h2>

            <form className='reservation-form grid'>

                <div className="form-input-div">
                    <input type="text" placeholder="Your Name" className='form-input' />
                </div>

                <div className="form-input-div">
                    <input type="email" placeholder="Your Email Address" className='form-input' />
                </div>

                <div className="form-input-div">
                    <input type="text" placeholder="Your Phone" className='form-input' />
                </div>

                <div className="form-input-div">
                    <input type="text" placeholder="Time ex: 1:25pm" className='form-input' />
                </div>

                <div className="form-input-div">
                    <input type="text" placeholder="Date ex:DD/MM/YY" className='form-input' />
                </div>

                <div className="form-input-div">
                    <input type="text" placeholder="Number of people" className='form-input' />
                </div>

                <div className="form-input-div form-input-textArea">
                    <textarea placeholder='Your Message' className='form-input'></textarea>
                </div>

                <button className="btn btn-flex reservation-btn"> <FaRegBookmark /> Book a Table</button>

            </form>

            <img src={shape2} alt="" className='shape-2' />
            <img src={shape3} alt="" className='shape-3' />


        </section>
    );
};

export default Reservation;