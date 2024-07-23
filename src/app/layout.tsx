import type { Metadata } from "next";
import "../styles/globals.css";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter'
import {ReactNode} from 'react'
import {audiowide, creepster} from '@/styles/fonts'
import Header from '@/components/header/header'
import {Footer} from '@/components/footer/footer'

export const metadata: Metadata = {
  title: "Rick and Morty test task",
  description: "Тестовое задание для СтилЛедиМакс, ЧП.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={`${creepster.variable} ${audiowide.variable}`} lang="en">
      <body>
          <AppRouterCacheProvider>
              <Header />
                {children}
              <Footer />
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
