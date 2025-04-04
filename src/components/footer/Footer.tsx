import Link from 'next/link';
import Icon from '../icon';
import './footer.scss';

interface ILink {
    link: string;
    icon: string;
}

const listLinks = [
    {
        link: 'https://fb.com/thinkonmay',
        icon: 'facebook'
    },
    {
        icon: 'discord',
        link: 'https://discord.com/servers/thinkmay-cloud-pc-1085741898309849128'
    },
    {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/91315236/'
    }
];
function Footer() {
    return (
        <>
            <div className="footer ">
                <div className="mainContent grid wide row">
                    <div className="left">
                        <div className="logo">
                            <Icon
                                width={138}
                                height={68}
                                src="logo-black"
                            ></Icon>
                            <span>Cloud PC</span>
                        </div>

                        <div className="email">
                            <span className="text">
                                Đăng ký Email để nhận các thông tin mới nhất về
                                dịch vụ của Thinkmay
                            </span>

                            <div className="ctnBtn">
                                <input
                                    className="input"
                                    placeholder="Email của bạn"
                                ></input>
                                <button className="btn register">
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="thinkmay">
                            <h6>Thinkmay</h6>
                            <ul>
                                <li>
                                    <Icon src="mail" width={32} height={32} />
                                    huyhoangdo@contact.thinkmay.net
                                </li>
                                <li>
                                    <Icon
                                        src="location-marker"
                                        width={32}
                                        height={32}
                                    />
                                    Ho Chi Minh, Viet Nam
                                </li>

                                <div className="flex gap-4">
                                    {listLinks.map((link) => (
                                        <a key={link.icon} href={link.link}>
                                            <Icon
                                                width={32}
                                                height={32}
                                                src={link.icon}
                                            ></Icon>
                                        </a>
                                    ))}
                                </div>
                            </ul>
                        </div>
                        <div className="services">
                            <h6>Dịch vụ</h6>

                            <ul>
                                {/*<li><Link href={"/conntact"}>Về chúng tôi</Link></li>*/}
                                {/*<li>
                                    <Link href={'/procedure'}>
                                        Hướng dẫn mua hàng
                                    </Link>
                                </li>*/}
                                {/* <li>
                                    <Link href={'/warranty-policy'}>
                                        Chính sách hoàn tiền
                                    </Link>
                                </li> */}
                                {/*<li>
                                    <Link href={'/shipping-policy'}>
                                        Chính sách vận chuyển
                                    </Link>
                                </li>*/}
                                <li>
                                    <Link href={'/contact'}>Liên hệ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRight">
                © Copyright 2024 Thinkmay. All Rights Reserved.
            </div>
        </>
    );
}

export default Footer;
