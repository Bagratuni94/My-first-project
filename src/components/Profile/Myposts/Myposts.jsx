import React from 'react';
import classes from './Myposts.module.css';
import Post from './Post/Post';
const MyPosts = () =>{
    return( 
     <div>
      My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className= {classes.myposts}>
         <Post message ='Hy my name is Davit' likesCount='0'/>
         <Post message ='OOO I am very happy' likesCount='10'/>
        </div>
     </div>)
} 

export default MyPosts;