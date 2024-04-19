export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
import "./globals.css";

import NavBar from "@/components/layouts/NavBar"
import Footer from "@/components/layouts/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}