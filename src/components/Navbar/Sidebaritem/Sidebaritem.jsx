import React from 'react';
import classes from './Sidebaritem.module.css'
const SidebarItem = (props) => {
    return(
    
        <div className={classes.sidebars}> 
        {props.friendName}
        </div>)
  } 
  
  export default SidebarItem;