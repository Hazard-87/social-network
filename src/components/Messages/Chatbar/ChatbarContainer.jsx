import React from 'react';
import {addMessageCreateAction} from "../../../redux/dialogsReducer";
import Chatbar from "./Chatbar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageCreateAction(newMessageBody))
        }
    }
}

const ChatbarContainer = connect(mapStateToProps, mapDispatchToProps)(Chatbar);

export default ChatbarContainer;