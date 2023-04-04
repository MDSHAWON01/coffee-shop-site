import React from 'react';
import './Stats.css';
import coffeeShop from '../../assets/coffee-shop.svg';
import experience from '../../assets/experience.svg';;
import coffeeCup from '../../assets/coffee-cup.svg';
import chef from '../../assets/chef.svg';

const Stats = () => {
    return (
        <section className="stats section">
            <div className="stats-grid container grid">

                <div className="stats-item">
                    <div className="stats-img-wrapper">
                        <img src={coffeeShop} alt="" className='stats-img' />
                    </div>
                    <div>
                        <p className="stats-no">1500</p>
                        <h3 className="stats-title">Total Branches</h3>
                    </div>
                </div>

                <div className="stats-item">
                    <div className="stats-img-wrapper">
                        <img src={experience} alt="" className='stats-img' />
                    </div>
                    <div>
                        <p className="stats-no">250</p>
                        <h3 className="stats-title">Happy Customer</h3>
                    </div>
                </div>

                <div className="stats-item">
                    <div className="stats-img-wrapper">
                        <img src={chef} alt="" className='stats-img' />
                    </div>
                    <div>
                        <p className="stats-no">120</p>
                        <h3 className="stats-title">+ Professional Chefs</h3>
                    </div>
                </div>

                <div className="stats-item">
                    <div className="stats-img-wrapper">
                        <img src={coffeeCup} alt="" className='stats-img' />
                    </div>
                    <div>
                        <p className="stats-no">50</p>
                        <h3 className="stats-title">Year of Experience</h3>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default Stats;