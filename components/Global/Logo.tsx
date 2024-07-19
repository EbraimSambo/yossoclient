import { Box, styled, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Logo = styled("div")({
  position: "relative",
  height: "30px",
  width: "30px"
})
const AppLogo = ({ color }: { color: "blank"|"blue" }) => {

  return (
    <Box>
      <Typography
        letterSpacing={2}
        color={color == "blank" ? "#fff": "#001265"}
        fontWeight={"900"}
        sx={{ textDecoration: "none", display: "flex", alignItems: "center", gap: ".1rem" }}
        component={"a"}
        variant='h2'
        href='/'
        fontSize={26}
      >
        <Logo>
          <Image src={color == "blank" ? "/images/icons/logo-blank.png": "/images/icons/logo.png"} fill alt="logo" priority />
        </Logo>
        <span>Yosso</span> </Typography>
    </Box>
  )
}

export default AppLogo