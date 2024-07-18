"use client"
import { Box, styled, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'


const Cover = styled("div")({
    // position: "relative",
    // height: "40px",

})
const Container = styled("div")({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2rem"
})
const PaymentMethod = () => {
    return (
        <Box bgcolor={"primary"} p={"1rem"} >
            <Typography>Formas de Pagamentos</Typography>
            <Container>
                <Cover>
                    <Image src="/images/icons/multicaixa.png" height={25} width={180} alt="logo" />
                </Cover>
                <Cover>
                    <Image src="/images/icons/logobfa.png" height={24} width={70} alt="logo" />
                </Cover>
                <Cover>
                    <Image src="/images/icons/logo-baidirecto.png" height={30} width={100} alt="logo" />
                </Cover>
            </Container>
        </Box>
    )
}

export default PaymentMethod