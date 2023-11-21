import Image from 'next/image'
import { Inter } from 'next/font/google'
import Pdf from '@/components/pdf'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Pdf/>
   </>
  )
}
