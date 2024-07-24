import { Box, Button, InputBase } from '@mui/material'
import React from 'react'
import { ControlInputBetween, InputContent, InputControl, InputStyleConfig } from '../forms/styleForm'
import { ContainerBetween, ContainerColumn } from '@/components/Global/styledGlobal'
import { buttonConfig } from '@/components/_ui/Global'

const EditProfile = () => {
    return (
        <Box>
            <ContainerColumn>
                <ControlInputBetween>
                    <InputControl>
                        <InputContent>
                            <InputBase sx={InputStyleConfig} placeholder='Primeiro Nome' />
                        </InputContent>
                    </InputControl>
                    <InputControl>
                        <InputContent>
                            <InputBase sx={InputStyleConfig} placeholder='Segundo Nome' />
                        </InputContent>
                    </InputControl>
                </ControlInputBetween>
                <ControlInputBetween>
                    <InputControl>
                        <InputContent>
                            <InputBase sx={InputStyleConfig} placeholder='Camama, Luanda, Angola' />
                        </InputContent>
                    </InputControl>
                    <InputControl>
                        <InputContent>
                            <InputBase sx={InputStyleConfig} placeholder='939993994' />
                        </InputContent>
                    </InputControl>
                </ControlInputBetween>
                <InputControl>
                    <InputContent sx={{ height: "100px" }}>
                        <InputBase sx={InputStyleConfig} placeholder='939993994' />
                    </InputContent>
                </InputControl>
                <ContainerBetween>
                    <Button type='submit' sx={buttonConfig} variant='contained'>Editar</Button>
                </ContainerBetween>
            </ContainerColumn>
        </Box>
    )
}

export default EditProfile