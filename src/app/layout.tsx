
import './globals.css'
import { Providers } from '@/redux/providers'

export const metadata = {
  title: 'NextTs - Redux',
  description: 'App to implement and use Redux with TS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Providers>
          {children}
        </Providers>
      </body>

    </html>
  )
}
