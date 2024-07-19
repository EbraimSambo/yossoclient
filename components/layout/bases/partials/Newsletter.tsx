import { Alert, Box, Button, CircularProgress, IconButton, InputBase, styled, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useNewsletter } from '../../../../utils/post/newslatter';
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
const Newsletter = () => {
    const { sendData, handleSubmit, errors, register, loader, success, setSuccess,touchedFields } = useNewsletter()
    return (
        <Container>
            {!success ?
                <Typography fontSize={12} component={"h4"}>
                    Insira o seu email para estar atualizado
                </Typography> :
                <Alert severity="success" action={<Button onClick={() => setSuccess(false)} color="inherit" size="small">Ok</Button>}>
                    Obrigado por enviar o se emeail
                </Alert>
            }
            <form onSubmit={handleSubmit(sendData)}>
                <Form>
                    <InputBase {...register("email")} sx={{ width: "100%", height: "100%", fontSize: 13 }} type='text' placeholder='ebraimsambo@gmail.com' />
                    {loader ? <CircularProgress size={18} /> :
                        <IconButton sx={{mr:0,p: "2px"}} type='submit' aria-label="delete">
                            <SendIcon fontSize='small' color='primary' />
                        </IconButton>
                    }
                </Form>
                {errors &&  <Typography component={"span"} mt={2} color={"error"} fontSize={12}> {errors?.email?.message} </Typography>}
            </form>
        </Container>
    )
}

export default Newsletter