
import Image from 'next/image'
import './page.scss'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import HeroSection from '../components/herosection/Herosection'
import Icon from '../components/icon'
import Products, { Introduce } from '../components/products/Products'
import Testimonials from '../components/testimonials/Testimonials'
import Policy from '@/components/policy/policy'
import Warranty from '@/components/warranty/warranty'
import Guide from '@/components/guide/guide'
import Link from 'next/link'


export default function Home() {



  return (
    <main className="main">
      {/*<Header></Header>*/}
      <div className='content'>
        <HeroSection></HeroSection>
        <Reason></Reason>
			  <Introduce></Introduce>
        <Products></Products>
        <Guide></Guide>
        <Testimonials></Testimonials>
      </div>
      {/*<Footer></Footer>*/}
    </main>
  )
}

const reasons = [{
  subtitle: '',
  icon:'mi-laptop',
  title: 'Dịch vụ Cloud PC',
  content: [
    'Cloud PC - công nghệ giúp bạn có thể kết nối với những chiếc \"siêu máy tính\" từ xa thông qua internet',
    'Thinkmay Cloud PC là giải pháp Cloud PC duy nhất đặt máy chủ tại Việt Nam, mang lại độ trễ tuyệt vời cho làm việc và chơi game',
  ],
},{
  subtitle: '',
  icon:'shield',
  title: 'Bản quyền phần mềm',
  content: [
    'Người dùng laptop tại Việt Nam luôn đối diện với rủi ro khi sử dụng phần mềm crack - mất dữ liệu, mã độc,v.v..',
    'Sử dụng dịch vụ Thinkmay là cách dễ dàng nhất để trải nghiệm phần mềm bản quyền',
  ],
},{
  subtitle: '',
  icon:'link',
  title: 'Tương thích phần mềm',
  content: [
    'Window là điều hành cho máy tính phổ biến nhất hiện tại, tuy nhiên, rất nhiều phần mềm chỉ hoạt động trên Window và không hoạt động trên MacOS',
    'Với thinkmay Cloud PC, bạn có thể dùng bất kì phần mềm Window nào trên máy Mac',
  ],
},{
  subtitle: '',
  icon:'bell-outline',
  title: 'Hỗ trợ người dùng',
  content: [
    'Từ trước tới nay, việc mua laptop luôn là một trải nghiệm rủi ro - đôi khi chiếc laptop bạn mua phù hợp với nhu cầu của bạn, và đôi khi chúng không',
    'Thinkmay cam kết mang lại sự tận tâm tuyệt đối trước - trong - và sau khi mua laptop, từ phần cứng tới phần mềm.',
  ],
}]


const Reason = () => {
  return (
    <div className='reason'>
      <div className='mainContent'>
        <div className="top  grid wide ">
          <h2 className='l-6 c-12 '> Điều gì khiến <span className='specialText'>Thinkmay</span> khác biệt?</h2>
          <div className='l-2 c-0'>
            <a className=' inline-flex gap-4' href='#'>Xem Dịch vụ <Icon src='arrow-right'></Icon></a>
          </div>
        </div>
        <div className="bottom ">
          <div className="ctnCards grid wide ">
            {reasons.map(x => 
              <div className='card l-4 m-12 c-12'>
                <div>
                  <Icon src={x.icon} className='text-black' width={66} height={66} />
                  <div className="info">
                    <span className='subTitle'>{x.subtitle}</span>
                    <h3 className='title'>{x.title}</h3>
                    {x.content.map(y => 
                      <p className="text">{y}<br/></p>
                    )}
                  </div>
                </div>

                  {/* <div className="ctnLinks">
                    <a className='inline-flex gap-4' href="">Xem tất cả các mẫu <Icon src='arrow-right'></Icon></a>
                  </div> */}
              </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}


