import React from 'react';
import MyPosts from './Myposts/Myposts';
import classes from './Profile.module.css';
const Profile = () =>{
    return(
     <div>  
       <div className={classes.profile}>
        <img src='https://www.mountainphotography.com/images/xl/20141030-Kala-Patthar-Panorama.jpg'></img> 
       </div>
       <div className={classes.item}>
        avatar + discription
       </div>
      <MyPosts/>
     </div>)
} 

export default Profile;