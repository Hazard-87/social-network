import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setAuthUserData, logout})(HeaderContainer);