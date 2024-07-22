import { inferRegister, schemaRegister } from "@/config/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { instanceGlobal } from "../contents/axios";
import { useState } from "react";
import { redirect } from "next/navigation";
import { clientURL } from "@/config/constants/constants";


export function useRegister() {
    const { register, handleSubmit, setError, reset,formState: { errors,isLoading } } = useForm<inferRegister>({
        resolver: zodResolver(schemaRegister)
    })

    const [errorMessage, setMessageError] = useState({
        error: false,
        message: ""
    })

    const [loader,setLoader] = useState(false)

    function sendData(data: inferRegister) {

        const {email,firstName,lastName,password,repeatPassword,phone} = data;
        if(password != repeatPassword) return setMessageError({error: true,message: "As palvras passes devem ser igauis!"})
        setMessageError({error: false,message: ""})
        setLoader(true)
        instanceGlobal.post("user/register", {
            email,
            firstName,
            lastName,
            password,
            phone,
        })
        .then((res)=>{
            reset()
            console.log(res)
            return window.location.assign(`${clientURL}/auth/thanks/${res.data.id}`)
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

            if(er?.response?.data?.message == "email"){
                setMessageError({error: true,message: "Este Emial já foi utilizado"})
            }
            if(er?.response?.data?.message == "phone"){
                setMessageError({error: true,message: "Este número de telemovel já utilizado"})
            }
        })
        .finally(()=>{
            setLoader(false)
        })

    }

    return { register, handleSubmit, sendData, errors,errorMessage,loader }
}