import "./globals.css";
import Nav from "./Components/Nav/nav";

export const metadata = {
  title: 'Profile - Marc',
  description: 'Profile page about Marc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  )
}
