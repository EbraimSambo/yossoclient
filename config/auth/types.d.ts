export type User={
    firstName: string
    lastName: string
    email: string
    id: string
    email: string
    profile: Profile
    createAt: string
    updatedAt: Date
}

type Profile ={
   bio: string
   cover: string
   phone: string
   address: string
   verification: String
   isVerificate: boolean
}