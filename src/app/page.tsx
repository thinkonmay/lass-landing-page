'use client'
import { cloudPcLink } from '@/data/constant';
import { UserEvents, UserSession } from '@/utils/analytics';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Icon from '../components/icon';
import './index.scss';

export default function CloudPC() {
    useEffect(() => { UserSession() }, [])
    return (
        <>
            {/*<Breadcrumb></Breadcrumb>*/}
            <div className="cloudPc ">
                <HeroSection />
                <Reason />
                <Subscriptions></Subscriptions>
                <FeatureReason></FeatureReason>
                <ConnectReason></ConnectReason>
                <ProductiveReason></ProductiveReason>
                <AppReason></AppReason>
                <SecureReason></SecureReason>
            </div>
        </>
    );
}


const HeroSection = () => {


    return (
        <div className="heroSection">
            <div className="mainContent grid wide">
                <div className="left col l-6 c-12">
                    <span className="brand">Cloud PC</span>

                    <h1>
                        Chiếc Windows Pc <span>mạnh mẽ</span> của bạn trên Cloud chỉ với 299k!
                    </h1>

                    <p className="subText">
                        Bạn có thể cài đặt phần mềm và truy cập từ bất kỳ thiết bị nào kết nối Internet.{' '}
                        <br />
                        Chọn cấu hình phù hợp nhất với nhu cầu của bạn. <br />
                    </p>
                    <a
                        href={'#subscriptions'}
                        style={{ paddingLeft: 32, paddingRight: 32 }}
                        className="btn-explore pl-[32px] pr-[32px] btn"
                    >
                        Xem các gói <Icon src="shopping-cart"></Icon>
                    </a>
                </div>
                <div className='right col l-6'>
                    <div className='img'
                    >
                        <Image priority={true} src={'/cloudpc-hero2.jpg'} width={768} height={500} alt='img'></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

const listReason = [
    {
        title: 'Mọi thiết bị, mọi nơi',
        text: 'Biến bất kì chiếc laptop, Điện thoai, thậm chí cả tivi thành 1 chiếc PC mạnh mẽ. ',
        icon: 'mi-laptop',

        href: '#connectReason'
    },
    {
        title: 'Chỉ từ 299k/tháng',
        text: 'Gia hạn mỗi tháng. Hủy ngay lập tức khi bạn muốn.',
        icon: 'credit-card',
        href: '#subscriptions'
    },
    {
        title: 'PC riêng biệt',
        text: 'Bạn có thể tải hầu hết các game yêu thích, chơi & làm những việc mình yêu thích trên PC',
        icon: 'mi-laptop',
        href: '#appReason'
    },
    {
        title: 'Bảo mật tuyệt đối',
        text: 'Mọi dữ liệu đều được lưu trên cloud, không còn nỗi lo mất data.',
        icon: 'shield',
        href: '#secureReason'
    },

]
const Reason = () => {


    const renderCard = () => {

        return listReason.map(rea => (
            <div key={rea.text} className='l-3 col '>
                <div className="card">
                    <div className="">
                        <div className='max-w-max'>
                            <Icon src={rea.icon} width={30} height={30} />
                        </div>
                        <h5 className="title">
                            {rea.title}
                        </h5>
                        <p className="text">
                            {rea.text}
                        </p>
                    </div>

                    <a href={rea.href} className='btn-link'>Chi tiết   <Icon src='arrow-right'></Icon></a>

                </div>
            </div>

        ))
    }
    return (
        <div className="reason">
            <div className="grid wide mainContent">
                <div className="wrapperTitle text-center">
                    <h2 className='title'>4 lí do bạn nên có 1 chiếc <span className="highlight"> CLOUD PC</span></h2>
                    <p className="subTitle"></p>
                </div>

                <div className="cards row">
                    {renderCard()}
                </div>
            </div>
        </div>
    )
}
const listSubscriptions = [
    {
        name: 'Gói giờ',
        price: '8K',
        subPrice: '/h',
        subName: 'Lần đầu mua ít nhất 20h',
        isSpecial: false,

        specs: [
            { icon: 'gpu', text: 'Nvidia RTX 3060Ti' },
            { icon: 'ram', text: '16Gb Ram' },
            { icon: 'cpu', text: 'Xeon™ (up to 3.1 GHz) 8 vCores' },
            { icon: 'hard-drive-white', text: '130GB' },
            //{ icon: 'os-win', text: 'Window 10' },
            { icon: 'check', text: 'Cloud-save dữ liệu sau khi tắt máy' },
        ],
    },
    {
        name: 'Tiết kiệm',
        price: '299k',
        subPrice: '/tháng',
        subName: 'Giới hạn 150h/tháng',
        isSpecial: true,
        specs: [
            //{ icon: 'gpu', text: 'Nvidia RTX 3060Ti' },
            //{ icon: 'ram', text: '16Gb Ram' },
            //{ icon: 'cpu', text: 'Xeon™ (up to 3.1 GHz) 8 vCores' },
            //{ icon: 'hard-drive-white', text: '150GB' },
            //{ icon: 'os-win', text: 'Window 10' },
            { icon: 'hard-drive-white', text: '150GB' },
            { icon: 'check', text: 'Cấu hình tương tự gói giờ' },
            { icon: 'check', text: 'Không giới hạn thời gian mỗi session' },
            { icon: 'check', text: 'Cloud-save' },

        ],
    },
    {
        name: 'Unlimited',
        price: '1699k',
        subPrice: '/tháng',
        subName: 'Unlimited thời gian sử dụng',
        isSpecial: false,
        specs: [
            //{ icon: 'gpu', text: 'Nvidia RTX 3060Ti' },
            //{ icon: 'ram', text: '16Gb Ram' },
            //{ icon: 'cpu', text: 'Xeon™ (up to 3.1 GHz) 8 vCores' },
            //{ icon: 'os-win', text: 'Window 10' },
            { icon: 'hard-drive-white', text: '250GB' },
            { icon: 'check', text: 'Cấu hình tương tự gói giờ' },
            { icon: 'check', text: 'Không hàng chờ' },
            { icon: 'check', text: 'Không giới hạn thời gian mỗi session' },
            { icon: 'check', text: 'Cloud-save' },

        ],
    },

]

const Subscriptions = () => {
    const payment = () => {
        UserEvents({
            type: "payment",
            payload: "User click on payment"
        })
    }



    const renderCard = () => {
        return listSubscriptions.map(sub => (
            <div key={sub.name} className='l-4 col '>
                <div className="subscription"
                    style={{ color: sub.isSpecial ? '#AD00FF' : '' }}
                >
                    <div className="ctnName">
                        <h6 className="name">{sub.name}</h6>
                        <p className='subName'>{sub.subName}</p>
                    </div>

                    <div className="ctnPrice">
                        <h5 className="price">{sub.price}</h5>
                        <p className="subPrice">{sub.subPrice}</p>
                    </div>

                    <div className="ctnSpec">

                        {
                            sub.specs.map(spec => (
                                <div key={spec.text} className="spec">
                                    <Icon src={spec.icon}></Icon>
                                    <p className='text'>{spec.text}</p>
                                </div>

                            ))
                        }


                    </div>

                    <div className="ctnBtn mt-auto">
                        <a href='https://fb.com/thinkonmay' onClick={payment} target='_blank' className="btn-checkout  ctaBtn">Thanh toán</a>
                        <a href='#featureReason' className="btn-link">Chi tiết</a>
                    </div>


                    {
                        sub.isSpecial ? (
                            <div className="banner">
                                Phổ Biến
                            </div>
                        ) :
                            ''
                    }

                </div>
            </div>

        ))
    }

    return (
        <div className="subscriptions" id='subscriptions'>
            <div className="grid wide mainContent" >
                <div className="wrapperTitle text-center">
                    <h2 className='title'>Đa dạng gói đáp ứng
                        <span className="highlight"> mọi nhu cầu của bạn</span></h2>
                    <p className="subTitle">*Hoàn tiền 100% với bất kì lí do trong vòng 24h sau khi đăng kí</p>
                </div>

                <div className="cards row">
                    {renderCard()}
                </div>
            </div>
        </div>
    )
}

const listOs = [
    {
        icon: 'android',
        name: 'Android'
    },
    {
        icon: 'ubuntu',
        name: 'Ubuntu'
    },
    //{
    //    icon: 'ios',
    //    name: 'IOS'
    //},
    {
        icon: 'os-win-bold',
        name: 'Window'
    }
]
const ConnectReason = () => {



    return (
        <div id='connectReason' className="connectReason">
            <div className="grid wide mainContent">

                <div className=" l-6 col">
                    <div className='img'>
                        <Image alt={''} width={768} height={500} src='/multiple-devices.png' />

                    </div>
                </div>

                <div className="right l-6 col">
                    <div className="wrapperTitle text-center ">
                        <p className='subTitle'>Linh hoạt & tiện lợi</p>
                        <h2 className='title'>Kết nối<span className="highlight"> mọi nơi, mọi thiết bị  </span></h2>
                        <p className="text">Truy cập Thinkmay CloudPC ngay trên trình duyệt tại bất kỳ đâu, bất kỳ lúc nào. Tận hưởng sự linh hoạt và tự do làm việc mà không bị ràng buộc.
                        </p>
                    </div>

                    <div className="ctnOs">
                        <p className='title'>Ngay trên <a className='underline' target='_blank' href={cloudPcLink}>broswer:</a></p>

                        <div className="listOs">
                            {
                                listOs.map(os => (
                                    <div key={os.name} className='os'>
                                        <Icon src={os.icon}></Icon>
                                        <p>{os.name}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                    <a className='btn ctaBtn' href={cloudPcLink}>Truy cập website</a>
                </div>
            </div>
        </div>
    )
}


const listProductiveReason = [
    'Làm việc từ xa, hợp tác giữa các văn phòng.',
    'Nhiều người cùng làm việc trên một máy tính ảo.',
    'Chia sẻ dữ liệu đến mọi nơi.'
]
const ProductiveReason = () => {



    return (
        <div id='productiveReason' className="productiveReason">
            <div className="grid wide mainContent">
                <div className=" left l-6 col">
                    <div className="wrapperTitle text-center ">
                        <p className='subTitle'>Làm việc chung dễ dàng</p>
                        <h2 className='title'>Cải thiện <span className="highlight"> hiệu suất </span> làm việc</h2>
                    </div>


                    <div className="listProductive">
                        {
                            listProductiveReason.map(rea => (
                                <div key={rea} className='item'>
                                    <Icon src='check'></Icon>
                                    <p className='text'>{rea}</p>
                                </div>
                            ))
                        }

                    </div>

                    <Link href={'/contact'} className='btn  ctaBtn'>Tư vấn setup</Link>
                </div>

                <div className="right l-6 col">
                    <div className='img'>
                        <Image alt={''} width={768} height={500} src='/work-together.png' />

                    </div>
                </div>

            </div>
        </div>
    )
}




const listSupportApp = [
    {
        icon: 'pts',
        name: 'Adobe photoshop'
    },
    {
        icon: 'lr',
        name: 'Adobe lightroom'
    },
    {
        icon: 'adobe-pr',
        name: 'Adobe premiere pro'
    },
    {
        icon: 'davinci',
        name: 'Davinci resolve'
    },
    {
        icon: 'ae',
        name: 'Adobe effect'
    },
    {
        icon: 'ai',
        name: 'Adobe illustrator'
    },
    {
        icon: 'rihno3d',
        name: 'Rihno 3d'
    },
    {
        icon: 'nvidia-cuda',
        name: 'Nvidia Cuda'
    },
    {
        icon: 'archicad',
        name: 'Archicad'
    },
    {
        icon: 'ansys',
        name: 'ANSYS'
    },
    {
        icon: 'keyshot',
        name: 'Key shot'
    },
    {
        icon: 'twin-motion',
        name: 'Twinmotion',
    },
    {
        icon: 'cinema4d',
        name: 'Cinema 4d'
    },
    {
        icon: 'Maya',
        name: 'maya'
    },
    {
        icon: 'autocad',
        name: 'Autocad'
    },
    {
        icon: 'unity',
        name: 'Unity'
    }
]
const listUnSupporttedApp = [
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
]

const AppReason = () => {



    return (
        <div id='appReason' className="appReason">
            <div className="grid wide mainContent">
                <div className=" top col">
                    <div className="wrapperTitle text-center ">
                        <h2 className='title'>  Danh sách  game chưa<span className="highlight"> support </span> </h2>
                    </div>
                </div>
                <div className="listApp col l-10 m-auto">
                    {
                        listUnSupporttedApp.map(app => (
                            <div key={app.name} className='item'>
                                <Image alt='img' width={80} height={80} src={'/logo-app/' + app.icon + '.png'}></Image>
                                <p className='text'>{app.name}</p>
                            </div>
                        ))
                    }
                </div>
                <a href={'https://www.facebook.com/thinkonmay'} target='_blank' className='btn mx-auto mt-[3.2rem] ctaBtn'>Đặt lịch trải nghiệm miễn phí</a>

            </div>
        </div>
    )
}



const SecureReason = () => {



    return (
        <div className="secureReason" id='secureReason'>
            <div className="grid wide ">
                <div className="mainContent l-12 col">
                    <div className="wrapperTitle text-center ">
                        <h2 className='title'>
                            dữ liệu bảo mật tuyệt đối
                        </h2>
                        <p className="text">
                            Lưu trữ dữ liệu trên đám mây giúp bảo vệ tuyệt đối.
                            <br />An ninh và tiện lợi, để công việc diễn ra mượt mà
                            <br />không lo lắng về mất mát dữ liệu.

                        </p>
                    </div>


                    <Link href={'contact'} className='btn-checkout  ctaBtn'>Tư vấn setup</Link>
                </div>

            </div>
        </div>
    )
}

const FeatureReason = () => {

    return (
        <div className="featureReason" id='featureReason'>
            <div className="grid wide mainContent">
                {/*<div>
                    <div className="wrapperTitle text-center ">
                        <h2 className='title'>Tính năng theo gói
                            <span className="highlight"></span>
                        </h2>
                    </div>

                    <div className="wrapperTable">
                        <div className="rowContent" style={{ borderTop: 'unset' }}>
                            <div className="columnContent"></div>
                            <div className="columnContent">CƠ BẢN</div>
                            <div className="columnContent">TIÊU CHUẨN</div>
                            <div className="columnContent">SUPPER</div>
                        </div>

                        <div className="rowContent">
                            <div className="columnContent">Số giờ sử dụng</div>
                            <div className="columnContent">110/tháng</div>
                            <div className="columnContent">140/tháng</div>
                            <div className="columnContent">125/tháng</div>
                        </div>
                        <div className="rowContent">
                            <div className="columnContent">Request game</div>
                            <div className="columnContent">Thấp</div>
                            <div className="columnContent">Vừa</div>
                            <div className="columnContent">Cao</div>
                        </div>
                    </div>
                </div>*/}
                <div className='mt-2'>
                    <div className="wrapperTitle text-center ">
                        <h2 className='title'>Option mua thêm
                            <span className="highlight"></span>
                        </h2>
                        <p className="subTitle">
                            *Yêu cầu mua kèm theo gói
                        </p>
                    </div>

                    <div className="wrapperTable2">
                        <div className="rowContent" style={{ borderTop: 'unset' }}>
                            <div className="columnContent">Option</div>
                            <div className="columnContent">Giá/tháng</div>

                        </div>

                        <div className="rowContent">
                            <div className="columnContent">50GB</div>
                            <div className="columnContent">70k</div>
                        </div>
                        <div className="rowContent">
                            <div className="columnContent">100GB</div>
                            <div className="columnContent">120k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}