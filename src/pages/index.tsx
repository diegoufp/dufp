import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import AboutMe from 'components/AboutMe';
import Header from 'components/Header';
import Skills from "components/Skills";
import Contact from "components/Contact";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ABOUTME_LANG,ALL_SKILLS,NAV_LANG,REQUIRED_LANG,REGEX_LAG,PLACEHOLDER_LAG,ALL_PORTFOLIO_LANG } from "apollo/querys/homeQuerys";



const Home: NextPage = () => {
  const [lang, setLang] = useState("es");
  const [aboutMe, setAboutMe] = useState();
  const [nav, setNav] = useState();
  const [skills, setSkills] =  useState();
  const [portfolio, setPortfolio] = useState();
  const [required, setRequired] = useState();
  const [regex, setRegex] = useState();
  const [placeholder, setPlaceholder] = useState();

  const aboutme_lang = useQuery(ABOUTME_LANG, {variables:{lang}});
  const nav_lang = useQuery(NAV_LANG, {variables:{lang}});
  const skills_all = useQuery(ALL_SKILLS);
  const required_lang = useQuery(REQUIRED_LANG,{variables:{lang, form: "contact"}});
  const regex_lang = useQuery(REGEX_LAG,{variables:{lang, form: "contact"}});
  const placeholder_lang = useQuery(PLACEHOLDER_LAG,{variables:{lang, form: "contact"}});
  const all_portfolio_lang = useQuery(ALL_PORTFOLIO_LANG, {variables:{lang, name: "portfolio"}});

  
  useEffect(() => {
    setAboutMe(aboutme_lang.data)
  }, [aboutme_lang.loading,aboutme_lang.data]);

  useEffect(() => {
    setNav(nav_lang.data)
  }, [nav_lang.loading,nav_lang.data]);

  useEffect(() => {
    setSkills(skills_all.data)
  }, [skills_all.loading, skills_all.data]);

  useEffect(()=>{
    setPlaceholder(placeholder_lang.data)
  },[placeholder_lang.loading,placeholder_lang.data]);

  useEffect(()=>{
    setRequired(required_lang.data)
  },[required_lang.loading,required_lang.data]);

  useEffect(()=>{
    setRegex(regex_lang.data)
  },[regex_lang.loading,regex_lang.data]);
  
  useEffect(()=>{
    setPortfolio(all_portfolio_lang.data)
  },[all_portfolio_lang.loading,all_portfolio_lang.data]);


  const handleLang = (e: React.FormEvent<HTMLInputElement>) =>{
        if(e.target.checked){
            setLang("en")
        }else{
            setLang("es")
        }
    } 

  return (
    <>
    <Head>
      <title>dufp</title>
    </Head>
    <Header info={nav} handleLang={handleLang}/>

    <main className='pt-16 pb-16'>
      <AboutMe info={aboutMe}/>
      <Skills info={skills}/>
      <Contact required={required} regex={regex} placeholder={placeholder}/>
    </main>
    </>
  )
}




export default Home;

