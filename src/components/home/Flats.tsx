"use client"
import { flats } from '@/utils/contents/data'
import { Box, Button, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { ContainerCenter } from '../layout/bases/styled';
const Item = styled("div")(({ theme }) => ({
    padding: 12,
    borderRadius: 2,
}))
const Flats = () => {
    return (
        <Box>
            <Typography  component={"h2"} variant='h4' > Nossos Planos </Typography>
            <Grid component={"ul"} container width={"100%"} spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 16 }}>
                {flats.slice(0, 6).map((flat, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item sx={{ boxShadow: 2 }}>
                            <Typography color={"primary"} variant='h4' component={"h3"} > {flat.flat} </Typography>
                            <Typography color={"primary"} variant='h6' component={"h3"} >Preço: {flat.price} kz</Typography>
                            <Box component={"ul"} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                {flat.benefices.map((benefice, index) => (
                                    <Box  component={"li"} sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                        <DoneIcon color='success' fontSize='small' />
                                        <Typography color={"primary"}  key={index} component={"span"} variant='h6' fontSize={12} > {benefice.benefice} </Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box mt={3}>
                                <Button variant='outlined' >Escolher Plano</Button>
                            </Box>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Flats