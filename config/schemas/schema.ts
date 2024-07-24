import { z } from "zod";

export const schemaMail = z.object({
    email: z.string().min(2,"Tens de inserir o seu email!").email("Insira um email valido!")
})


export const schemaRegister = z.object({
    firstName: z.string().min(1,"Campo Obrigatório"),
    lastName: z.string().min(1,"Campo Obrigatório"),
    email: z.string().min(2,"Campo Obrigatório").email("Insira um email valido!"),
    password: z.string().min(1,"Campo Obrigatorio"),
    repeatPassword: z.string().min(1,"Campo Obrigatorio"),
    phone: z.string().min(9,"Tem de conter no mínimo 9 algarismo").max(9, "Tem de conter 9 algarismo"),
})
export const schemaLogin = z.object({
    email: z.string().min(2,"Campo Obrigatório").email("Insira um email valido!"),
    password: z.string().min(1,"Campo Obrigatorio"),
})

export const schemaCourse = z.object({
    title: z.string().min(1,"Campo Obrigatorio"),
    desc: z.string().min(1,"Campo Obrigatorio"),
    duration: z.string().min(1,"Campo Obrigatorio"),
    price: z.string().min(1,"Campo Obrigatorio"),
    // cover: z.string()
})
export type inferMail = z.infer<typeof schemaMail>
export type inferRegister = z.infer<typeof schemaRegister>
export type inferLogin = z.infer<typeof schemaLogin>
export type inferCourse = z.infer<typeof schemaCourse>