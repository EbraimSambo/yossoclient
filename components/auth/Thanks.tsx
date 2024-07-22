"use client"
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ContainerCenter } from '../layout/bases/styled'


const Thanks = () => {

    return (
        <ContainerCenter>
            <Box width={"100%"}>
                <Box sx={{position: "relative",width: "100%",maxWidth: "360px", height: "360px",m: "0 auto"}}>
                    <Image src={"/images/global/celebration.svg"} fill alt='celebration' />
                </Box>
                <Typography textAlign={"center"} fontWeight={700} color={"primary"} variant='h4' >Obrigado Por se cadrastares!</Typography>
                <Typography textAlign={"center"} fontWeight={700} color={"primary"} variant='h4' fontSize={16} >Enviamos-lhe um E-mail, para verificar a tua conta!</Typography>
               <Typography  textAlign={"center"} ><Button sx={{textAlign: "center", textTransform: "initial"}} href='/login'>Entrar na Minha Conta</Button></Typography> 
            </Box>
        </ContainerCenter>
    )
}

export default Thanks