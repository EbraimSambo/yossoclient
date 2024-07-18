"use client"
import { Grid, Typography } from '@mui/material'
import React from 'react'
import CardCourse from '../course/Card'
import { courses } from '@/utils/contents/data'
import { ContainerColumn } from '../Global/styledGlobal'
import TitleSection from '../Global/TitleSection'

const Courses = () => {
    return (
        <ContainerColumn component={"section"} sx={{maxWidth: "1000px", width: "100%", margin: "0 auto"}} >
            <TitleSection title={"Cursos em Destaques"} />
            <Grid component={"ul"} container mt={2} width={"100%"} spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                {courses.map((course, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <CardCourse course={course} />
                    </Grid>
                ))}
            </Grid>
        </ContainerColumn>
    )
}

export default Courses