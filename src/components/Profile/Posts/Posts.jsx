import React from 'react';
import classes from './Posts.module.css';


const Posts = (props) => {

    let newCreatePost = React.createRef()

    let newComment = ()=> {
        // let post = newCreatePost.current.value
        // newCreatePost.current.value = ''
    }

  return (
      <div className={classes.post}>
      <div className={classes.item}>
          <img src='https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg'/> {props.message}
      </div>
          <div className={classes.like}>
              <img src='https://img.icons8.com/cotton/2x/facebook-like.png' />
              {props.likesCount}
          </div>
          <div>
              <textarea />
          </div>
              <div>
                  <button onClick={newComment}>send
                  </button>
          </div>
      </div>
  )
}

export default Posts;