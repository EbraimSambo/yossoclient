import React from 'react'
import { NavbarBox } from './styled'
import { AppBar, List, ListItem, ListItemButton, ListItemText, SxProps, Typography } from '@mui/material'
import Link from 'next/link'
import { Theme } from '@emotion/react'
import AppLogo from '@/components/Global/Logo'
import { useScrollHeader } from '@/hooks/main'

const logo: SxProps<Theme>={
   display: { xs: "none", sm: "block" },
}
const navItems = [
 {
  title: 'Início',
  path: "/"
 },
 {
  title: 'Cursos',
  path: "/courses"
 }, {
  title: 'Contactos',
  path: "/contacts"
 },  {
  title: 'Candidtura',
  path: "/subscribe"
 },
];
type ProgressbarProps = {
  target: React.RefObject<HTMLElement>;
};


const NavBar = ({target}:ProgressbarProps) => {
  const {scroll,pathName} = useScrollHeader(target)
  return (
    <AppBar sx={ scroll ?{boxShadow: 4}:{boxShadow: 0}} position='fixed'>
      <NavbarBox>
      <AppLogo color={"#001265"} />
      <List sx={{display: "flex" ,  }} >
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton LinkComponent={"a"} href={item.path} sx={{ textAlign: 'center', fontWeight: "700" }}>
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