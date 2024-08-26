import '../../App.css'
import './ProjectStyles.css';
import project1 from '../Projects/ProjectsMedia/project1.png';
import project2 from '../Projects/ProjectsMedia/project2.webm';
import project3 from '../Projects/ProjectsMedia/project3.png';

const projects = [
    { src: project1, alt: 'Project 1', description: 'First Figma design ever', type: 'img'},
    { src: project2, alt: 'Project 2', description: 'Finished design made in React', type: 'video' },
    { src: project3, alt: 'Project 3', description: 'This portfolio website in Figma', type: 'img' },
];

function ProjectPhoto() {

    return (
        <div className="image-text-container">
            <div
                className="image-wrapper">
                {projects.map((project, index) => (

                    <div key={index} className="image-text-slide">
                        {project.type === 'img'? (
                            <img className="border" src={project.src} alt={project.alt} />
                            ):
                            (
                            <video className="border" src={project.src} controls={true} autoPlay loop muted >
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

        </div>
    );
}

export default ProjectPhoto;
