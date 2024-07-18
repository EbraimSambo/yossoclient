import { styled, Typography } from '@mui/material'
import React from 'react'

const Container = styled("div")(({ theme }) => ({
  maxWidth: "380px",
  width: "100%",
}))

const text = {
  fontWeight: "900",
  borderBottom: "2px solid #001265",
  paddingBottom: ".3rem"
}
const TitleSection = ({ title }: { title: string }) => {
  return (
    <Container>
      <Typography color={"primary"} sx={text} component={"h2"} variant='h4' >{title}</Typography>
    </Container>
  )
}

export default TitleSection