import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-tui-bg text-tui-text min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
