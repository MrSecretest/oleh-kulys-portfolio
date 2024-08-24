import { useState, useEffect } from 'react';
import './ContactMeMenu.css';
import telegramIcon from './ContactMeMedia/tg.png';
import linkedinIcon from './ContactMeMedia/linkedin.png';
import githubIcon from './ContactMeMedia/github.png';
import cvIcon from './ContactMeMedia/cv.png';
import emailIcon from './ContactMeMedia/email.png';

export default function ContactMeMenu() {
    const [isActive, setIsActive] = useState(true); // State to track if menu is active

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
                    <img src={telegramIcon} className="menuItem" alt="Telegram"/>
                    <img src={linkedinIcon} className="menuItem" alt="LinkedIn"/>
                    <img src={cvIcon} className="menuItem" alt="CV"/>
                    <img src={githubIcon} className="menuItem" alt="GitHub"/>
                    <img src={emailIcon} className="menuItem" alt="Email"/>
                </div>
            </div>

        </>
    );
}
