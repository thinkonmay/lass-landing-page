'use client';
import { APP_REDIRECT, UserSession } from '@/utils/analytics';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import FAQ from '../components/faq/FAQ';
import HeroSection from '../components/herosection/Herosection';
import { Introduce } from '../components/products/Products';
import Benefits from '../components/profit/profit';
import Testimonials from '../components/testimonials/Testimonials';
import './index.scss';
import './page.scss';

export default function Home() {
    useEffect(() => {
        UserSession();
    }, []);
    return (
        <main className="main">
            <div className="content">
                <HeroSection></HeroSection>
                <Benefits></Benefits>

                <AppReason></AppReason>
                <Introduce></Introduce>
                <FAQ />

                <Testimonials></Testimonials>
            </div>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-M7MLPFDFXL"
                strategy="afterInteractive"
            ></Script>
            <Script strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-M7MLPFDFXL');
                `}
            </Script>
        </main>
    );
}

const AppReason = () => {
    const initial = [
        'https://cdn.vn.garenanow.com/web/fo4vn//Khoa/2023/T8/FOUNDER/son.jpg'
    ];
    const [supported, setSupported] = useState<string[]>([]);

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
        }
    ];

    const rand = (arr: any[]) =>
        arr
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);

    useEffect(() => {
        fetch('/images.json').then((x) =>
            x.json().then((y) =>
                setSupported([
                    ...rand(y)
                        .splice(0, 10)
                        .map((x) => x.image),
                    initial
                ])
            )
        );
    }, []);

    useEffect(() => {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            document
                .querySelectorAll('.scroller__inner')
                .forEach((scrollerInner) =>
                    Array.from(scrollerInner.children).forEach((item) =>
                        scrollerInner.appendChild(
                            item.cloneNode(true) as Element
                        )
                    )
                );
    }, [supported]);

    return (
        <div id="appReason" className="appReason">
            <div className="grid wide mainContent">
                <div className=" top col">
                    <div className="wrapperTitle text-center ">
                        <h2 className="title">
                            Game
                            <span className="highlight"> được chơi nhiều </span>
                        </h2>
                    </div>
                </div>
                {[1, 2].map((pos) => (
                    <div
                        key={pos}
                        className="scroller mx-auto"
                        data-direction={pos % 2 ? 'left' : 'right'}
                        data-animated="yes"
                        data-speed={'slow'}
                    >
                        <ul className="tag-list scroller__inner listAppSupport">
                            {rand(supported).map((app, index) => (
                                <li
                                    key={index}
                                    className="item"
                                    aria-hidden="true"
                                >
                                    <img
                                        alt="img"
                                        width={520}
                                        height={280}
                                        src={app}
                                    ></img>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className=" top col mt-16">
                    <div className="wrapperTitle text-center ">
                        <h2 className="title !text-4xl">
                            {' '}
                            Game <span className="highlight">
                                chưa hỗ trợ
                            </span>{' '}
                        </h2>
                    </div>
                </div>
                <div className="listApp col l-10 m-auto">
                    {unsupported.map((app) => (
                        <div key={app.name} className="item">
                            <Image
                                alt="img"
                                width={48}
                                height={48}
                                src={'/logo-app/' + app.icon + '.png'}
                            ></Image>
                            <p className="text">{app.name}</p>
                        </div>
                    ))}
                </div>

                <a
                    href={APP_REDIRECT}
                    target="_self"
                    className="btn mx-auto mt-[3.2rem] ctaBtn max-w-3xl"
                >
                    Dùng thử ngay
                </a>
            </div>
        </div>
    );
};
