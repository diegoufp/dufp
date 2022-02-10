import { useQuery } from "@apollo/client";
import { NAV_LANG } from "apollo/querys/homeQuerys";
import Link from 'next/link'
import { useEffect, useState } from "react";


const Header = () => {
    const [lang, setLang] = useState("es");
    const [nav, setNav] = useState();
    
    const {data,error,loading} = useQuery(NAV_LANG, {variables:{lang}});
    
    const handleLang = (e) =>{
        if(e.target.checked){
            setLang("en")
        }else{
            setLang("es")
        }
    } 
    useEffect(() => {
        setNav(data)
    }, [loading,data])
    
    if(!loading && nav){ 
        const {contact, home, portfolio, skills, lang} = nav.findNavLang.nav;

        return (
            <header className="fixed z-50 top-0 w-screen text-gray-700 h-16 font-open">
                <nav className="w-full h-full flex flex-row justify-around shadow-md bg-white after:absolute after:w-full after:h-full after:top-0 after:z-1 after:blur after:bg-gradient-to-r after:from-rgb-7 after:to-rgb-9">
                    <div className="m-auto">
                        <Link href="/"><a className="text-3xl text-center">dufp</a></Link>
                    </div>
                    <ul className="m-auto flex flex-row justify-evenly w-2/5 h-full relative">
                        <li className="w-1/5 h-2/3 m-auto flex items-center rounded-2xl justify-center hover:shadow-inner hover:bg-gradient-to-tr hover:from-white hover:to-gray-100">
                            <Link href="/"><a className="text-lg">{home}</a></Link>
                        </li>
                        <li className="w-1/5 h-2/3 m-auto flex items-center rounded-2xl justify-center hover:shadow-inner hover:bg-gradient-to-tr hover:from-white hover:to-gray-100">
                            <Link href="/skills"><a className="text-lg">{skills}</a></Link>
                        </li>
                        <li className="w-1/5 h-2/3 m-auto flex items-center rounded-2xl justify-center hover:shadow-inner hover:bg-gradient-to-tr hover:from-white hover:to-gray-100">
                            <Link href="/portfolio"><a className="text-lg">{portfolio}</a></Link>
                        </li>
                        <li className="w-1/5 h-2/3 m-auto flex items-center rounded-2xl justify-center hover:shadow-inner hover:bg-gradient-to-tr hover:from-white hover:to-gray-100">
                            <Link href="/contact"><a className="text-lg">{contact}</a></Link>
                        </li>
                    </ul>
                    <div className="options">
                        <input type="checkbox" name="lang" id="lang-check" onClick={handleLang} defaultChecked={lang === "en" ? true : false}/>
                    </div>
                </nav>
            </header>
        )
    }
    return (
        <header></header>
    )
    
}

export default Header;
/*
                        <input type="checkbox" name="lang" id="lang-check" onClick={handleLang}/>
*/