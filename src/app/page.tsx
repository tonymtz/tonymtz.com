'use client'

import { Box, Heading, Paragraph, ThemeUIStyleObject } from 'theme-ui'

const links = [
  { href: 'https://tomatoro.com?utm-source=tonymtz-com&utm_campaign=page', label: 'Tomatoro' },
  { href: 'https://eslegalmitrabajo.com?utm-source=tonymtz-com&utm_campaign=page', label: '¿Es legal mi trabajo?' },
  { href: 'https://dolarenbancos.com?utm-source=tonymtz-com&utm_campaign=page', label: 'Dolar en bancos' },
  { href: 'https://instagram.com/gatomocho', label: '@gatomocho Illustration' },
  { href: 'https://gatomocho.com', label: 'Gatomocho Game Studio' },
  { href: 'https://soundcloud.com/gatonejo', label: 'Gatonejo Music' },
  { href: 'https://instagram.com/pozoletv', label: 'PozoleTV' },
  { href: 'https://tiktok.com/@musicalavera', label: 'Musicalavera' },
  { href: 'https://perro.cafe/?utm-source=tonymtz-com&utm_campaign=page', label: 'Culto al Perro Café' },
]

export default function Home () {
  return (
    <Box as='main' sx={ styles.main }>
      <Heading mb={3}>Hello, I&apos;m Tony Mtz</Heading>
      <Paragraph sx={styles.p}>Welcome to my website. I&apos;m a software engineer currently working at <a href="https://mx.linkedin.com/company/hims-&-hers/life">$HIMS</a></Paragraph>
      <Paragraph sx={styles.p}>These are my projects:</Paragraph>
      <ul>
        { links.map(({ href, label }) => (
          <li key={ href }>
            <a href={href}>
              <Paragraph>{ label }</Paragraph>
            </a>
          </li>
        )) }
      </ul>
      <Paragraph sx={styles.p}>Copyright &copy; 2014 - {new Date().getFullYear()}</Paragraph>
    </Box>
  )
}

const styles: Record<string, ThemeUIStyleObject> = {
  main: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: ['100vh','60vh'],
    justifyContent: 'center',
    px: 4,
  },
  p: {
    my: 2,
    textAlign: 'center',
  },
}
