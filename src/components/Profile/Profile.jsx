import React from 'react';
import MyPosts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) =>{
    return(
     <div>  
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}/>
     </div>)
} 

export default Profile;