import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string

    colors: {
      primary: string
      secodary: string
      terciary: string
      quartenary: string
      bg5: string
      text: string
      background: string
      gray100: string
      backgroundCard: string
    }
  }
}
