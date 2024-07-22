import { inferLogin, schemaLogin } from "@/config/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { instanceGlobal } from "../contents/axios";


export function useLogin(){
    const {handleSubmit,register,setError, reset,formState:{errors}} = useForm<inferLogin>({
        resolver: zodResolver(schemaLogin)
    })

    const [errorMessage, setMessageError] = useState({
        error: false,
        message: ""
    })

    const [loader,setLoader] = useState(false)

    function sendData(data: inferLogin){
        const {email,password} = data
        setMessageError({error: false,message: ""})
        setLoader(true)
        instanceGlobal.post("auth/login",{
            email,
            password
        })
        .then((res)=>{
            reset()
            console.log(res)
        })
        .catch((er)=>{
            console.log(er.response);
            console.log(er);
            console.log(er.response?.status);
            if(er.code === "ERR_NETWORK"){
                setMessageError({error: true,message: "Ups! alguma coisa correu mal, com a sua conexão, tente mais tarde, ou atualize a pagina!"})
            }
            if(er.response.status === 401){
                setMessageError({error: true,message: "O seu email ou palavra-passe estão incirrevtos!"})
            }
        })
        .finally(()=>{
            setLoader(false)
        })
    }

    return {handleSubmit,errorMessage,register,errors,sendData,loader}

}
// 


// 
// DATABASE_URL="mysql://root:@localhost:3306/yosso"
// jwtSecretKey=HgYdLksz3WMSgWh0CF31z9daZuxK10SK7n94ER9ZtPGRTfCYQO/c/B+jHFVkTp0jmw5ffYktfF97iSF1IidW5w==
// jwtRefreshTokenKey=b0Sc5QyQVdC3CQkQsuwGjb8ak9xlKG2qIQJvRBV9RJrO43KsDQ7sruXPW3XWpuMtM+vzG18DXtsPt6LLfJcPIw==