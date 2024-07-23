import { User } from "@/config/auth/types";
import useSWR from "swr";




export function useUser(slug: string) {
    return useSWR<User>("/user/"+slug);
}