'use client'
import { Provider } from "react-redux"
import { store } from "./store"

interface TChildren {
    children: React.ReactNode
}

export function Providers({ children }: TChildren) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}