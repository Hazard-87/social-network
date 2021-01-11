import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import MyProfile from "./MyProfile/MyProfile";
import Grid from "@material-ui/core/Grid";


const Profile = (props) => {

    return (
        <div>
            <Grid container direction="column">
                <Grid xs={12}>
                    <MyProfile {...props} isOwner={props.isOwner} profile={props.profile}
                               status={props.status} updateStatus={props.updateStatus} editmode={props.editMode}/>
                </Grid>
                <Grid xs={12}>
                    <MyPostsContainer/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile;