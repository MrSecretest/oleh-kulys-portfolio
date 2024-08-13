import './Marquee.css'
import BootstrapImage from './MarqueeMedia/Bootstrap.png'
import CssImage from './MarqueeMedia/Css.png'
import FigmaImage from './MarqueeMedia/Figma.png'
import GitHubImage from './MarqueeMedia/Github.png'
import HtmlImage from './MarqueeMedia/Html.png'
import JSImage from './MarqueeMedia/JS.png'
import MUIImage from './MarqueeMedia/MUI.png'
import ReactImage from './MarqueeMedia/React.png'
import TSImage from './MarqueeMedia/TS.png'
//import {LazyLoadImage} from "react-lazy-load-image-component";

export default function Marquee() {
    return(
        <div className="MarqueeContainer">
            <div className="Marquee">
                <img src={BootstrapImage}></img></div>
            <div className="Marquee">
                <img src={CssImage}></img></div>
            <div className="Marquee">
                <img src={FigmaImage}></img></div>
            <div className="Marquee">
                <img src={GitHubImage}></img></div>
            <div className="Marquee">
                <img src={HtmlImage}></img></div>
            <div className="Marquee">
                <img src={JSImage}></img></div>
            <div className="Marquee">
                <img src={MUIImage}></img></div>
            <div className="Marquee">
                <img src={ReactImage}></img></div>
            <div className="Marquee">
                <img src={TSImage}></img></div>
        </div>
    );
}