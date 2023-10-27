import './globals.css'


export const metadata = {
  title: 'Spotify da shope',
  description: 'ouvindo kayblack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className='bg-zinc-900 text-zinc-200'>{children}</body>
    </html>
  )
}
