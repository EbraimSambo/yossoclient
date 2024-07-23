import FormRegister from '@/components/auth/forms/FornRegister'
import { authOptions } from '@/config/auth/auth.config'
import { clientURL } from '@/config/constants/constants'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
export const metadata = {
    title: "Criar Conta"
}
export default async function PageRegister() {
    const session = await getServerSession(authOptions)
    if(session) return redirect(clientURL)
    return (
        <FormRegister />
    )
}

