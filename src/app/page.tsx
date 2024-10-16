'use client'
import { reasons } from '@/data/reasons';
import { APP_REDIRECT, UserSession } from '@/utils/analytics';
import Image from 'next/image';
import { useEffect } from 'react';
import HeroSection from '../components/herosection/Herosection';
import Icon from '../components/icon';
import { Introduce } from '../components/products/Products';
import Testimonials from '../components/testimonials/Testimonials';
import './index.scss';
import './page.scss';

export default function Home() {
    useEffect(() => { UserSession() }, [])
    return (
        <main className="main">
            <div className="content">
                <HeroSection></HeroSection>
                {/*<Loop></Loop>*/}
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
            name: 'Black Myth: Wukong',
            img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_415397426d4c939ebb8a93ac66831f28ee7199be.600x338.jpg?t=1725007201'
        },
        {
            icon: 'fconline',
            name: 'FC Online',
            img: 'https://cdn.vn.garenanow.com/web/fo4vn//Khoa/2023/T8/FOUNDER/son.jpg'
        },
        {
            icon: 'wukong',
            name: 'Black Myth: Wukong',
            img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_86c4b7462bba219a0d0b89931a35812b9f188976.1920x1080.jpg?t=1725007201'
        },

        {
            icon: 'wukong',
            name: 'Black Myth: Wukong',
            img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_d9391ab31a4d15dddf7ba4949bfa44f5d9170580.1920x1080.jpg?t=1725007201',
        },
        {
            icon: 'wukong',
            name: 'Black Myth: Wukong',
            img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_524a39da392ee83dde091033562bc719d46b5838.1920x1080.jpg?t=1725007201'
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
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        // If a user hasn't opted in for recuded motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                // add data-animated="true" to every `.scroller` on the page
                //@ts-expect-error
                scroller.setAttribute("data-animated", true);

                // Make an array from the elements within `.scroller-inner`
                const scrollerInner = scroller.querySelector(".scroller__inner");
                //@ts-expect-error
                const scrollerContent = Array.from(scrollerInner.children);

                // For each item in the array, clone it
                // add aria-hidden to it
                // add it into the `.scroller-inner`
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    //@ts-expect-error

                    duplicatedItem.setAttribute("aria-hidden", true);
                    //@ts-expect-error

                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }


    }, [])

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
                {/*<div className="listApp col l-10 m-auto">
                    {
                        supported.map(app => (
                            <div key={app.name} className='item'>
                                <Image alt='img' width={80} height={80} src={'/logo-app/' + app.icon + '.png'}></Image>
                                <p className='text'>{app.name}</p>
                            </div>
                        ))
                    }
                </div>*/}
                <div className="scroller mx-auto" data-speed="slow">
                    <ul className="tag-list scroller__inner listAppSupport">
                        {
                            supported.map(app => (
                                <li key={app.name} className='item'>
                                    <img alt='img' width={260} height={140}
                                        //src={'/logo-app/' + app.icon + '.png'}
                                        src={app.img}></img>
                                    <p className='text'>{app.name}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className=" top col mt-16">
                    <div className="wrapperTitle text-center ">
                        <h2 className='title !text-4xl'>  Game <span className="highlight">chưa hỗ trợ</span> </h2>
                    </div>
                </div>
                <div className="listApp col l-10 m-auto">

                    {
                        unsupported.map(app => (
                            <div key={app.name} className='item'>
                                <Image alt='img' width={48} height={48} src={'/logo-app/' + app.icon + '.png'}></Image>
                                <p className='text'>{app.name}</p>
                            </div>
                        ))
                    }
                </div>


                <a href={APP_REDIRECT}
                    target='_self'
                    className='btn mx-auto mt-[3.2rem] ctaBtn max-w-3xl'>
                    Dùng thử ngay
                </a>
            </div>
        </div>
    )
}



const Loop = () => {



    return (
        //<div className='w-full'>
        <div className="scroller mx-auto" data-speed="fast">
            <ul className="tag-list scroller__inner">
                <li>1</li>
                <li>2</li>
                <li>3</li>

                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>UI/UX</li>
            </ul>
        </div>
        //</div>
    )
}