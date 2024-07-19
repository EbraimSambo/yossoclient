import { Course } from '../../config/interfaces/interfaces'
import { Box, Button, CardActions, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Body, CoverCourse, Duration, Item, Price } from './styled'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentIcon from '@mui/icons-material/Payment';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import { ContainerBetween, ContainerCenterGap } from '../Global/styledGlobal'
const CardCourse = ({ course }: { course: Course }) => {
    return (
        <Item boxShadow={2} component={"li"}>
            <CoverCourse>
                <Image src={course.cover} fill priority alt={`${course.title}`} />
            </CoverCourse>
            <Body>
                <Typography color={"#001265"} component={"h3"} fontSize={14} fontWeight={"900"} variant='h5'>
                    {course.title}
                </Typography>
                <Duration>
                    <ContainerCenterGap>
                        <AccessTimeIcon sx={{ mb: "3px" }} fontSize='small' />
                        <Typography color={"#212121"} component={"h3"} fontSize={14} fontWeight={"900"} variant='h5'>
                            Duração de {course.duration} dias
                        </Typography>
                    </ContainerCenterGap>
                </Duration>
                <Price >
                    <ContainerCenterGap>
                        <PaymentIcon fontSize='small' />
                        <Typography color={"#212121"} component={"h4"} fontSize={12} fontWeight={"900"} variant='h5'>
                            Investimento:  {course.price}kz
                        </Typography>
                    </ContainerCenterGap>
                </Price>
                <ContainerBetween>
                    <ContainerCenterGap>
                        <ModeStandbyIcon fontSize='small' />
                        <Typography color={"#212121"} component={"h4"} fontSize={12} fontWeight={"900"} variant='h5'>
                            Modalidade: Presencial
                        </Typography>
                    </ContainerCenterGap>
                    <Button sx={{ fontSize: 12, fontWeight: 600 }} variant='text'>Ver Detalhes</Button>
                </ContainerBetween>

            </Body >
        </Item >
    )
}

export default CardCourse