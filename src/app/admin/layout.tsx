'use client'
import { SessionProvider } from "next-auth/react"

export default function Layout(prompt: { children: React.ReactNode }) {
    return (
        <SessionProvider>{prompt.children}</SessionProvider>
    );
}