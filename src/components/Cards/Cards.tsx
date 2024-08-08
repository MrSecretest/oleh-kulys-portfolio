import '../Card/CardStyles.css';
import Card from '../Card/Card.tsx'
import UniversityImage from '../Cards/CardMedia/university.jpg'
import HobbyImage from '../Cards/CardMedia/hobby.png'
import DesignImage from '../Cards/CardMedia/design.jpg'
import {useState} from "react";

function Cards()
{
    const [mainCardIndex, setMainCardIndex] = useState(1);
    const handleCardClick = (index: number) =>
    {
        setMainCardIndex(index)
    };

    const getClassName = (index: number): string =>
    {
        return `vertical-card ${mainCardIndex === index ? 'main' : 'deactivated'} ${index === 0 ? 'left' : index === 2 ? 'right' : ''}`
    }
    return(
        <>
            <div className="cardsContainer">

                <Card
                    key={0}
                    className={getClassName(0)}
                    onClick={() => handleCardClick(0)}
                    image={UniversityImage}
                    desc={"I am studying Computer Science at L  viv Polytechnic National University"}

                />
                <Card
                    key={1}
                    className={getClassName(1)}
                    onClick={() => handleCardClick(1)}
                    image={DesignImage}
                    desc={"I design responsive, polished UIs, creating intuitive and memorable User Experiences"}
                />
                <Card
                    key={2}
                    className={getClassName(2)}
                    onClick={() => handleCardClick(2)}
                    image={HobbyImage}
                    desc={"My hobby is Game Development which boosts my creativity and problem-solving skills, benefiting my UI/UX design work"}
                />

            </div>
        </>
    );
}

export default Cards;