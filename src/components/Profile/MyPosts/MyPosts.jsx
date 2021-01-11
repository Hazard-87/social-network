import React from 'react';
import styles from './MyPosts.module.css';
import Posts from "../Posts/Posts";
import * as form from "redux-form";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControl";


const MyPosts = React.memo(props => {
    let postElements = [...props.posts].reverse().map((post, index) => <Posts key={index} message={post.post} likesCount={post.likesCount}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostBody)
        values.newPostBody = ''
    }
    return (
        <div>
            <hr/>
            <div>
                <MyPostsReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    )
})

let MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.field}>
                <Field component={Textarea} name={'newPostBody'}/>
            </div>
            <div>
                <button onClick={props.handleSubmit}>
                    Send
                </button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'addPostForm'})(MyPostsForm)

export default MyPosts;