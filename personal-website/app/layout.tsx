import "@/styles/globals.css"

export const metadata = {
  title: "David McMillan",
  description: "Personal website of David McMillan",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  )
}



import './globals.css'