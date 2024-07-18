import { Box, Button, InputBase, styled, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
const Form = styled("div")(({ theme }) => ({
    background: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    height: "40px",
    display: "flex",
    alignItems: "center"
}))
const Container = styled(Box)(({ theme }) => ({
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    [theme.breakpoints.down("sm")]: {
        width: "100%", 
    }
}))
const Newletter = () => {
    return (
        <Container>
            <Typography fontSize={12} component={"h4"}> 
                Insira o seu email para estar atualizado
            </Typography>
            <Form>
                <InputBase sx={{ width: "100%", height: "100%", fontSize: 13 }} type='text' placeholder='ebraimsambo@gmail.com' />
                    <SendIcon fontSize='small' color='primary' />
            </Form>
        </Container>
    )
}

export default Newletter