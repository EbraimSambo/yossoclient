import { inferCourse, inferRegister, schemaCourse, schemaRegister } from "@/config/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { instanceGlobal } from "../contents/axios";
import { useState } from "react";
import { clientURL } from "@/config/constants/constants";


export function useCourse(id:string) {
    const { register, handleSubmit, setError, reset,formState: { errors,isLoading } } = useForm<inferCourse>({
        resolver: zodResolver(schemaCourse)
    })

    const [errorMessage, setMessageError] = useState({
        error: false,
        message: ""
    })

    const [loader,setLoader] = useState(false)

    function sendData(data: inferCourse) {

        const {desc,duration,title,price} = data;
        setMessageError({error: false,message: ""})
        setLoader(true)
        instanceGlobal.post(`course/${id}`, {
            desc,
            duration,
            title,
            price
        })
        .then((res)=>{
            reset()
            console.log(res)
            // return window.location.assign(`${clientURL}/auth/thanks/${res.data.id}`)
        })
        .catch((er)=>{
            console.log(er.response);
            console.log(er);
            console.log(er.response?.status);
            if(er.code === "ERR_NETWORK"){
                setMessageError({error: true,message: "Ups! alguma coisa correu mal, com a sua conexão, tente mais tarde, ou atualize a pagina!"})
            }
            if(er?.response?.status == 400){
                setMessageError({error: true,message: "Up! Alguma coisa correu mal, com a sua conexão, tente mais tarde!"})
            }
        })
        .finally(()=>{
            setLoader(false)
        })

    }

    return { register, handleSubmit, sendData, errors,errorMessage,loader }
}