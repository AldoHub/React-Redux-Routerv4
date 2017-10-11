import React from 'react'
import { NavLink } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Nav = () => (

    <nav className="nav">
      <ul>
        <li><NavLink exact={true} to='/' activeClassName="active" >Home</NavLink></li>
        <li><NavLink exact={true}to='/users' activeClassName="active">Users</NavLink></li>
      </ul>
    </nav>
    
 
)

export default Nav
