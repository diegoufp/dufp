import { useQuery } from "@apollo/client";
import { NAV_LANG } from "apollo/querys/homeQuerys";
import Link from 'next/link'


const Header = () => {
    const {data,error,loading} = useQuery(NAV_LANG, {variables:{lang:"es"}});
    if(!loading){ 
        const {findNavLang:{_id, nav:{contact, home, lang, portfolio, skills}}} = data;

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
                </nav>
            </header>
        )
    }
    return (
        <header></header>
    )
    
}

export default Header;
