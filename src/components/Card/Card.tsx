import './CardStyles.css';
interface CardProps {
    className?: string,
    onClick?: () => void,
    image: string,
    desc: string
}

function Card({className, onClick, image, desc}: CardProps) {

    return (
        <>
            <div className={"vertical-card" + (className ? " " + className : "")}
                 onClick={onClick}>
                <div className="first-part">

                    <img src={image} alt={"Image"}/>
                </div>
                <div className="second-part">
                    <h3>{desc}</h3>
                </div>
            </div>
        </>
    );
}

export default Card;