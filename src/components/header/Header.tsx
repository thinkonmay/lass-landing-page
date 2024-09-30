'use client';
import { cloudPcLink } from '@/data/constant';
import { UserEvents } from '@/utils/analytics';
import Link from 'next/link';
import { useState } from 'react';
import Icon from '../icon';
import './header.scss';

const listNav = [
    {
       name: 'Liên hệ',
       link: '/contact'
    },
    {
        name: 'Hướng dẫn',
        link: '/guide'
    },
]

function Header() {
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
            payload: `click and go to ${cloudPcLink}`
        })
    }

    return (
        <div className="header ">
            <div className="grid wide wrapperHeader">
                <div className="left">
                    <div className="logo">
                        <Link href={'/'} className="wrapperLogo">
                            <Icon
                                width={105}
                                height={58}
                                src="logo-black"
                            ></Icon>
                            {/*<span className="">Laptop as a Service</span>*/}
                        </Link>
                    </div>
                </div>

                <ul className="rightDesktop">
                    {
                        listNav.map(item => (
                            <li key={item.name}>
                                <Link className="link" href={item.link} >
                                    {item.name}
                                </Link>
                            </li>

                        ))
                    }

                    <Link
                        href={cloudPcLink}
                        target='_blank'
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
                            {
                                listNav.map(item => (
                                    <li key={item.name}>
                                        <Link
                                            className="link"
                                            href={item.link}
                                            onClick={close}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>

                                ))
                            }
                            <Link
                                href={cloudPcLink}
                                onClick={redirectWin11}
                                target='_blank'
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
