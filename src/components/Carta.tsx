
const Card = ({img, title}:{img: String, title: String}) => {
    return (
            <figure className=" bg-white relative grid w-32 rounded-lg shadow-lg p-3 after:absolute after:w-full after:h-full after:top-0 after:z-1 after:blur after:bg-gradient-to-r after:from-rgb-7 after:to-rgb-9">
            <img  src={img} alt={title}/>
            <figcaption className="text-center font-sans text-lg font-semibold text-gray-600">{title}</figcaption>
            </figure>
    )
}

export default Card;
