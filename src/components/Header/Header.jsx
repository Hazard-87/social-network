// import React from 'react';
// import styles from './Header.module.css';
// import {NavLink} from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
// import { makeStyles } from '@material-ui/core/styles';
// import Divider from "@material-ui/core/Divider";
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     paper: {
//         marginRight: theme.spacing(2),
//     },
// }));
//
// const Header = (props) => {
//     if (!props.profile.photos) {
//         props.profile.photos = ''
//     }
//
//     const classes = useStyles();
//
//     const [open, setOpen] = React.useState(false);
//     const anchorRef = React.useRef(null);
//
//     const handleToggle = () => {
//         setOpen((prevOpen) => !prevOpen);
//     };
//
//     const handleClose = (event) => {
//         if (anchorRef.current && anchorRef.current.contains(event.target)) {
//             return;
//         }
//
//         setOpen(false);
//     };
//
//     function handleListKeyDown(event) {
//         if (event.key === 'Tab') {
//             event.preventDefault();
//             setOpen(false);
//         }
//     }
//
//     const prevOpen = React.useRef(open);
//     React.useEffect(() => {
//         if (prevOpen.current === true && open === false) {
//             anchorRef.current.focus();
//         }
//
//         prevOpen.current = open;
//     }, [open]);
//
// const onEditMode = () => {
//     props.setEditMode(true)
//     }
//
//     return (
//         <header className={styles.header}>
//             <img src='http://pngimg.com/uploads/vkontakte/vkontakte_PNG31.png'/>
//             <div className={styles.login}>
//                 {props.isAuth
//                     ? <div>
//                     <div className={classes.root}>
//                             <div>
//                                 <Button
//                                     ref={anchorRef}
//                                     aria-controls={open ? 'menu-list-grow' : undefined}
//                                     aria-haspopup="true"
//                                     onClick={handleToggle}
//                                 >
//                                     <span><img src={props.profile.photos.small}/></span>
//                                 </Button>
//                                 <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//                                     {({ TransitionProps, placement }) => (
//                                         <Grow
//                                             {...TransitionProps}
//                                             style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//                                         >
//                                             <Paper>
//                                                 <ClickAwayListener onClickAway={handleClose}>
//                                                     <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
//                                                         <MenuItem onClick={onEditMode}>Edit Profile</MenuItem>
//                                                         <Divider />
//                                                         <MenuItem onClick={props.logout}>Logout</MenuItem>
//                                                     </MenuList>
//                                                 </ClickAwayListener>
//                                             </Paper>
//                                         </Grow>
//                                     )}
//                                 </Popper>
//                             </div>
//                         </div>
//                     </div>
//                     : <div className={styles.log}><NavLink to={'/login'}>login</NavLink></div>}
//             </div>
//         </header>
//     )
// }
//
// export default Header


import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    if (!props.profile.photos) {
        props.profile.photos = ''
    }
    return (
            <div>
                {props.isAuth
                    ? <div><span>{props.login}</span>
                        <button onClick={props.logout}>log out</button>
                    </div>
                    : <NavLink to={'/login'}>Sign In</NavLink>}
            </div>
    )
}

export default Header