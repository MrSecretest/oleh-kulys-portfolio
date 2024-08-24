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
                      <ButtonSquare rotationIndex={0} onClick={ScrollToElement('bg2')}/>
                  </div>
              </div>
          </div>
          <div className="bg2"
               id="bg2">
              <div className="verticalContainer">
                  <h1>Briefly about myself</h1>
                  <Cards/>
                  <div className="downButtonContainer">
                      <ButtonSquare rotationIndex={0} onClick={ScrollToElement('bg3')}/>
                  </div>
              </div>

          </div>
          <div className="bg3" id="bg3">
              <div className="popupRow">
                  <h1>More about me:</h1>
              </div>
              <div className="infoContainer">
                  <div className="descInfo">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis delectus dicta dolorum esse fugiat fugit ipsum natus nihil non obcaecati officia placeat possimus quis rem sequi tenetur, voluptas voluptatum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ducimus excepturi nihil non? Accusamus, consequuntur debitis dolores ducimus explicabo fuga fugit illo impedit laudantium nihil perferendis repellendus sint? Officiis, omnis?.</p>
                      <p className="underline" style={{width:"100%", textAlign:"center"}}>Let's connect and create something amazing together!</p>
                  </div>
              </div>
              <ButtonSquare rotationIndex={0} onClick={ScrollToElement('bg4')}/>

          </div>

          <div className="bg4" id={"bg4"}>
              <h1>Figma ✨ React = Awesome UI/UX</h1>
              <h2>Currently I’ve designed:</h2>
              <ProjectPhoto/>
              <h2>Technologies I use:</h2>
              <Marquee/>
              <ButtonSquare rotationIndex={2} onClick={ScrollToElement('bg1')}/>

          </div>

      </>
  )
}

export default App
