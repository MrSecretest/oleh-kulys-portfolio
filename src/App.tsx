import './App.css'
import './components/Card/Card.tsx'
import Cards from "./components/Cards/Cards.tsx";
import ProjectPhoto from "./components/Projects/ProjectPhoto.tsx";
import Button from "./components/Buttons/Button.tsx";
import ButtonSquare from "./components/Buttons/ButtonSquare.tsx";
import Marquee from "./components/Marquee/Marquee.tsx";

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
          <div className="bg1">
              <div className="verticalContainer">
                  <div className="bg1-container">
                      <div className="bg1-leftContainer">
                          <h1>Hi, I’m Oleh Kulys</h1>
                          <div className="underline>">
                              <h2>I am <span className="underline" style={{color: "yellow"}}>Frontend Developer</span>
                              </h2>
                          </div>
                          <Button desc={"MORE ABOUT ME"}/>
                      </div>


                      <div className="bg1-myPicture">
                          <img src={"../media/placeholderPicture.png"} alt="placeholderPicture"/>
                      </div>
                  </div>
                  <div className="downButtonContainer">
                      <ButtonSquare rotationIndex={0} onClick={ScrollToElement('bg2')}/>
                  </div>
              </div>
          </div>
          <div className="bg2" id={"bg2"}>
              <h1>Briefly about myself</h1>
              <Cards/>
              <div className="downButtonContainer">
                  <ButtonSquare rotationIndex={0} onClick={ScrollToElement('bg3')}/>
              </div>
          </div>
          <div className="bg3" id={"bg3"}>
              <h1>Figma ✨ React = Awesome UI/UX</h1>
              <h2>Currently I’ve designed:</h2>
              <ProjectPhoto/>
              <h2>Technologies I use:</h2>
              <Marquee/>

          </div>

      </>
  )
}

export default App
