import React from 'react';
import './Choose.css';
import chooseImg from '../../assets/choose.jpg';
import coffeeMug from '../../assets/coffee-mug.svg';
import coffeeBeans2 from '../../assets/coffee-beans-2.svg';
import coffeeBeans3 from '../../assets/coffee-beans-3.svg';

const Choose = () => {
    return (
        <section className="choose section">
            <div className="choose-grid container grid">

                <div className="choose-content">
                    <h2 className="section-title title-left " data-title='Why Choose Us'>
                        Fresh quality and organic tasty coffee house for you
                    </h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex iste sequi? Qui adipisci maiores excepturi quod voluptates neque nisi aperiam unde accusamus. Porro, hic placeat labore amet obcaecati assumenda molestiae necessitatibus ab reiciendis delectus laborum eaque explicabo sequi. Doloribus.
                    </p>

                    <div className="choose-details grid">
                        <div className="choose-details-item">
                            <div className="choose-details-img-wrapper">
                                <img src={coffeeMug} alt="" className='choose-details-img' />
                            </div>
                            <div>
                                <h3 className="choose-details-title">Awesome Aroma</h3>
                                <p className="choose-details-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur laborum quas. In, repellendus. Consequuntur illo fuga omnis sunt laboriosam iure ipsa, voluptatum officia aspernatur!
                                </p>
                            </div>
                        </div>

                        <div className="choose-details-item">
                            <div className="choose-details-img-wrapper">
                                <img src={coffeeBeans2} alt="" className='choose-details-img' />
                            </div>
                            <div>
                                <h3 className="choose-details-title">Pure Grades</h3>
                                <p className="choose-details-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur laborum quas. In, repellendus. Consequuntur illo fuga omnis sunt laboriosam iure ipsa, voluptatum officia aspernatur!
                                </p>
                            </div>
                        </div>

                        <div className="choose-details-item">
                            <div className="choose-details-img-wrapper">
                                <img src={coffeeBeans3} alt="" className='choose-details-img' />
                            </div>
                            <div>
                                <h3 className="choose-details-title">Healthy Coffee</h3>
                                <p className="choose-details-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur laborum quas. In, repellendus. Consequuntur illo fuga omnis sunt laboriosam iure ipsa, voluptatum officia aspernatur!
                                </p>
                            </div>
                        </div>
                    </div>




                </div>
                <img src={chooseImg} alt="" className="choose-imgR" />

            </div>
        </section>
    );
};

export default Choose;