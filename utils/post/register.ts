import { inferRegister, schemaRegister } from "@/config/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { instanceGlobal } from "../contents/axios";
import { useState } from "react";


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

        const {email,firstName,lastName,password,repeatPassword} = data;
        if(password != repeatPassword) return setMessageError({error: true,message: "As palvras passes devem ser igauis!"})
        setMessageError({error: false,message: ""})
        setLoader(true)
        instanceGlobal.post("user/register", {
            email,
            firstName,
            lastName,
            password
        })
        .then((res)=>{
            reset()
            console.log(res)
        })
        .catch((er)=>{
            console.log(er.response);
            console.log(er.response.status);
            if(er?.response?.status == 400){
                setMessageError({error: true,message: "Alguma coisa ocorreu mal"})
            }
            
        })
        .finally(()=>{
            setLoader(false)
        })

    }

    return { register, handleSubmit, sendData, errors,errorMessage,loader }
}