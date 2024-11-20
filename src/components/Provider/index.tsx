'use client'

import store from '@/redux/store'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

interface Props {
    children: React.ReactNode
}

function Provider({
    children
}: Props) {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}

export default Provider