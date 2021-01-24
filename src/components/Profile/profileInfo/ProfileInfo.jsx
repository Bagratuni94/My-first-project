import React from 'react';
import classes from './ProfileInfo.module.css';
const ProfileInfo = () =>{
 return(
    <div>
        <div className={classes.profile}>
          <img src='https://www.mountainphotography.com/images/xl/20141030-Kala-Patthar-Panorama.jpg'></img> 
        </div>
        <div className={classes.descriptionBlock}>
          avatar + discription
        </div>
    </div>)
}

export default ProfileInfo;