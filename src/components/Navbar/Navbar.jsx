import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import SidebarItem from './Sidebaritem/Sidebaritem';

const Navbar = (props) => {
  let sidebarsElements = props.state.friends.map(friends => < SidebarItem friendName={friends.friendName} />)
  return (
    <navbar className={classes.navbar}>
      <div className={classes.item}> <NavLink to="/Dialogs" activeClassName={classes.active}> Messages </NavLink> </div>
      <div className={classes.item}> <NavLink to="/News" activeClassName={classes.active}> News </NavLink> </div>
      <div className={classes.item}> <NavLink to="/Music" activeClassName={classes.active}> Music </NavLink> </div>
      <div className={classes.item}> <NavLink to="/Settings" activeClassName={classes.active}> Settings </NavLink> </div>
      {sidebarsElements}
    </navbar>)
}

export default Navbar;