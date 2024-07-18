"use client"
import { Box, Button, Grid, styled, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ContainerGrid, sxFlexGap } from '../Global/styledGlobal'
import DoneIcon from '@mui/icons-material/Done';

const ContentImage = styled("div")({
    position: "relative",
    width: "100%",
    height: "60vh",
})
const Container = styled("div")(({ theme }) => ({
    position: "relative",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "100%",
        gap: 6,
        // direction: "rtl",
    }
}))
const InfoCourse = () => {
    return (
        <Container >
            <Grid xs={2} sm={4} md={4} >
                <ContentImage>
                    <Image src={"/images/global/banner-2.png"} fill alt='banner' />
                </ContentImage>
            </Grid>
            <Grid xs={2} sm={4} md={4} pl={"1rem"}>
                <Typography component={"h1"} variant='h4' fontWeight={900} color={"primary"} >
                    Conhença os cursos da rea das ciencias economicas e gestão 
                </Typography>
                <Typography mt={3} component={"p"} color={"primary"} fontWeight={600}>
                    Inscreva-se em um dos nossos cursos tanto presencial, como de forma online
                </Typography>
                <Box sx={sxFlexGap}>
                    <Button variant='contained'>Encontrar Cursos</Button>
                </Box>
            </Grid>

        </Container>
    )
}

export default InfoCourse