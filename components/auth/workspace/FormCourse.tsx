import React from 'react'
import { ControlInputBetween, InputContent, InputControl, InputStyleConfig } from '../forms/styleForm'
import { Button, CircularProgress, InputBase, TextareaAutosize } from '@mui/material';
import { ContainerBetween, ContainerColumn } from '@/components/Global/styledGlobal';
import { buttonConfig } from '@/components/_ui/Global';
import { useCourse } from '@/utils/post/course';
import { ErrorForm, LabelForm } from '@/components/_ui/Form';
import { ContainerCenter } from '@/components/layout/bases/styled';

const FormCourse = ({id}:{id:string}) => {
    const { errorMessage, errors, handleSubmit, register, loader, sendData } = useCourse(id)
    return (
        <ContainerColumn onSubmit={handleSubmit(sendData)} width={"100%"} maxWidth={700}  boxShadow={2} p={2} component={"form"} >
            {loader && <ContainerCenter><CircularProgress size={18} /></ContainerCenter>}
            <ControlInputBetween>
                <InputControl>
                    <LabelForm>Titulo do Curso</LabelForm>
                    <InputContent>
                        <InputBase {...register("title")} sx={InputStyleConfig} placeholder='Ex: Curso de Geografia' />
                    </InputContent>
                    {errors && <ErrorForm> {errors.title?.message} </ErrorForm>}
                </InputControl>
                <InputControl>
                <LabelForm>Duração do Curso</LabelForm>
                    <InputContent>
                        <InputBase {...register("duration")} sx={InputStyleConfig} placeholder='Ex: 2 Samanas' />
                    </InputContent>
                    {errors && <ErrorForm> {errors.duration?.message} </ErrorForm>}
                </InputControl>
            </ControlInputBetween>
            <ControlInputBetween>
                <InputControl>
                <LabelForm>Descrição do Curso</LabelForm>
                    <InputContent sx={{ height: "100px" }}>
                        <InputBase {...register("desc")} sx={InputStyleConfig} placeholder='Ex: 200000' />
                    </InputContent>
                    {errors && <ErrorForm> {errors.desc?.message} </ErrorForm>}
                </InputControl>
                <InputControl>
                <LabelForm>Preço</LabelForm>
                    <InputContent >
                        <InputBase {...register("price")} sx={InputStyleConfig}  placeholder='Ex: 200000'  />
                    </InputContent>
                    {errors && <ErrorForm> {errors.desc?.message} </ErrorForm>}
                </InputControl>
            </ControlInputBetween>
            <ContainerBetween>
                <Button type='submit' sx={buttonConfig} variant='contained'>Adicionar</Button>
            </ContainerBetween>
        </ContainerColumn>
    )
}

export default FormCourse