import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> Hey this is codeswear.


      <div className="mx-4">This is Me</div>
      <div className="mx-4 bg-slate-500">This is Me</div>
      <div className="mx-12 bg-green-400">Hello</div>
    </div>


  )
}
