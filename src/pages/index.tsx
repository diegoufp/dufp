import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import AboutMe from 'components/AboutMe';
import Header from 'components/Header';
import Skills from "components/Skills";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ABOUTME_LANG,ALL_SKILLS,NAV_LANG } from "apollo/querys/homeQuerys";



const Home: NextPage = () => {
  const [lang, setLang] = useState("es");
  const [aboutMe, setAboutMe] = useState();
  const [nav, setNav] = useState();
  const [skills, setSkills] =  useState();

  const aboutme_lang = useQuery(ABOUTME_LANG, {variables:{lang}});
  const nav_lang = useQuery(NAV_LANG, {variables:{lang}});
  const skills_all = useQuery(ALL_SKILLS)
  
  useEffect(() => {
    setAboutMe(aboutme_lang.data)
  }, [aboutme_lang.loading,aboutme_lang.data])

  useEffect(() => {
    setNav(nav_lang.data)
  }, [nav_lang.loading,nav_lang.data])

  useEffect(() => {
    setSkills(skills_all.data)
  }, [skills_all.loading, skills_all.data])

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
    </main>
    </>
  )
}




export default Home;

