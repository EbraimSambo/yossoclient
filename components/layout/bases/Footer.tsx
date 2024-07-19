import React from 'react'
import { ContainerBetween, ContainerCenter, FooterBox } from './styled'
import Social from './partials/Social'
import AppLogo from '../../Global/Logo'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import MapSite from './partials/MapSite'
import Newsletter from './partials/Newsletter'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <FooterBox component={"footer"} >
            <ContainerBetween sx={{gap: "4rem",alignContent: "flex-start", marginBottom: "1rem"}}>
                <MapSite />
                <Newsletter />
            </ContainerBetween>
            <ContainerBetween>
                <Box>
                    <AppLogo color={"blank"} />
                    <Typography component={"address"} fontSize={13}>Urbanização Nova Vida, rua 15, casa 30.</Typography>
                </Box>
                <Social />
            </ContainerBetween>
            <ContainerCenter sx={{ mt: "2rem" }}>
                <Typography component={'p'} fontSize={12} >
                    Copyright &copy;{currentYear} Todos os direitos reservado |
                    <Link  href={"https://webao.netlify.app"} target='_blank' >
                        <Typography color='#fff' fontSize={12} component={"span"}> Web.ao </Typography>
                    </Link>
                </Typography>
            </ContainerCenter>
        </FooterBox>
    )
}

export default Footer