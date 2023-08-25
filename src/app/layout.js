import Navbar from '@/shared/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import SideNav from '@/shared/SideNav'
import ReduxProvider from '@/provider/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Social Club',
  description: 'Welcome to Social club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ReduxProvider>


          <Navbar />
          <div className="flex">
            <SideNav />

            {children}
          </div>
        </ReduxProvider>

      </body>
    </html>
  )
}
