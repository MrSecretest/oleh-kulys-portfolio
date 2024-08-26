import './App.css'
import './components/Card/Card.tsx'
import Cards from "./components/Cards/Cards.tsx";
import ProjectPhoto from "./components/Projects/ProjectPhoto.tsx";
import Button from "./components/Buttons/Button.tsx";
import ButtonSquare from "./components/Buttons/ButtonSquare.tsx";
import Marquee from "./components/Marquee/Marquee.tsx";
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import ContactMeMenu from "./components/ContactMeMenu/ContactMeMenu.tsx";
function ScrollToElement(elementId:string)
{
    return () =>
    {
        const element = document.getElementById(elementId);
        if (element)
        {
            element.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };
}

function App() {

  return (
      <>
          <ContactMeMenu/>
          <div className="bg1" id="bg1">
              <div className="verticalContainer">
                  <div className="bg1-container">
                      <div className="bg1-leftContainer">
                          <h1>Hi, I’m Oleh Kulys</h1>
                          <div className="underline>">
                              <h2>I am <span className="underline" style={{color: "yellow"}}>Frontend Developer</span>
                              </h2>
                          </div>
                          <Button desc={"MORE ABOUT ME"} onClick={ScrollToElement('bg3')}/>
                      </div>

                      <div className="bg1-myPicture">
                          <LazyLoadImage placeholderSrc={"../media/placeholderPicture.png"} effect={"blur"}
                                         src={"../media/placeholderPicture.png"} alt="placeholderPicture"/>
                      </div>
                  </div>
                  <div className="downButtonContainer">
                      <p>Briefly about myself</p>
                      <ButtonSquare rotationIndex={0} onClick={ScrollToElement('bg2')}/>
                      <p>Briefly about myself</p>

                  </div>
              </div>
          </div>
          <div className="bg2"
               id="bg2">
              <div className="verticalContainer">
                  <h1>Briefly about myself</h1>
                  <Cards/>
                  <div className="downButtonContainer">
                      <p>More about me</p>
                      <ButtonSquare rotationIndex={0} onClick={ScrollToElement('bg3')}/>
                      <p>More about me</p>
                  </div>
              </div>

          </div>
          <div className="bg3" id="bg3">
              <div className="popupRow">
                  <h1>More about me:</h1>
              </div>
              <div className="infoContainer">
                  <div className="descInfo">
                      <p style={{fontWeight: "normal"}}>Hi, I'm <span style={{fontWeight: "bold"}}>Oleh</span>, a
                          passionate frontend developer currently studying <span style={{fontWeight: "bold"}}>Computer Science</span>.
                          I have a
                          strong interest in creating <span style={{fontWeight: "bold"}}>dynamic</span> and <span
                              style={{fontWeight: "bold"}}>user-friendly web applications</span>.
                      </p>
                      <p style={{fontWeight: "normal"}}>My background spans various programming languages and
                          technologies, including <span style={{fontWeight: "bold"}}>Python, C, C++,
                          Java, HTML, CSS, JavaScript, and React</span>. I’m eager to leverage this diverse skill set to
                          build
                          innovative and impactful solutions. </p>
                      <p style={{fontWeight: "normal"}}>
                          My main objective is to create <span style={{fontWeight: "bold"}}>intuitive</span> and <span
                          style={{fontWeight: "bold"}}>aesthetically pleasing</span> designs using React and other
                          technologies.
                          My <span style={{fontWeight: "bold"}}>creativity</span> is <span
                          style={{fontWeight: "bold"}}>diverse</span>, and I always enjoy making engaging designs that
                          balance functionality with visual appeal.
                      </p>
                      <p style={{fontWeight: "normal"}} className="underline">I’m excited about the future and look
                          forward
                          to exploring new opportunities and challenges,
                          feel free to connect with me to discuss projects or opportunities!</p>
                      <div style={{display:"flex", justifyContent:"space-evenly"}}>
                          <a style={{color:"yellow", textDecoration:"underline"}} href="mailto:kulys.olezik@gmail.com" target="_blank" rel="noopener noreferrer">Email me</a>
                          <a style={{color:"yellow", textDecoration:"underline"}} href="mailto:kulys.olezik@gmail.com" target="_blank" rel="noopener noreferrer">CV</a>
                      </div>

                  </div>
              </div>
              <div className="downButtonContainer">
                  <p>My projects</p>
                  <ButtonSquare rotationIndex={0} onClick={ScrollToElement('bg4')}/>
                  <p>My projects</p>
              </div>

          </div>

          <div className="bg4" id={"bg4"}>
              <h1>Figma ✨ React = Awesome UI/UX</h1>
              <h2>Currently I’ve designed:</h2>
              <ProjectPhoto/>
              <h2>Technologies I use:</h2>
              <Marquee/>
              <div className="downButtonContainer">
                  <p>Back to start</p>
                  <ButtonSquare rotationIndex={2} onClick={ScrollToElement('bg1')}/>
                  <p>Back to start</p>
              </div>

          </div>

      </>
  )
}

export default App
