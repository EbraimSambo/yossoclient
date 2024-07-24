"use client"
import { Box, Button, Grid, styled, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ContainerGrid, sxFlexGap } from '../Global/styledGlobal'
import DoneIcon from '@mui/icons-material/Done';
import { buttonConfig } from '../_ui/Global'

const ContentImage = styled("div")({
    position: "relative",
    width: "100%",
    height: "60vh",
})
const Container = styled("div")(({theme})=>({
    position: "relative",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    [theme.breakpoints.down("md")]:{
        gridTemplateColumns: "100%",
        gap: 6,
        // direction: "rtl",
    }
}))
const Banner = () => {
    return (
        <Container >
            <Grid xs={2} sm={4} md={4} pl={"1rem"}>
                <Typography component={"h1"} variant='h4' fontWeight={900} color={"primary"} >
                    Tudo o que você precisa para ter sucesso com as suas contas
                </Typography>
                <Typography mt={3} component={"p"} color={"primary"} fontWeight={600}>
                    Markting + Consultória + Cursos com até 26% de desconto
                </Typography>
                <Box component={"ul"}>
                    <Typography sx={sxFlexGap} color={"primary"} component={"li"} >
                        <DoneIcon fontSize='small' color={"success"} />
                        <span>Cursos Profissionais</span>
                    </Typography>
                    <Typography sx={sxFlexGap} color={"primary"} component={"li"} >
                        <DoneIcon fontSize='small' color={"success"} />
                        <span>Bradding infalivél</span>
                    </Typography>
                    <Typography sx={sxFlexGap} color={"primary"} component={"li"} >
                        <DoneIcon fontSize='small' color={"success"} />
                        <span>Planejamento Eficiente</span>
                    </Typography>
                </Box>
                <Box sx={sxFlexGap}>
                    <Button sx={buttonConfig} variant='contained'>Conhecer os planos</Button>
                    <Button sx={buttonConfig} variant='outlined' >Compraar cursos</Button>
                </Box>
            </Grid>
            <Grid xs={2} sm={4} md={4} >
                <ContentImage>
                    <Image src={"/images/global/banner-2.png"} fill alt='banner' />
                </ContentImage>
            </Grid>
        </Container>
    )
}

export default Banner