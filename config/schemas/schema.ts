import { z } from "zod";

export const schemaMail = z.object({
    email: z.string().min(2,"Tens de inserir o seu email!").email("Insira um email valido!")
})

export type inferMail = z.infer<typeof schemaMail>