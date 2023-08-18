import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { ReactNode } from 'react'

import { Providers } from '~/providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--oswald',
})

export const metadata: Metadata = {
  title: 'I\'m tony mtz',
  description: 'Welcome to my personal website',
}

export default function RootLayout ({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={ `${ inter.variable } ${ oswald.variable }` }
        style={ {
          margin: 0,
          fontSize: '19px',
        } }>
        <Providers>
          { children }
        </Providers>
      </body>
    </html>
  )
}
