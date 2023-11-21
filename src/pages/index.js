import Image from 'next/image'
import { Inter } from 'next/font/google'
// import Pdf from '@/components/pdf'
import PDFViewer from '@/components/pdf/PDFViewer'
import PdfUploader from '@/components/pdf/PDFViewer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   {/* <Pdf/> */}
  <PdfUploader/>
   </>
  )
}
