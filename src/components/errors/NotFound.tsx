"use client"
import React from 'react'
import { ContainerCenter } from '../layout/bases/styled'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

const NotFound = () => {
    return (
        <div>
            <ContainerCenter>
                <Box>
                    <Box sx={{ position: "relative", maxWidth: "900px", width: "100%", height: "60vh", m: "0 auto" }}>
                        <Image src={"/images/global/notfound.svg"} fill alt='not found' />
                    </Box>
                    <Typography textAlign={"center"} color={"#001265"} fontWeight={900} variant='h4'>
                         Pagina Não Encontrada, Erro 404. </Typography>
                </Box>
            </ContainerCenter>
        </div>
    )
}

export default NotFound