'use client'

import Image from 'next/image'
import './page.scss'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

type Selection = 'GAMING' | 'ENTERPRISE' | 'UNKOWN'
const REDIRECT_PAGE = "https://app.thinkmay.net/"

export default function Home() {
  const router = useRouter()
  const [selection,setSelection] = useState<Selection>('ENTERPRISE')

  useEffect(() => {
    const result = localStorage.getItem('SELECTION')
    console.log(result)
    switch (result) {
      case 'ENTERPRISE':
        setSelection('ENTERPRISE')
        break;
      case 'GAMING':
        setSelection('UNKOWN')
        break;
      default:
        setSelection('UNKOWN')
        break;
    }
  },[])

  const gamingSelect = async () => {
    localStorage.setItem('SELECTION','GAMING')
    router.push(`${REDIRECT_PAGE}`)
  }

  const enterpriseSelect = async () => {
    localStorage.setItem('SELECTION','ENTERPRISE')
    setSelection('ENTERPRISE')
  }


  return (
    <main className="main">
      <Header></Header>
      <div className='content'>
      </div>
      <Footer></Footer>
    </main>
  )
}
