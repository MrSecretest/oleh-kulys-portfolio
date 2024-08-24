import { useState } from 'react';
import '../../App.css'
import './ProjectStyles.css';
import project1 from '../Projects/ProjectsMedia/project1.png';
import project2 from '../Projects/ProjectsMedia/project2.webm';
import project2Preview from '../Projects/ProjectsMedia/project2.png';
import project3 from '../Projects/ProjectsMedia/project3.png';
import ButtonSquare from "../Buttons/ButtonSquare.tsx";
import {LazyLoadImage} from "react-lazy-load-image-component";

const projects = [
    { src: project1, alt: 'Project 1', description: 'First Figma design ever', type: 'img'},
    { src: project2, alt: 'Project 2', description: 'Finished design made in React', type: 'video' },
    { src: project3, alt: 'Project 3', description: 'This portfolio website in Figma', type: 'img' },
];

function ProjectPhoto() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="image-text-container">
            <div className="carousel-button left">
                <ButtonSquare rotationIndex={1} onClick={handlePrevClick}/>
            </div>
            <div
                className="image-wrapper"
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
                {projects.map((project, index) => (

                    <div key={index} className="image-text-slide">
                        {project.type === 'img'? (
                            <LazyLoadImage placeholderSrc={project.src} effect={"blur"} className="border" src={project.src} alt={project.alt} />
                            ):
                            (
                            <video className="border" src={project.src} autoPlay loop muted poster={project2Preview}>
                                Your browser does not support this video.
                            </video>
                                        )
                        }
                        <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                            <p className="underline" style={{width: "fit-content"}}>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-button right">
                <ButtonSquare rotationIndex={3} onClick={handleNextClick}/>
            </div>
        </div>
    );
}

export default ProjectPhoto;
