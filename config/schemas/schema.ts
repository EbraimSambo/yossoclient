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
    // phone: z.string().nullable()
})

export type inferMail = z.infer<typeof schemaMail>
export type inferRegister = z.infer<typeof schemaRegister>