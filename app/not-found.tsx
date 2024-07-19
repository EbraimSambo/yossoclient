import NotFound from "../components/errors/NotFound";
import { Metadata } from "next";

export const metadata: Metadata={
    title: "Pagina Não Encontrada - Erro 404"
}
export default function NotFoundPage(){
    return(
        <NotFound />
    )
}