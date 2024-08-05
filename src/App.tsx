import './App.css'

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
                          <button className="buttonStyled">MORE ABOUT ME</button>
    
                      </div>


                      <div className="bg1-myPicture">
                          <img src={"../media/placeholderPicture.png"} alt="placeholderPicture"/>
                      </div>
                  </div>
                  <div className="downButtonContainer">
                      <div className="buttonStyled buttonStyledSquare">
                          <img src="../media/arrow.png" alt="arrow"/>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg2">

          </div>

      </>
  )
}

export default App
