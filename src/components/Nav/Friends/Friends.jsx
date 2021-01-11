import React from "react";
import classes from "./Friends.module.css";



// const Friends = (props) => {
//
//         return (
//         <div>
//             <div className={classes.friends}>
//                 <img src={props.ava}/> {props.name}
//             </div>
//         </div>
//     )
// }

class Friends extends React.Component {
    render() {
        return (
            <div>
                <div className={classes.friends}>
                    <img src={this.props.ava}/> {this.props.name}
                </div>
            </div>
        )
    }
}

export default Friends;