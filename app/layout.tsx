import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Focus AI',
  description: 'Your personal AI companion that helps you stay focused',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
