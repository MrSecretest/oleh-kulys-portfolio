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
import {LazyLoadImage} from 'react-lazy-load-image-component';

export default function Marquee() {
    return(
        <div className="MarqueeContainer">
            <div className="Marquee">
                <LazyLoadImage placeholderSrc={CssImage} effect={"blur"} src={CssImage}></LazyLoadImage></div>
            <div className="Marquee">
                <LazyLoadImage placeholderSrc ={BootstrapImage} src={BootstrapImage}></LazyLoadImage></div>
            <div className="Marquee">
                <LazyLoadImage placeholderSrc={FigmaImage} src={FigmaImage}></LazyLoadImage></div>
            <div className="Marquee">
                <LazyLoadImage placeholderSrc={GitHubImage} src={GitHubImage}></LazyLoadImage></div>
            <div className="Marquee">
                <LazyLoadImage placeholderSrc={HtmlImage} src={HtmlImage}></LazyLoadImage></div>
            <div className="Marquee">
                <LazyLoadImage placeholderSrc={JSImage} src={JSImage}></LazyLoadImage></div>
            <div className="Marquee">
                <LazyLoadImage placeholderSrc={MUIImage} src={MUIImage}></LazyLoadImage></div>
            <div className="Marquee">
                <LazyLoadImage placeholderSrc={ReactImage} src={ReactImage}></LazyLoadImage></div>
            <div className="Marquee">
                <LazyLoadImage placeholderSrc={TSImage} src={TSImage}></LazyLoadImage></div>
        </div>
    );
}