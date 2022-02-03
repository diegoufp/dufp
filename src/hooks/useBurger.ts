import {ReactFragment, useState} from "react";



const initialBurger= "unactivate";

export const useBurger = (ref: React.MutableRefObject<any>) =>{
    const [burger, setBurger] = useState(initialBurger);

    const handleBoton = (e: Event) =>{
        if(e.target){
            setBurger("unactivate");
            ref.current.checked = false;
        }
    }

    const handleBurger = (e) =>{
        if(e.target.checked){
            setBurger("activate");
        }else{
            setBurger("unactivate");
        }
    };
    

    return {burger,handleBurger,handleBoton}
}