import { useQuery } from "@apollo/client";
import { NAV_LANG } from "apollo/querys/homeQuerys";
import Link from 'next/link'
import { useEffect, useState } from "react";


const Header = ({info,handleLang}) => {
    if(info){ 
        const {contact, home, portfolio, skills, lang} = info.findNavLang.nav;

        return (
            <header className="fixed z-50 top-0 w-screen text-gray-700 h-16 font-sans">
                <nav className="w-full h-full flex flex-row justify-around shadow-md bg-white after:absolute after:w-full after:h-full after:top-0 after:z-1 after:blur after:bg-gradient-to-r after:from-rgb-7 after:to-rgb-9">
                    <div className="m-auto">
                        <a className="text-3xl text-center font-open font-medium">dufp</a>
                    </div>
                    <ul className="m-auto flex flex-row justify-evenly w-2/5 h-full relative">
                        <li className=" w-1/5 h-2/3 m-auto flex items-center rounded-2xl justify-center hover:shadow-inner hover:bg-gradient-to-tr hover:from-white hover:to-gray-100">
                            <a href="#home" className="text-lg font-normal">{home}</a>
                        </li>
                        <li className="w-1/5 h-2/3 m-auto flex items-center rounded-2xl justify-center hover:shadow-inner hover:bg-gradient-to-tr hover:from-white hover:to-gray-100">
                            <a href="#skills" className="text-lg font-normal">{skills}</a>
                        </li>
                        <li className="w-1/5 h-2/3 m-auto flex items-center rounded-2xl justify-center hover:shadow-inner hover:bg-gradient-to-tr hover:from-white hover:to-gray-100">
                            <a href="#portfolio" className="text-lg font-normal">{portfolio}</a>
                        </li>
                        <li className="w-1/5 h-2/3 m-auto flex items-center rounded-2xl justify-center hover:shadow-inner hover:bg-gradient-to-tr hover:from-white hover:to-gray-100">
                            <a href="#contact" className="text-lg font-normal">{contact}</a>
                        </li>
                    </ul>
                    <div className="flex w-1/12 relative flex-row justify-evenly h-full items-center  ">
                        <input className="flex relative bg-slate-200 w-8 h-4 appearance-none outline-none rounded-lg after:bg-white file: after:absolute after:w-4 after:h-4 after:rounded-full after:top-0 after:left-0 after:checked:left-4 shadow-inner after:shadow" type="checkbox" name="lang" id="lang-check" onClick={handleLang} defaultChecked={lang === "en" ? true : false}/>
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
