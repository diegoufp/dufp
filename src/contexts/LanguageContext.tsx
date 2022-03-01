/*import React,{ createContext,useState } from "react";

const LanguageContext = createContext("");

const initialLanguage = "en";
/*
const history = `Soy un apasionado por la tecnología, tengo más de tres años como desarrollador e incluso actualmente continúo expandiendo mi conocimiento sobre nuevas tecnologías de forma autodidacta.
Inicie adentrándome al mundo de la programación aprendiendo python en un computador con sistema operativo linux , fue ahí donde me engancho totalmente el campo y decidí aprender mas lenguajes de programación.
Actualmente ademas de python e experimentado con librerías como scrapyque me permitió tener un interés mas profundo hacia la web 2.0, a como limpiar y estructurar la información para poder almacenarla, así también obtuve el interés hacia las bases de datos y e iniciar aprendiendo Mysql.
Ese fue mi acercamiento hacia el desarrollo sofware y despues de eso termine aprendiendo:
GIT
HTML
CSS
JAVASCRIPT
WEBPACK
REACT
`

const translations = {
    es:{
        language: "es", 
        themeDark: "Oscuro", 
        themeLight: "Claro",
        aboutMe: "Acerca de mi",
        skills: "Habilidades",
        portfolio: "Portafolio",
        contact: "Contacto",
        home: "Inicio",
        presentation:"Soy un desarrollador web, apasionado por la tecnología, tengo más de tres años como desarrollador e incluso actualmente continúo expandiendo mi conocimiento sobre nuevas tecnologías de forma autodidacta",
        name:"Soy Diego Fernandez",
        stand: "Full Stack Developer",
        more:"Más"
    },
    en:{
        language: "en",
        themeDark: "Dark", 
        themeLight: "Light",
        aboutMe: "About Me",
        skills: "Skills",
        portfolio: "Portfolio",
        contact: "Contact",
        home: "Home",
        presentation: "I’m a web developer, passionate about technology, I have more than three years as a developer and even currently I continue to expand my knowledge about new technologies autodidactically",
        name: "I'm Diego Fernandez",
        stand: "Full Stack Developer",
        more:"More"
    }
}

const slider = {
    es:{
        0:  {img:"https://i.imgur.com/dRH6z3n.png",
            title:"Mi Portafolio",
            text:"El proyecto que es mi carta de presentación sin duda tiene que estar en mi portafolio de proyectos. En su código fuente se puede ver claramente cuanto se del tema y este portafolio ira creciendo en proporción a mis conocimientos y proyectos",
            git:"https://github.com/diegoufp/portfolio",more:""},
    },
    en:{
    0:  {img:"https://i.imgur.com/dRH6z3n.png",
        title:"My Portfolio",
        text:"The project that is my cover letter certainly has to be in my portfolio of projects. In its source code you can clearly see how much of the topic and this portfolio will be growing in proportion to my knowledge and projects",
        git:"https://github.com/diegoufp/portfolio",
        more:""},
    }
}

const icons = {
    github: {
        img: "https://i.imgur.com/mhj0e4M.png",
        title: "GITHUB"
    },
    javascript: {
        img: "https://i.imgur.com/kzTybrt.png",
        title: "JAVASCRIPT"
    },
    python: {
        img: "https://i.imgur.com/qOHa1PR.png",
        title: "PYTHON"
    },
    linux: {
        img: "https://i.imgur.com/qOHa1PR_d.webp?maxwidth=760&fidelity=grand",
        title: "LINUX"
    },
    sql: {
        img: "https://i.imgur.com/o5Y18N1_d.webp?maxwidth=760&fidelity=grand",
        title: "SQL"
    },
    html: {
        img: "https://i.imgur.com/JkcS9k4.png",
        title: "HTML"
    },
    css: {
        img: "https://i.imgur.com/pa84wzE.png",
        title: "CSS"
    },
    react: {
        img: "https://i.imgur.com/GI2eV91.png",
        title: "REACT"
    },
    node: {
        img:"https://imgur.com/c3mOiSH",
        title:"NODE"
    },
    git: {
        img:"https://i.imgur.com/HEZ6Eko.png",
        title:"GIT"
    },
    docker: {
        img:"https://i.imgur.com/GYAM3SG_d.webp?maxwidth=760&fidelity=grand",
        title:"DOCKER"
    },
    sass: {
        img:"https://i.imgur.com/8hJ8wCK.png",
        title:"SASS"
    },
    mongo: {
        img:"https://i.imgur.com/eK2x0n5_d.webp?maxwidth=760&fidelity=grand",
        title:"MONGO"
    }
}

const initialForm = {
    name: "",
    email: "",
    subject:"",
    comments:"" 
};

const translateForm={
    es:{required:{
        name:"El campo 'Nombre' es requerido",
        email: "El campo 'Email' es requerido",
        subject:"El campo 'Asunto a tratar' es requerido",
        comments:"El campo 'Comentarios' es requerido"
    },regex:{
        name: "El campo 'Nombre' solo acepta letras y espacios en blanco",
        email:"El campo 'Email' es incorrecto",
        comments:"El campo 'Comentarios' no debe exceder los 255 caracteres"
        
    },placeholder:{
        name:"Escribe tu nombre",
        email:"Escribe tu email",
        subject:"Asunto a tratar",
        comments:"Escribe tus comentarios",
        submit:"Enviar"
    }},
    en:{required:{
        name:"The 'Name' field is required",
        email:"The 'Email' field is required",
        subject:"The field 'Subject to be addressed' is required",
        comments:"The 'Comments' field is required"
    }, regex:{
        name:"The 'Name' field only accepts letters and blanks",
        email:"The 'Email' field is incorrect",
        comments:"The 'Comments' field must not exceed 255 characters"
    },placeholder:{
        name:"Enter your name",
        email:"Write your email",
        subject:"Issue at hand",
        comments:"Write your comments",
        submit:"Submit"
    }}
}

const LanguageProvider = ({children})=>{
    const [language, setLanguage] = useState(initialLanguage);
    const [texts,setTexts] = useState(translations[language]);
    const [sliderTexts, setSliderText] = useState(slider[language]);
    const [formText, setFormText] = useState(translateForm[language]);

    const handleLanguage = (e) =>{
        if(e.target.checked){
            setLanguage("es");
            setTexts(translations.es);
            setSliderText(slider.es);
            setFormText(translateForm.es);

        }else{
            setLanguage("en");
            setTexts(translations.en);
            setSliderText(slider.en);
            setFormText(translateForm.en);
        }
    };

    const validationsForm = (form) =>{
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,255}$/;
    
    
        if(!form.name.trim()){
            errors.name = true;     
        }else if(!regexName.test(form.name.trim())){
            errors.name = "regex";
        };
    
        if(!form.email.trim()){
            errors.email = true;
        }else if(!regexEmail.test(form.email.trim())){
            errors.email = "regex";
        };
    
        if(!form.subject.trim()){
            errors.subject = true;
        };
        if(!form.comments.trim()){
            errors.comments = true;
        }else if(!regexComments.test(form.comments.trim())){
            errors.comments = "regex";
        }
    
        return errors;
    };
    const data={texts,handleLanguage, icons, sliderTexts,initialForm,validationsForm,formText};
    return (
        <LanguageContext.Provider value={data}>
        {children}
        </LanguageContext.Provider>)
};

export {LanguageProvider};
export default LanguageContext;

*/