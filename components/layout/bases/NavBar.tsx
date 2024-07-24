import React from 'react'
import { ContainerCenter, ListMobile, ListNav, NavbarBox } from './styled'
import { AppBar, Button, List, ListItem, ListItemButton, ListItemText, SxProps, Typography } from '@mui/material'
import { Theme } from '@emotion/react'
import AppLogo from '../../Global/Logo'
import { useScrollHeader } from '../../../hooks/main'
import LinkApp from '../../Global/Link'
import { buttonConfig } from '@/components/_ui/Global'
import { Session } from 'next-auth'
import BtnAuth from '@/components/auth/user/BtnAuth'

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
  session: Session | null
};


const NavBar = ({ target, session }: ProgressbarProps) => {
  const { scroll, pathName } = useScrollHeader(target)
  return (
    <AppBar sx={pathName == "/" ? scroll ? { boxShadow: 4 } : { boxShadow: 0 } : { boxShadow: 4 }} position='fixed'>
      <NavbarBox>
        <AppLogo color={"blue"} />
        <ListNav >
          {navItems.map((item, index) => (
            <LinkApp key={index} href={item.path} >
              <ListItem key={index} disablePadding>
                <ListItemButton key={index} sx={{ textAlign: 'center', fontWeight: "900", color: "#001265" }}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </LinkApp>
          ))} 
          <ContainerCenter>
          {!session?<Button sx={buttonConfig} href='/login' variant='contained' >Conectar-me</Button>:
             <BtnAuth session={session} />}
          </ContainerCenter>
        </ListNav>
        <ListMobile>
           <ContainerCenter>
          {!session?<Button sx={buttonConfig} href='/login' variant='contained' >Conectar-me</Button>:
             <BtnAuth session={session} />}
          </ContainerCenter>         
        </ListMobile>
      </NavbarBox>
    </AppBar>
  )
}

export default NavBar