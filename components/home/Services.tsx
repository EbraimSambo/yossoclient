"use client"
import { services } from '../../utils/contents/data'
import { Box, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { ContainerCenterGap, ContainerColumn } from '../Global/styledGlobal'
import TitleSection from '../Global/TitleSection'

const Item = styled(Box)((theme) => ({
  padding: 12
}))

const Services = () => {
  return (
    <ContainerColumn component={"section"}>
      <TitleSection title={"Nossos Serviços"} />
      <Grid component={"ul"} container mt={2} width={"100%"} spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        {services.map((service, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item boxShadow={2} >
              <ContainerCenterGap>
                {service.icon}
                <Typography component={"h4"} letterSpacing={1} fontWeight={900} color={"primary"}> {service.service} </Typography>
              </ContainerCenterGap>
              <Typography sx={{pl: ".4rem",pt: ".2rem"}} component={"p"}> {service.desc} </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </ContainerColumn>
  )
}

export default Services