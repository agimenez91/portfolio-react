import Css from "./svg/Css";
import Elementor from "./svg/Elementor";
import Figma from "./svg/Figma";
import Github from "./svg/Github";
import Html from "./svg/Html";
import Javascript from "./svg/Javascript";
import LeaveTo from "./svg/LeaveTo";
import Php from "./svg/Php";
import React from "./svg/React";
import RightArrow from "./svg/RightArrow";
import Sass from "./svg/Sass";
import Tilda from "./svg/Tilda";
import Wordpress from "./svg/Wordpress";

export const IconMap = {
    "leave-to": (size) => <LeaveTo size={size}/>,
    "right-arrow": (size) => <RightArrow size={size}/>,
    "figma": (size) => <Figma size={size}/>,
    "tilda": (size) => <Tilda size={size}/>,
    "wordpress": (size) => <Wordpress size={size}/>,
    "html": (size) => <Html size={size}/>,
    "css": (size) => <Css size={size}/>,
    "javascript": (size) => <Javascript size={size}/>,
    "react": (size) => <React size={size}/>,
    "github": (size) => <Github size={size}/>,
    "elementor": (size) => <Elementor size={size}/>,
    "php": (size) => <Php size={size}/>,
    "sass": (size) => <Sass size={size}/>,
}
