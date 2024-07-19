import InfoContacts from '../../components/contacts/InfoContacts'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Contactos"
}
export default function CoursesPage() {
    return (
        <>
            <InfoContacts />
        </>
    )
}

