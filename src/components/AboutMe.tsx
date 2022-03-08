
const AboutMe = ({info}) => {
    if(info){ 
        const {lang,name,presentation,stand} = info.findAboutMeLang.aboutMe;
        return (
            <div id="home" className="w-full h-screen flex pt-12 pb-12 relative font-sans">
                <div className="m-auto grid h-auto relative bg-white min-h-max w-3/5 max-w-xl shadow-md p-3 rounded-lg after:absolute after:w-full after:h-full after:top-0 after:z-1 after:blur after:bg-gradient-to-r after:from-rgb-7 after:to-rgb-9">
                    <h1 className="text-center m-5 text-3xl text-gray-600 font-semibold">{name}</h1>
                    <p className="text-center text-gray-600 font-medium">{stand}</p>
                    <h3 className="text-justify m-5 text-2xl text-gray-700 font-normal">{presentation}</h3>
                </div>
            </div>
        )
    }

    return(
        <div></div>
    )
};

export default AboutMe;
