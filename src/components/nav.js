import React from 'react'
import { NavLink } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Nav = () => (
<div>
    <nav className="nav">
     <h3 className="menu">Menu &#9776;</h3>
      <ul>
        <li><h2>React Boilerplate</h2></li>
        <li><NavLink exact={true} to='/' activeClassName="active" >Home</NavLink></li>
        <li><NavLink exact={true}to='/users' activeClassName="active">Users</NavLink></li>
      </ul>
    </nav>
    <header>
        <h1>React + Redux + Router Boilerplate</h1>
        <p>This is a simple app that can be used as a template for react/redux apps.</p>
    </header>
 </div>   
 
)

export default Nav
