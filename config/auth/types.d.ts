export type User={
    firsName: string
    lastName: string
    email: string
    id: string
    email: string
    profile: Profile
    createAt: Date
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