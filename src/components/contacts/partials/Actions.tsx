import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { ContainerColumn, ContainerGrid } from '@/components/Global/styledGlobal';
const Actions = () => {
    return (
        <ContainerColumn>
            <Box>
                <Typography color={"primary"} fontWeight={900} component={"h1"} variant='h5' > Nossoas Contactos</Typography>
                <Typography component={"p"}>
                    Para contactar a Yosso, tu podes faze-lo de diferentes maneiras, a qualuer
                    momento ou em qualquer lugar. Estamos disponivel para responder todas
                    as suas questões.
                </Typography>
            </Box>
            <Box>
                <Typography color={"primary"} fontWeight={900} component={"h2"} variant='h6' > De Forma Digital</Typography>
                <Typography component={"p"}>
                    Estamos disponiveis para entrar em contacto
                    com o nosso Call-center das 7h as 20h, de segunda a sexta.
                    Podendo faze-lo por chamada, enviou de email ou sms.
                </Typography>
            </Box>
            <Box>
                <Typography color={"primary"} fontWeight={900} component={"h2"} variant='h6' > Presencialmente</Typography>
                <Typography component={"p"}>
                    Podes visitar as nossas instalações de forma presencial
                    das 9h as 16h, no seguinte endereço Urbanização Nova Vida, rua 15, casa 30.
                </Typography>
            </Box>
            <Box>
                <Typography color={"primary"} fontWeight={900} component={"h2"} variant='h6' > Enviando-nos uma mensagem</Typography>
                <Typography component={"p"}>
                    Podes enviar uma mensagem aqui mesmo em nosso site,
                    relatando as questões de forma sucinta, clicando no seguinte botão.
                </Typography>
            </Box>
            <Box>
            <Button variant="outlined" startIcon={<ChatBubbleIcon />}>
                Enviar
            </Button>
            </Box>

        </ContainerColumn>
    )
}

export default Actions