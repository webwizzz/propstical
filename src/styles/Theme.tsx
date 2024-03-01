import React, { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'


export const theme: DefaultTheme = {
  colors: {
    primary: '#ab8867',
    secodary: '#67523e',
    terciary: '#3e362e',
    quartenary: '#ba945a',
    bg5: '#e7decf',
    text: '#3E362E',
    background: '#DAD1BC',
    gray100: '#EAE7DD',
    backgroundCard: '#9d7c5d7f',
  },
}

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
