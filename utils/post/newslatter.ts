import { inferMail, schemaMail } from "../../config/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { instanceGlobal } from "../contents/axios";
import { useState } from "react";


export function useNewsletter(){
    const {register,handleSubmit,reset,setError,formState: {errors, touchedFields}} = useForm<inferMail>({
        resolver: zodResolver(schemaMail)
    })

    const [loader, setLoader] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorLoader, SetErrorLoader] = useState("")
    function sendData(data: inferMail){
        setLoader(true)
        instanceGlobal.post("mail",{
            email: data.email
        })
        .then((res)=>{
            reset()
            setSuccess(true)
        })
        .catch((error)=>{
            console.log(error)
            if(error) setError("email", {type: "custom",message: "Alguma coisa ocorreu mau, tente mais tarde!"})
        })
        .finally(()=>{
            setLoader(false)
        })
    }


    return {sendData, 
        register,
        handleSubmit,
        setSuccess,
        errors,loader,success,touchedFields}
}