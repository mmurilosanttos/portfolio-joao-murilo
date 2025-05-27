import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "João Murilo Santos Leite - Portfolio",
  description: "Portfolio pessoal de João Murilo Santos Leite - Desenvolvedor",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Script src="/js/form-validation.js" />
      </body>
    </html>
  )
}
