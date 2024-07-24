import Workspace from "@/components/auth/workspace/Workspace";
import { authOptions } from "@/config/auth/auth.config";
import { getServerSession } from "next-auth";

export const metadata={
    title: "Area de Trabalho"
}
export default async function WorkspacePage(){
    const session = await getServerSession(authOptions)
    return(
        <Workspace id={session?.user.id!} />
    )
}