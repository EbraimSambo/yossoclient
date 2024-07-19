import React from 'react'
import { NavbarBox } from './styled'
import { AppBar, List, ListItem, ListItemButton, ListItemText, SxProps, Typography } from '@mui/material'
import Link from 'next/link'
import { Theme } from '@emotion/react'
import AppLogo from '../../Global/Logo'
import { useScrollHeader } from '../../../hooks/main'
import LinkApp from '../../Global/Link'

const logo: SxProps<Theme> = {
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
  }, {
    title: 'Candidtura',
    path: "/subscribe"
  },
];
type ProgressbarProps = {
  target: React.RefObject<HTMLElement>;
};


const NavBar = ({ target }: ProgressbarProps) => {
  const { scroll, pathName } = useScrollHeader(target)
  return (
    <AppBar sx={scroll ? { boxShadow: 4 } : { boxShadow: 0 }} position='fixed'>
      <NavbarBox>
        <AppLogo color={"blue"} />
        <List sx={{ display: "flex", }} >
          {navItems.map((item, index) => (
            <LinkApp key={index} href={item.path} >
              <ListItem key={index} disablePadding>
                <ListItemButton key={index}  sx={{textAlign: 'center', fontWeight: "900", color: "#001265" }}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </LinkApp>
          ))}
        </List>
      </NavbarBox>
    </AppBar>
  )
}

export default NavBar