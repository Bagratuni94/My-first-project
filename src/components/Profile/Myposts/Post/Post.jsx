import React from 'react';
import classes from './Post.module.css'
const Post=(props) => {
    return(
        <div className={classes.item}>
            <img src='https://th.bing.com/th/id/OIP.2eJCOwK0cuV9HKGKsx2Z2QHaHa?pid=Api&rs=1'></img>
                {props.message}
                <div>
                <span>Like</span> {props.likesCount}
                </div>
        </div>)
}
export default Post;