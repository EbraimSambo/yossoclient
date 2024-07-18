"use client"
import { media } from '@/utils/contents/data'
import { Box, Button, styled, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import RoomIcon from '@mui/icons-material/Room';
import Actions from './partials/Actions'

const Cover = styled("div")({
    position: "relative",
    height: "60vh"
})

const Container = styled("section")(({ theme }) => ({
    position: "relative",
    display: "grid",
    gap: 20,
    gridTemplateColumns: "50% 50%",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "100%",
        gap: 6,
        // direction: "rtl",
    }
}))

const Body = styled("div")(({ theme }) => ({
    padding: 10,
    background: theme.palette.primary.main
}))

const textConfig ={
    display: "flex", alignItems: "center", gap: 1,padding: 1
}
const InfoContacts = () => {
    return (
        <Container>
            <Box>
                <Cover>
                    <Image src={"/images/global/contact-1.jpg"} fill alt='contactos yosso' />
                </Cover>
                <Body>
                    <Typography fontSize={14}  sx={textConfig} color={"white"} >
                        <ContactPhoneIcon fontSize='small'  /> Contactos:
                        <span>926423787</span>-
                        <span>926423797</span>
                    </Typography>
                    <Box component={"ul"}>
                        {media.map((rede, index) => (
                            <Typography component={"a"} href={rede.url} fontSize={14} color={"white"} key={index} sx={textConfig} >
                                {rede.icon} {rede.title}:
                                <span>{rede.label} </span>
                            </Typography>
                        ))}
                    </Box>
                    <Typography sx={textConfig} color={"white"} >
                    <RoomIcon fontSize='small'  />
                        Localização:
                        <span>Urbanização Nova Vida, rua 15, casa 30</span>
                    </Typography>
                </Body>
            </Box>

            <Actions />
        </Container>
    )
}

export default InfoContacts