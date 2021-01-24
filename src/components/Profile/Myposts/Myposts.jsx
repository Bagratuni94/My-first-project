import React from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';
const MyPosts = (props) =>{

    let postsElements = props.posts.map ( posts => < Post message = {posts.message} likesCount = {posts.likesCount}  /> );
 
    return( 
     <div className={classes.postsBlock}>
      <h3>My posts</h3>
        <div>
            <div>
            <textarea></textarea>
            </div>
            <div>
            <button>Add post</button> <button>Remove</button>
            </div>    
        </div>
        <div className = {classes.myposts}>
         {postsElements}
        </div>
     </div>)
} 

export default MyPosts;