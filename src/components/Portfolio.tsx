/*
import React, { useContext } from 'react';
import "../css/Portfolio.css";
import LanguageContext from '../contexts/LanguageContext';
import { useSlider } from '../hooks/useSlider';

const Portfolio = () => {
    const {sliderTexts,texts} = useContext(LanguageContext);
    const {slider,handleSlider} = useSlider(Object.values(sliderTexts).length);


    return (
        <div className="main__portfolio">
            <div className="main__portfolio-slider">
                <div className="main__portfolio-information">
                    <figure className="main__portfolio-figure">
                    <img src={sliderTexts[slider].img} title={sliderTexts[slider].title}/>
                    </figure>
                    <div className="main__portfolio-text">
                    <h3>{sliderTexts[slider].title}</h3>
                    <h4>{sliderTexts[slider].text}</h4>
                    <a href={sliderTexts[slider].git} target="_blank">{texts.more}</a>
                </div>
                </div>
            <button id="left" value="left" onClick={handleSlider}/>
            <button id="right" value="right" onClick={handleSlider}/>
            </div>
        </div>
    )
}

export default Portfolio; */