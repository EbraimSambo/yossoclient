import { mapSite } from '../../../../utils/contents/links'
import { Box, styled, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Container = styled(Box)(({ theme }) => ({
    display: "flex", 
    gap: "4rem",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: "2rem",
    }
}))

const Links = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: ".3rem",
}))
const MapSite = () => {
    return (
        <Container >
            {mapSite.map((map, index) => (
                <Box key={index} >
                    <Typography component={"h5"} fontSize={12} letterSpacing={2} textOverflow={"ellipsis"} >{map.title}</Typography>
                    <Links >
                        {map.routes.map((route, index) => (
                            <Link href={route.path} key={index}>
                                <Typography color={"primary.light"} component={"span"} fontSize={11} letterSpacing={2} > {route.title} </Typography>
                            </Link>
                        ))}
                    </Links>
                </Box>
            ))}
        </Container>
    )
}

export default MapSite