import React from 'react';
import './Logo.css'
import {NavLink} from "react-router-dom";

const Logo = () => {
  return (
    <logo className='logo'>
        <NavLink
          to="/Profile">
          <img src='https://media.glassdoor.com/sqll/405422/black-mountain-systems-squarelogo-1571277364058.png'></img>
        </NavLink>
    </logo>)
}

export default Logo;