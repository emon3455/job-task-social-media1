import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import SideNav from '@/components/SideNav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Social Club',
  description: 'Welcome to Social club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="flex">

          <SideNav />

          <div className="flex-grow">
            <Navbar />

            {children}
          </div>

        </div>

        <Footer/>

      </body>
    </html>
  )
}
