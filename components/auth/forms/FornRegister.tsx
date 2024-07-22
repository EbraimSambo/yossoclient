"use client"
import { Box, Button, InputBase, Link } from '@mui/material'
import React from 'react'
import { ControlInputBetween, FormAuth, InputContent, InputControl, InputStyleConfig } from './styleForm'
import { ContainerBetween, ContainerColumn, ContainerGrid } from '@/components/Global/styledGlobal'
import { ContainerCenter } from '@/components/layout/bases/styled'
import { LabelForm } from '@/components/_ui/Form'

const FormRegister = () => {
  return (
    <ContainerCenter>
      <FormAuth boxShadow={2}>
        <ControlInputBetween>
          <InputControl>
          <LabelForm> Primeiro Nome </LabelForm>
            <InputContent>
              <InputBase sx={InputStyleConfig} placeholder='email' />
            </InputContent>
          </InputControl>
          <InputControl>
          <LabelForm> Ultimo Nome </LabelForm>
            <InputContent>
              <InputBase sx={InputStyleConfig} placeholder='email' />
            </InputContent>
          </InputControl>
        </ControlInputBetween>
        <InputControl>
        <LabelForm> Seu enail </LabelForm>
          <InputContent>
            <InputBase sx={InputStyleConfig} placeholder='email' />
          </InputContent>
        </InputControl>
        <InputControl>
        <LabelForm> Criar Palavra-Passe </LabelForm>
          <InputContent>
            <InputBase sx={InputStyleConfig} placeholder='email' />
          </InputContent>
        </InputControl>
        <InputControl>
        <LabelForm> Repetir Palvra-Passe </LabelForm>
          <InputContent>
            <InputBase sx={InputStyleConfig} placeholder='email' />
          </InputContent>
        </InputControl>
        <ContainerBetween>
          <Button sx={{fontSize: 11, textTransform: "initial"}} href='/login'>Eu tenho uma conta</Button>
          <Button variant='contained'>Criar Conta </Button>
        </ContainerBetween>
      </FormAuth>
    </ContainerCenter>
  )
}

export default FormRegister