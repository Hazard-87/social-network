// import preloader from "../../../assets/images/Preloader.svg";
// import classes from './Preloader.module.css'
// import React from "react";
//
// const Preloader = (props) => {
//     return <img src={preloader} className={classes.spinner}/>
// }
//
// export default Preloader;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './Preloader.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Preloader = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root + ' ' + styles.spinner}>
            <CircularProgress />
        </div>
    );
}

export default Preloader;