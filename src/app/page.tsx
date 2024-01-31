'use client'

import Image from 'next/image'
import './page.scss'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import HeroSection from '../components/herosection/Herosection'
import Icon from '../components/icon'
import Products from '../components/products/Products'
import Testimonials from '../components/testimonials/Testimonials'

type Selection = 'GAMING' | 'ENTERPRISE' | 'UNKOWN'
const REDIRECT_PAGE = "https://app.thinkmay.net/"

export default function Home() {
  const router = useRouter()
  const [selection, setSelection] = useState<Selection>('ENTERPRISE')

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
  }, [])

  const gamingSelect = async () => {
    localStorage.setItem('SELECTION', 'GAMING')
    router.push(`${REDIRECT_PAGE}`)
  }

  const enterpriseSelect = async () => {
    localStorage.setItem('SELECTION', 'ENTERPRISE')
    setSelection('ENTERPRISE')
  }


  return (
    <main className="main">
      <Header></Header>
      <div className='content'>
        <HeroSection></HeroSection>
        <Reason></Reason>
        <Products></Products>
        <Testimonials></Testimonials>
      </div>
      <Footer></Footer>
    </main>
  )
}


const Reason = () => {


  const Card = () => {
    return (
      <div className='card l-4'>
        <div>
          <Icon src='mi-laptop' className='text-black' width={66} height={66} />

          <div className="info">
            <span className='subTitle'>Tùy chỉnh Laptop thoải mái</span>
            <h3 className='title'>Tạo ra chiếc Laptop dành riêng cho bạn </h3>

            <p className="text">
              Khi bạn mua trực tuyến tại Thinkmay, bạn có thể tùy chỉnh laptop của mình theo đúng ý muốn của bạn. Cho dù bạn cần thêm bộ nhớ hay lưu trữ bổ sung,
              chúng tôi sẵn sàng tùy chỉnh để phù hợp với nhu cầu và mong muốn của bạn.
            </p>
          </div>
        </div>

          <div className="ctnLinks">
            <a className='inline-flex gap-4' href="">Xem tất cả các mẫu <Icon src='arrow-right'></Icon></a>
          </div>
      </div>
    )
  }

  return (
    <div className='reason'>
      <div className='mainContent'>
        <div className="top  grid wide ">
          <h2 className='l-6'>Tại sao nên lựa chọn <span className='specialText'>Thinkmay</span> là địa điểm tốt nhất để mua Laptop?</h2>
          <a className='inline-flex gap-4' href='#'>Xem Dịch vụ <Icon src='arrow-right'></Icon></a>
        </div>
        <div className="bottom ">
          <div className="ctnCards grid wide">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  )
}


