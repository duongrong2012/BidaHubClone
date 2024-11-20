'use client'

import useSelector from '@/hooks/useSelector'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function ClientWrapper({
    children
}: Props) {

    const navbarHeight = useSelector((state) => state.navbar.navbarHeight)

    return (
        <div
            style={{ marginTop: navbarHeight }}
        >
            {children}
        </div>
    )
}

export default ClientWrapper