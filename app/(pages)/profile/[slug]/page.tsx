import Profile from "@/components/auth/profile/Profile"
import { Params } from "@/utils/interfaces/global"


export const metadata={
    title: "Perfil"
}
export default function ProfilePage(params: Params){
    return(
        <Profile slug={params.params.slug} />
    )
} 