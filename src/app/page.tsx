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
import { useSearchParams } from 'next/navigation';

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

            <Script>
                {`
                window.__ow = window.__ow || {};
                window.__ow.organizationId = "665cfa3a-048b-4599-9f49-f67c08de5592";
                window.__ow.template_id = "316dd0ca-d3da-4b95-affe-e246db87f35d";
                window.__ow.integration_name = "manual_settings";
                window.__ow.product_name = "chatbot";   
                ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
               `}
            </Script>

            <noscript>
                You need to{' '}
                <a
                    href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/"
                    rel="noopener nofollow"
                >
                    enable JavaScript
                </a>{' '}
                in order to use the AI chatbot tool powered by{' '}
                <a
                    href="https://www.chatbot.com/"
                    rel="noopener nofollow"
                    target="_blank"
                >
                    ChatBot
                </a>
            </noscript>
        </main>
    );
}

const AppReason = () => {
    const initial = [
        'https://cdn.vn.garenanow.com/web/fo4vn//Khoa/2023/T8/FOUNDER/son.jpg'
    ];
    const [supported, setSupported] = useState<string[]>([]);
    const params = useSearchParams();

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
        {
            icon: 'ww-logo',
            name: 'Wuthering Waves'
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
        <div id="appReason" className="appReason bg-black">
            <div className="grid wide mainContent">
                <div className=" top col">
                    <div className="wrapperTitle text-center ">
                        <h2 className="title text-white">
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
                                    className="item ml-3"
                                    aria-hidden="true"
                                >
                                    <img
                                        alt="img"
                                        className="rounded-2xl"
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
                        <h2 className="title !text-4xl text-white">
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
                    href={APP_REDIRECT(params)}
                    target="_self"
                    className="btn mx-auto mt-[3.2rem] ctaBtn max-w-3xl"
                >
                    Dùng thử ngay
                </a>
            </div>
        </div>
    );
};
