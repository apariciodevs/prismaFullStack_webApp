'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import AddPost from './components/AddPost'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main > 
      <AddPost  />
    </main>
  )
}
