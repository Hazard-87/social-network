import React, {ChangeEvent} from "react";
import styles from './MyProfile.module.css';

type PropsType = {
    status: string
    updateStatus: (newstatus: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={styles.status}>
                {!this.state.editMode
                    ? <div><span onClick={this.activateEditMode}>{this.props.status}</span></div>
                    : <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                                  value={this.state.status}/></div>
                }
            </div>
        )
    }
}

export default ProfileStatus;