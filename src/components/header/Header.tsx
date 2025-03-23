'use client';
import { APP_REDIRECT, UserEvents } from '@/utils/analytics';
import { LiveChatWidget } from '@livechat/widget-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icon from '../icon';
import './header.scss';

const isMobile = () => {
    const userAgent = navigator?.userAgent?.toLowerCase();
    const isMobile =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
            userAgent
        );
    const isTablet =
        /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
            userAgent
        );
    return isMobile || isTablet;
};

function Header() {
    useEffect(() => {
        if (isMobile()) (window as any).LiveChatWidget?.call('minimize');
    }, []);

    const [openNav, setOpenNav] = useState(false);
    const open = () => {
        setOpenNav(true);
    };
    const close = () => {
        setOpenNav(false);
    };
    const redirectWin11 = () => {
        UserEvents({
            type: 'USER_ACTION',
            payload: `click and go to ${APP_REDIRECT}`
        });
    };

    const listNav = [
        {
            name: 'Liên hệ',
            link: undefined,
            callback: () => (window as any).LiveChatWidget?.call('maximize')
        },
        {
            name: 'Bảng giá',
            link: '/#subscriptions'
        },
        {
            name: 'FAQs',
            link: '/#faqs'
        }
    ];

    return (
        <div className="header ">
            <LiveChatWidget license="19084863" visibility="maximized" />
            <div className="grid wide wrapperHeader">
                <div className="left">
                    <div className="logo">
                        <Link href={'/'} className="wrapperLogo">
                            <Icon
                                width={105}
                                height={58}
                                src="logo-black"
                            ></Icon>
                            <span className="brand">Cloud PC</span>
                        </Link>
                    </div>
                </div>

                <ul className="rightDesktop">
                    {listNav.map((item) =>
                        item.link ? (
                            <li key={item.name}>
                                <Link
                                    className="link"
                                    href={item.link}
                                    onClick={close}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ) : (
                            <li key={item.name}>
                                <Link
                                    className="link"
                                    href=""
                                    onClick={item.callback}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    )}

                    <Link
                        href={APP_REDIRECT}
                        target="_blank"
                        onClick={redirectWin11}
                        className="btn btn-link"
                    >
                        Đăng nhập
                        <Icon className={'mb-[1px]'} src="game" />{' '}
                    </Link>
                </ul>

                <div className="rightMobile">
                    <button onClick={open}>
                        <Icon src="3-line"></Icon>
                    </button>

                    <div className={openNav ? 'content show' : 'content'}>
                        <div className="head">
                            <Link className="link bold" href="/">
                                Trang chủ
                            </Link>
                            <button onClick={close}>
                                <Icon src="x"></Icon>
                            </button>
                        </div>

                        <ul>
                            {listNav.map((item) =>
                                item.link != undefined ? (
                                    <li key={item.name}>
                                        <Link
                                            className="link"
                                            href={item.link}
                                            onClick={close}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ) : (
                                    <li key={item.name}>
                                        <Link
                                            className="link"
                                            href=""
                                            onClick={item.callback}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            )}
                            <Link
                                href={APP_REDIRECT}
                                onClick={redirectWin11}
                                target="_blank"
                                className="btn btn-link"
                            >
                                Đăng nhập
                                <Icon className={'mb-[1px]'} src="game" />{' '}
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
