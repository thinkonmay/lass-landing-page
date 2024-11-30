'use client';
import { Lines } from '@/data/lines';
import { IProduct, products } from '@/data/products';
import { APP_REDIRECT } from '@/utils/analytics';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { formatPrice } from '../../utils/formatPrice';
import SwitchBtn from '../btn/SwitchBtn';
import Icon from '../icon';
import './products.scss';

function Products() {
    const [productShow, setProductShow] = useState<Lines>(Lines.MACBOOK);

    return (
        <>
            <div className="products">
                <div className="mainContent grid wide">
                    <div className="top">
                        <div className="nav">
                            <h2>Khám phá các dòng sản phẩm</h2>
                            <div className="l-2 c-0">
                                <Link
                                    className=" inline-flex gap-4"
                                    href="/services"
                                >
                                    Xem tất cả các mẫu{' '}
                                    <Icon src="arrow-right"></Icon>
                                </Link>
                            </div>
                        </div>
                        <SwitchBtn
                            productShow={productShow}
                            setProductShow={setProductShow}
                        ></SwitchBtn>
                    </div>

                    <div className="wrapperProducts row">
                        {products
                            .filter((x) => x.type == productShow)
                            .map((p, key) => (
                                <Product key={key} {...p}></Product>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;

const Product = (props: IProduct) => {
    return (
        <div className="productCard col l-6 c-12">
            <div>
                <Image
                    src={'/' + props.imgSrc}
                    width={360}
                    height={160}
                    alt="img"
                ></Image>
            </div>

            <h4 className="name">{props.name}</h4>
            <p className="subText">{props.subText}</p>

            <h6 className="pricing">{formatPrice(props.price)} VNĐ</h6>

            <div className="ctnButtons">
                <Link href={`/services/${props.slug}`} className="btnSeeMore">
                    Xem thêm
                </Link>
                <Link
                    className="inline-flex gap-4"
                    href={`/services/${props.slug}/order`}
                >
                    Mua ngay <Icon src="arrow-right"></Icon>
                </Link>
            </div>
        </div>
    );
};

export const Introduce = () => {
    return (
        <div className="introduce">
            <Subscriptions></Subscriptions>
            <FeatureReason></FeatureReason>
            <div className="titleContent">
                <div className="ctnText">
                    <div className="text">
                        <Icon src="check" width={36} height={36} />{' '}
                        <h3>Hiệu năng</h3>
                    </div>
                    <div className="text">
                        <Icon src="check" width={36} height={36} />{' '}
                        <h3>Ổn định</h3>
                    </div>
                    <div className="text">
                        <Icon src="check" width={36} height={36} />{' '}
                        <h3>Tiện dụng</h3>
                    </div>
                </div>
                <h2>
                    Với Thinkmay Cloud PC, bạn có
                    <br />
                    <span className="specialText">RTX 3060 Ti</span> <br />
                    <span className="specialText"> 16GB RAM </span> <br />
                    <span className="specialText"> 16 vCPU </span> <br />
                    <span className="specialText"> 4k 120fps </span>
                    <br />
                    ngay trên <span className="specialText"> Chrome </span>
                </h2>
            </div>

            <div className="imgBg">
                <div className="logo">
                    <div className="wrapperLogo">
                        <Icon width={105} height={58} src="logo-white"></Icon>
                        <span className="">Cloud PC</span>
                    </div>
                </div>
                <Image
                    width={1440}
                    className="w-[100vw]"
                    height={1080}
                    alt="img-mockup"
                    src={'/macbook-mockup.png'}
                ></Image>
            </div>
        </div>
    );
};

const Subscriptions = () => {
    const listSubscriptions = [
        {
            name: 'Gói Tuần',
            id: 'hours',
            price: '99k',
            subPrice: '/tuần',
            subName: 'Giới hạn 25h/tuần',
            isSpecial: false,

            specs: [
                { icon: 'check', text: 'Có hàng chờ' },
                { icon: 'check', text: 'Có lưu dữ liệu khi tắt máy' },
                { icon: 'hard-drive-white', text: '150GB dữ liệu cá nhân' }
            ]
        },
        {
            name: 'Tiết kiệm',
            id: 'month',
            price: '299k',
            subPrice: '/tháng',
            subName: 'Giới hạn 120h/tháng',
            isSpecial: true,
            specs: [
                { icon: 'check', text: 'Có hàng chờ' },
                { icon: 'check', text: 'Có lưu dữ liệu khi tắt máy' },
                { icon: 'hard-drive-white', text: '150GB dữ liệu cá nhân' }
            ]
        },
        {
            name: 'Unlimited',
            price: '1699k',
            id: 'unlimited',
            subPrice: '/tháng',
            subName: 'Unlimited thời gian sử dụng',
            isSpecial: false,
            specs: [
                { icon: 'check', text: 'Sở hữu PC riêng' },
                { icon: 'check', text: 'Không hàng chờ' },
                { icon: 'check', text: 'Có lưu dữ liệu khi tắt máy' },
                { icon: 'hard-drive-white', text: '250GB dữ liệu cá nhân' }
            ]
        }
    ];

    const renderCard = () => {
        return listSubscriptions.map((sub, index) => (
            <div key={sub.name} className={`l-4  order-${index + 1}`}>
                <div
                    className="subscription"
                    style={{ color: sub.isSpecial ? '#AD00FF' : '' }}
                >
                    <div className="ctnName">
                        <h6 className="name">{sub.name}</h6>
                        <p className="subName">{sub.subName}</p>
                    </div>

                    <div className="ctnPrice">
                        <h5 className="price">{sub.price}</h5>
                        <p className="subPrice">{sub.subPrice}</p>
                    </div>

                    <div className="ctnSpec">
                        {sub.specs.map((spec) => (
                            <div key={spec.text} className="spec">
                                <Icon src={spec.icon}></Icon>
                                <p className="text">{spec.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="ctnBtn mt-auto">
                        <a
                            href={`${APP_REDIRECT}/payment`}
                            target="_self"
                            className="btn-checkout  ctaBtn"
                        >
                            Thanh toán
                        </a>
                    </div>

                    {sub.isSpecial ? (
                        <div className="banner">Phổ Biến</div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        ));
    };

    return (
        <div className="subscriptions" id="subscriptions">
            <div className="grid wide mainContent">
                <div className="wrapperTitle text-center">
                    <h2 className="title">
                        Các gói dịch vụ
                        <span className="highlight"> Cloud PC</span>
                    </h2>
                    <p className="subTitle !mt-4">
                        *Dịch vụ chỉ cho thuê PC, không kèm tài khoản game
                    </p>
                    <p className="subTitle">
                        *Hỗ trợ hoàn tiền{' '}
                        {/*<span className="subTitle !text-[#AD00FF]">100%</span>{' '}*/}

                        <Link href={'/warranty-policy'}>
                            {'(Chi tiết)'}
                        </Link>
                    </p>
                </div>

                <div className="cards row">{renderCard()}</div>
            </div>
        </div>
    );
};

const FeatureReason = () => {
    return (
        <div className="featureReason" id="featureReason">
            <div className="grid wide mainContent">
                <div className="mt-2">
                    <div className="wrapperTitle text-center ">
                        <h2 className="title">
                            Dung lượng mở rộng
                            <span className="highlight"></span>
                        </h2>
                        {/*<p className="subTitle">khi mua kèm gói tháng</p>*/}
                    </div>

                    <div className="wrapperTable2">
                        <div
                            className="rowContent"
                            style={{ borderTop: 'unset' }}
                        >
                            <div className="columnContent">Dung lượng</div>
                            <div className="columnContent">Mua lần đầu</div>
                            <div className="columnContent">Gia hạn</div>
                        </div>

                        <div className="rowContent">
                            <div className="columnContent">50GB</div>
                            <div className="columnContent">60k/tháng</div>
                            <div className="columnContent">40k/tháng</div>
                        </div>
                        <div className="rowContent">
                            <div className="columnContent">100GB</div>
                            <div className="columnContent">110k/tháng</div>
                            <div className="columnContent">80k/tháng</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
