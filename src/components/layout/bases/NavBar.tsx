import React from 'react'
import { NavbarBox } from './styled'
import { AppBar, List, ListItem, ListItemButton, ListItemText, SxProps, Typography } from '@mui/material'
import Link from 'next/link'
import { Theme } from '@emotion/react'
import AppLogo from '@/components/Global/Logo'

const logo: SxProps<Theme>={
   display: { xs: "none", sm: "block" },
}
const navItems = [
 {
  title: 'Início'
 },
 {
  title: 'Cursos'
 }, {
  title: 'Contactos'
 },  {
  title: 'Candidtura'
 },
];
const NavBar = () => {
  return (
    <AppBar position='fixed'>
      <NavbarBox>
      <AppLogo color={"#001265"} />
      <List sx={{display: "flex" ,}}>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </NavbarBox>
    </AppBar>
  )
}

export default NavBar