/*
import React,{ useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ThemeContext from '../contexts/ThemeContext';
import "../css/AboutMe.css";


const AboutMe = () => {
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguageContext);
    return (
        <div className="main__aboutme">
            <div className={`main__aboutme-information ${theme}`}>
                <h1>{texts.name}</h1>
                <p>-{texts.stand}-</p>
                <h3>{texts.presentation}</h3>
            </div>
            
            
        </div>
    )
}

export default AboutMe;
*/

import { useQuery } from "@apollo/client";
import { ABOUTME_LANG } from "apollo/querys/homeQuerys";
import { useEffect, useState } from "react";

const AboutMe = ({info}) => {
    /*const [lang, setLang] = useState("es");
    const [text, setText] = useState();

    const {data,error,loading} = useQuery(ABOUTME_LANG, {variables:{lang}});

    useEffect(() => {
        setText(data)
    }, [loading,data])*/

    if(info){ 
        const {lang,name,presentation,stand} = info.findAboutMeLang.aboutMe;
        return (
            <div id="home">
                <h2>{name}</h2>
                <p>{stand}</p>
                <h3>{presentation}</h3>
            </div>
        )
    }

    return(
        <div></div>
    )
};

export default AboutMe;

//text.findAboutMeLang.aboutMe
// {lang,name,presentation,stand}