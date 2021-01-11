import preloader from "../../../assets/images/Preloader.svg";
import classes from './Preloader.module.css'
import React from "react";

const Preloader = (props) => {
    return <img src={preloader} className={classes.spinner}/>
}

export default Preloader;