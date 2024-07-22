"use client"
import { ContainerCenter } from '@/components/layout/bases/styled'
import { Box, Button, InputBase } from '@mui/material'
import React from 'react'
import { FormAuth, InputContent, InputControl, InputStyleConfig } from './styleForm'
import { LabelForm } from '@/components/_ui/Form'
import { ContainerBetween } from '@/components/Global/styledGlobal'

const FormLogin = () => {
  return (
    <ContainerCenter>
      <FormAuth boxShadow={2}>
        <InputControl>
        <LabelForm> Seu enail </LabelForm>
          <InputContent>
            <InputBase sx={InputStyleConfig} placeholder='email' />
          </InputContent>
        </InputControl>
        <InputControl>
        <LabelForm> Sua Palavra-Passe </LabelForm>
          <InputContent>
            <InputBase sx={InputStyleConfig} placeholder='email' />
          </InputContent>
        </InputControl>
        <ContainerBetween>
          <Button sx={{fontSize: 11, textTransform: "initial"}} href='/register'>
          Não tenho uma conta
          </Button>
          <Button variant='contained'>Criar Conta </Button>
        </ContainerBetween>
      </FormAuth>
    </ContainerCenter>
  )
}

export default FormLogin