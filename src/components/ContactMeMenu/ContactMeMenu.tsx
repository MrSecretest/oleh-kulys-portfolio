import { useState, useEffect } from 'react';
import './ContactMeMenu.css';
import telegramIcon from './ContactMeMedia/tg.png';
import linkedinIcon from './ContactMeMedia/linkedin.png';
import githubIcon from './ContactMeMedia/github.png';
import cvIcon from './ContactMeMedia/cv.png';
import emailIcon from './ContactMeMedia/email.png';

export default function ContactMeMenu() {
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if ((window.scrollY > 1)) {
                setIsActive(false);
            }
            else{
                setIsActive(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`menuDiv ${isActive ? '' : 'inactive'}`}>
                <div className={`menuBar ${isActive ? '' : 'inactive'}`}>
                    <a target="_blank" rel="noopener noreferrer" href={"https://t.me/sonechko_sonechko"}>
                        <img src={telegramIcon} className="menuItem" alt="Telegram"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/oleh-kulys-a0b095274/"}>
                        <img src={linkedinIcon} className="menuItem" alt="LinkedIn"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" >
                        <img  src={cvIcon} className="menuItem" alt="CV"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={"https://github.com/MrSecretest"}>
                        <img src={githubIcon} className="menuItem" alt="GitHub"/>
                    </a>
                    <a href="mailto:kulys.olezik@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={emailIcon} className="menuItem" alt="Email"/>
                    </a>
                </div>
            </div>

        </>
    );
}
