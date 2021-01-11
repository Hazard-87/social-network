import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import MyProfile from "./MyProfile/MyProfile";


const Profile = (props) => {

    return (
        <div>
                <div>
                    <MyProfile {...props} isOwner={props.isOwner} profile={props.profile}
                               status={props.status} updateStatus={props.updateStatus} editmode={props.editMode}/>
                </div>
                <div>
                    <MyPostsContainer/>
                </div>

        </div>
    )
}

export default Profile;