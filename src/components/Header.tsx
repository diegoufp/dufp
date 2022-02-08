import { useQuery } from "@apollo/client";
import { NAV_LANG } from "apollo/querys/homeQuerys";
import Link from 'next/link'


const Header = () => {
    const {data,error,loading} = useQuery(NAV_LANG, {variables:{lang:"es"}});
    let rat;
    let id_nav; 
    if(!loading){ 
        rat = {...data.findNavLang.nav}
        id_nav = data.findNavLang._id
    }
    //let {contact, home, lang,portfolio,skills} = nav;
    
    return (
        <header className="bg-red">
            <nav>
                <ul>
                    <li>
                        <Link href="/"><a href="">{true && rat.home}</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a href="">{rat.skills}</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a href="">{rat.portafolio}</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a href="">{rat.contact}</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
