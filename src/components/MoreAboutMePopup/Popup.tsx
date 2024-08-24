import './PopupStyles.css';
import '../../App.css';
import Button from "../Buttons/Button.tsx";

export default function Popup() {
    return (
        <>
            <div className='popupBG'>
                <div className="popup">
                    <div className="popupRow">
                        <h1>More about me:</h1>
                    </div>
                    <div className="infoContainer">
                        <div className="descInfo">
                            <p>Hello! I'm [Your Name], a passionate [Your Profession] with a love for [mention something related to your work or interests]. With [X years] of experience in [your industry or field], I've honed my skills in [key skills or specialties]. My journey began with a deep interest in [related field or passion], and over the years, I've had the privilege of working on [mention types of projects or specific industries you've worked in].</p>
                                <p>When I'm not [working on your profession], you can find me [mention hobbies or interests]. I believe in continuous learning and am always on the lookout for new challenges and opportunities to grow both personally and professionally.</p>
                                <p>Let's connect and create something amazing together!</p>
                        </div>
                    </div>
                    <Button desc={"Close"}/>
                </div>
            </div>
        </>
    )
}