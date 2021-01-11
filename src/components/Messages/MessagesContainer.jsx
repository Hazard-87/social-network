import React from 'react';
import {connect} from "react-redux";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
    }
}

export default compose (
    connect(mapStateToProps),
    withAuthRedirect
)(Messages)