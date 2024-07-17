import React from "react";

export interface MainProps{
    children: React.ReactNode;
}

export interface Course{
    title: string,
    cover: string,
    price: string,
    duration: string,
    type:string
}