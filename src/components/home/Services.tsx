"use client"
import { services } from '@/utils/contents/data'
import { Box, Grid, styled, Typography } from '@mui/material'
import React from 'react'

const Item = styled(Box)((theme) => ({
  padding: 12
}))
const Header = styled(Box)((theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 5
}))
const Services = () => {
  return (
    <Box>
      <Typography component={"h2"} variant='h4' >Nossos Serviços</Typography>
      <Grid component={"ul"} container mt={2} width={"100%"} spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        {services.map((service, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item boxShadow={2} >
              <Header>
                {service.icon}
                <Typography> {service.service} </Typography>
              </Header>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Services