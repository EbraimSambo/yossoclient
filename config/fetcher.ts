import { instanceGlobal } from "@/utils/contents/axios"
import { redirect } from "next/navigation"
import { clientURL } from "./constants/constants"



export const fetcher = async(url: string) =>
   await instanceGlobal.get(url).then((res)=>res.data)
   .catch((er)=>{if(er.response?.status === 404)return redirect(clientURL) })
