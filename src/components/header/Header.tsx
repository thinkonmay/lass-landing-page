'use client';
import Link from 'next/link';
import { useState } from 'react';
import Icon from '../icon';
import './header.scss';

function Header() {
    const [openNav, setOpenNav] = useState(false);
    const open = () => {
        setOpenNav(true);
    };
    const close = () => {
        setOpenNav(false);
    };

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
                            <span className="">Laptop as a Service</span>
                        </Link>
                    </div>
                </div>

                <ul className="rightDesktop">
                    <li>
                        <Link className="link" href="/services">
                            Laptop
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="/contact">
                            Liên hệ
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="/cloudpc">
                            CloudPC là gì?
                        </Link>
                    </li>
                    <Link
                        href="https://dev-thinkmay.netlify.app"
                        className="btn btn-link"
                    >
                        CloudPC website
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
                            <li>
                                <Link
                                    className="link"
                                    href="/services"
                                    onClick={close}
                                >
                                    Laptop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="link"
                                    href="/contact"
                                    onClick={close}
                                >
                                    Liên hệ
                                </Link>
                            </li>
                            {/* <li>
                                <Link className="link" href="/#">
                                    Về Thinkmay
                                </Link>
                            </li> */}
                            <Link
                                href="https://dev-thinkmay.netlify.app"
                                className="btn btn-link"
                            >
                                CloudPC portal
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
