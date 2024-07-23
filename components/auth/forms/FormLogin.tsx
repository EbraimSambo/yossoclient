"use client"
import { ContainerCenter } from '@/components/layout/bases/styled'
import { Button, CircularProgress, InputBase } from '@mui/material'
import React from 'react'
import { FormAuth, InputContent, InputControl, InputStyleConfig } from './styleForm'
import { AlertErrorForm, ErrorForm, LabelForm } from '@/components/_ui/Form'
import { ContainerBetween } from '@/components/Global/styledGlobal'
import { buttonConfig } from '@/components/_ui/Global'
import { useLogin } from '@/utils/post/login'

const FormLogin = () => {
  const {errorMessage,errors,register,handleSubmit,sendData,loader} =  useLogin()
  return (
    <ContainerCenter>
      <FormAuth onSubmit={handleSubmit(sendData)} component={"form"} boxShadow={2}>
      {loader && <ContainerCenter><CircularProgress size={18} /></ContainerCenter>}
      {errorMessage.error && <AlertErrorForm> {errorMessage.message} </AlertErrorForm>}
        <InputControl>
        <LabelForm> Seu enail </LabelForm>
          <InputContent>
            <InputBase {...register("email")} sx={InputStyleConfig} placeholder='email' />
          </InputContent>
          {errors && <ErrorForm> {errors.email?.message} </ErrorForm>}
        </InputControl>
        <InputControl>
        <LabelForm> Sua Palavra-Passe </LabelForm>
          <InputContent>
            <InputBase {...register("password")} type="password" sx={InputStyleConfig} placeholder='email' />
          </InputContent>
          {errors && <ErrorForm> {errors.password?.message} </ErrorForm>}
        </InputControl>
        <ContainerBetween>
          <Button sx={{fontSize: 11, textTransform: "initial"}} href='/register'>
          Não tenho uma conta
          </Button>
          <Button sx={buttonConfig}  type="submit" variant='contained'>Entrar </Button>
        </ContainerBetween>
      </FormAuth>
    </ContainerCenter>
  )
}

export default FormLogin