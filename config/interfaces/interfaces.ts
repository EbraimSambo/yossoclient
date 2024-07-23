import { Session } from "next-auth";
import React from "react";

export interface MainProps{
    children: React.ReactNode;
    session?: Session | null
}

export interface Course{
    title: string,
    cover: string,
    price: string,
    duration: string,
    type:string
}