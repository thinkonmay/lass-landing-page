'use client'
import { reasons } from '@/data/reasons';
import { APP_DOMAIN, UserSession } from '@/utils/analytics';
import Image from 'next/image';
import { useEffect } from 'react';
import HeroSection from '../components/herosection/Herosection';
import Icon from '../components/icon';
import { Introduce } from '../components/products/Products';
import Testimonials from '../components/testimonials/Testimonials';
import './index.scss';
import './page.scss';

export default function Home() {
    useEffect(() => { UserSession() },[])
    return (
        <main className="main">
            <div className="content">
                <HeroSection></HeroSection>
                <AppReason></AppReason>
                <Introduce></Introduce>
                <Testimonials></Testimonials>
            </div>
        </main>
    );
}

const Reason = () => {
    return (
        <div className="reason">
            <div className="mainContent">
                <div className="top  grid wide ">
                    <h2 className="l-6 c-12 ">
                        {' '}
                        Điều gì khiến{' '}
                        <span className="specialText">Thinkmay</span> khác biệt?
                    </h2>
                    <div className="l-2 c-0">
                        <a className=" inline-flex gap-4" href="#">
                            Xem Dịch vụ <Icon src="arrow-right"></Icon>
                        </a>
                    </div>
                </div>
                <div className="bottom ">
                    <div className="ctnCards grid wide ">
                        {reasons.map((x, index) => (
                            <div key={index} className="card l-4 m-12 c-12">
                                <div>
                                    <Icon
                                        src={x.icon}
                                        className="text-black"
                                        width={66}
                                        height={66}
                                    />
                                    <div className="info">
                                        <span className="subTitle">
                                            {x.subtitle}
                                        </span>
                                        <h3 className="title">{x.title}</h3>
                                        {x.content.map((y, index) => (
                                            <p key={index} className="text">
                                                {y}
                                                <br />
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


const AppReason = () => {
    const supported = [
        {
            icon: 'wukong',
            name: 'Wukong'
        },
        {
            icon: 'fconline',
            name: 'FC Online'
        },
    ]
    const unsupported = [
        {
            icon: 'lol',
            name: 'League of Legends'
        },
        {
            icon: 'val-logo',
            name: 'Valorant'
        },
        {
            icon: 'fc24-logo',
            name: 'FC 24'
        },
        {
            icon: 'pubg',
            name: 'PUBG PC'
        },
    ]
    return (
        <div id='appReason' className="appReason">
            <div className="grid wide mainContent">
                <div className=" top col">
                    <div className="wrapperTitle text-center ">
                        <h2 className='title'>  
                            Game 
                            <span className="highlight"> đang được chơi nhiều </span> 
                        </h2>
                    </div>
                </div>
                <div className="listApp col l-10 m-auto">
                    {
                        supported.map(app => (
                            <div key={app.name} className='item'>
                                <Image alt='img' width={80} height={80} src={'/logo-app/' + app.icon + '.png'}></Image>
                                <p className='text'>{app.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div className=" top col">
                    <div className="wrapperTitle text-center ">
                        <h2 className='title'>  Game <span className="highlight">chưa hỗ trợ</span> </h2>
                    </div>
                </div>
                <div className="listApp col l-10 m-auto">
                    {
                        unsupported.map(app => (
                            <div key={app.name} className='item'>
                                <Image  alt='img' width={80} height={80} src={'/logo-app/' + app.icon + '.png'}></Image>
                                <p className='text'>{app.name}</p>
                            </div>
                        ))
                    }
                </div>
                <a  href={APP_DOMAIN} 
                    target='_self' 
                    className='btn mx-auto mt-[3.2rem] ctaBtn max-w-3xl'>
                        Dùng thử ngay
                </a>
            </div>
        </div>
    )
}


