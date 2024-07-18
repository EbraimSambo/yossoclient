import { Course } from '@/config/interfaces/interfaces'
import { Button, CardActions, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Body, CoverCourse, Duration, Item, Price } from './styled'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SellIcon from '@mui/icons-material/Sell';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { ContainerCenterGap } from '../Global/styledGlobal'
const CardCourse = ({ course }: { course: Course }) => {
    return (
        <Item boxShadow={2} component={"li"}>
            <CoverCourse>
                <Image src={course.cover} fill priority alt={`${course.title}`} />
            </CoverCourse>
            <Body>
                <Typography color={"#424242"} component={"h3"} fontSize={14} fontWeight={"900"} variant='h5'>
                    {course.title}
                </Typography>
                <Duration>
                    <ContainerCenterGap>
                        <AccessTimeIcon fontSize='small' />
                        <Typography color={"#212121"} component={"h3"} fontSize={14} fontWeight={"900"} variant='h5'>
                            Duração de {course.duration} dias
                        </Typography>
                    </ContainerCenterGap>
                </Duration>
                <Price >
                    <Typography color={"#212121"} component={"h4"} fontSize={12} fontWeight={"900"} variant='h5'>
                        {course.price}kz
                    </Typography>
                </Price>
                <Typography color={"#212121"} component={"h4"} fontSize={12} fontWeight={"900"} variant='h5'>
                    Presencial
                </Typography>
            </Body>
        </Item>
    )
}

export default CardCourse