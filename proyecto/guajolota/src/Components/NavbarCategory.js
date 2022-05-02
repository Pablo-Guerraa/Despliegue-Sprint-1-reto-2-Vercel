import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledNavbarCategory} from '../Styles/StyledNavbarCategory'


export default function NavbarCategory() {
  const activeLink = ({isActive}) => {
    return{ 
      fontWeight: isActive ? 'bold' : 'normal', 
      textDecoration: 'none', 
      color: isActive ? 'rgba(250, 74, 12, 1)' : 'rgba(154, 154, 157, 1)',
      padding: '5px',
      borderBottom: isActive ? 'solid 3px rgba(250, 74, 12, 1)' : 'none'
    }
  }
  return (
    <StyledNavbarCategory>
      <NavLink to='/' style={activeLink}>Guajolotas</NavLink>
      <NavLink to='/bebidas' style={activeLink}>Bebidas</NavLink>
      <NavLink to='/tamales' style={activeLink}>Tamales</NavLink>
    </StyledNavbarCategory>
  )
}
