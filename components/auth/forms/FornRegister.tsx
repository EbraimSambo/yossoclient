"use client"
import { Box, Button, CircularProgress, InputBase, Link, Typography } from '@mui/material'
import React from 'react'
import { ControlInputBetween, FormAuth, InputContent, InputControl, InputStyleConfig } from './styleForm'
import { ContainerBetween} from '@/components/Global/styledGlobal'
import { ContainerCenter } from '@/components/layout/bases/styled'
import { AlertErrorForm, ErrorForm, LabelForm } from '@/components/_ui/Form'
import { buttonConfig } from '@/components/_ui/Global'
import { useRegister } from '@/utils/post/register'

const FormRegister = () => {
  const {handleSubmit,register,errors,loader,sendData,errorMessage} = useRegister()
  return (
    <ContainerCenter>
      <FormAuth component={"form"} boxShadow={2} onSubmit={handleSubmit(sendData)} >
        {loader && <ContainerCenter><CircularProgress size={18} /></ContainerCenter>}
        {errorMessage.error && <AlertErrorForm> {errorMessage.message} </AlertErrorForm> }
        <ControlInputBetween>
          <InputControl>
          <LabelForm> Primeiro Nome </LabelForm>
            <InputContent>
              <InputBase {...register("firstName")} sx={InputStyleConfig} placeholder='Primeiro Nome' />
            </InputContent>
            {errors && <ErrorForm> {errors.firstName?.message} </ErrorForm>}
          </InputControl>
          <InputControl>
          <LabelForm> Ultimo Nome </LabelForm>
            <InputContent>
              <InputBase  {...register("lastName")} sx={InputStyleConfig} placeholder='Segundo Nome'/>
            </InputContent>
            {errors && <ErrorForm> {errors.lastName?.message} </ErrorForm>}
          </InputControl>
        </ControlInputBetween>
        <InputControl>
        <LabelForm> Seu enail </LabelForm>
          <InputContent>
            <InputBase {...register("email")} sx={InputStyleConfig} placeholder='vivaldo@gmail.com' />
          </InputContent>
          {errors && <ErrorForm> {errors.email?.message} </ErrorForm>}
        </InputControl>
        <InputControl>
        <LabelForm> Criar Palavra-Passe </LabelForm>
          <InputContent>
            <InputBase {...register("password")} type='password' sx={InputStyleConfig} placeholder='min:6 palavras' />
          </InputContent>
          {errors && <ErrorForm> {errors.password?.message} </ErrorForm>}
        </InputControl>
        <InputControl>
        <LabelForm> Repetir Palvra-Passe </LabelForm>
          <InputContent>
            <InputBase {...register("repeatPassword")} type='password' sx={InputStyleConfig} placeholder='repetir senha' />
          </InputContent>
          {errors && <ErrorForm> {errors.repeatPassword?.message} </ErrorForm>}
        </InputControl>
        <ContainerBetween>
          <Button sx={buttonConfig} href='/login'>Eu tenho uma conta?</Button>
          <Button type='submit' sx={buttonConfig}  variant='contained'>Criar Conta </Button>
        </ContainerBetween>
      </FormAuth>
    </ContainerCenter>
  )
}

export default FormRegister