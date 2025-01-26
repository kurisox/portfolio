// app/providers.tsx
'use client'
import {HeroUIProvider} from '@heroui/react'
import {ThemeProvider } from "next-themes";
import NavigationBar from './components/navbar';

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme='light'>
        <NavigationBar/>
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  )
}