import AppLogo from '@/components/Global/Logo'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { ContainerCenter } from '../styled'

const FooterSecondary = () => {
    return (
        <ContainerCenter p={3}>
            <Box sx={{width: "100%", maxWidth: "390px", display: "flex", flexDirection: "column", gap:".3rem",alignItems: "center", justifyContent: "center"}}>
                <AppLogo color='blue' />
                <Typography textAlign={"center"} fontSize={13} color={"primary"}>
                    Maís do que um local de formação, 
                    é a garantia das suas fiananças, num futuro prospero...
                </Typography>
            </Box>
        </ContainerCenter>
    )
}

export default FooterSecondary