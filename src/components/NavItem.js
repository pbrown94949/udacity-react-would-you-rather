import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ exact, label, to }) => (
  <li>
    <NavLink to={to} exact={exact} activeClassName='active'>
      {label}
    </NavLink>
  </li>
)

export default NavItem
