import React from 'react';
import './Styles/Section.scss';
import pics from '../assets/pics.jpeg';

const Section = () => {
    return (
        <div className='sections'>
            <div className='sections__container'>
                <div className='section__img'>
                    <img src={pics} alt="image" />

                </div>
                <div className='section__content'>
                    <h1>Hi, I'm Racheal</h1>
                    <p>Experience in Frontend Development</p>
                    <p>Frontend Developer</p>
                    <p>JavaScript Developer</p>
                </div>

            </div>
        </div>
    )
}
export default Section;
    