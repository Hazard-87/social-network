import React from 'react';
import styles from './MyPosts.module.css';
import Posts from "../Posts/Posts";
import * as form from "redux-form";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControl";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";


const MyPosts = React.memo(props => {
    let postElements = [...props.posts].reverse().map(post => <Posts message={post.post} likesCount={post.likesCount}/>)

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
    const useStyles = makeStyles((theme) => ({
        field: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '98ch',
            },
        },
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '150px',
                float: 'right',
                marginRight: '13px',
                marginBottom: '10px'
            }
        }
    }));
    const classes = useStyles()

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.field}>
                <Field component={Textarea} name={'newPostBody'} label={'New Post'} />
            </div>
            <div className={classes.root}>
                <Button onClick={props.handleSubmit} variant="contained" color="primary"
                         endIcon={<Icon>send</Icon>}>
                    Send
                </Button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'addPostForm'})(MyPostsForm)

export default MyPosts;