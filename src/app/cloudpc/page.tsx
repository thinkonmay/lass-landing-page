
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/icon';
import './index.scss';

export default function CloudPC() {
    return (
        <>
            {/*<Breadcrumb></Breadcrumb>*/}
            <div className="cloudPc ">
                <HeroSection />
                <Reason />
                <Subscriptions></Subscriptions>
                <ConnectReason></ConnectReason>
                <ProductiveReason></ProductiveReason>
                <AppReason></AppReason>
                <SecureReason></SecureReason>
                <FeatureReason></FeatureReason>
            </div>
        </>
    );
}


const HeroSection = () => {


    return (
        <div className="heroSection">
            <div className="mainContent grid wide">
                <div className="left col l-6">
                    <span className="brand">Cloud PC</span>

                    <h1>
                        Chiếc Windown Pc <span>mạnh mẽ</span>của bạn trên Cloud. Mọi nhu cầu, mọi lúc & mọi nơi
                    </h1>

                    <p className="subText">
                        Bạn có thể cài đặt phần mềm và truy cập từ bất kỳ thiết bị nào kết nối Internet.{' '}
                        <br />
                        Chọn cấu hình phù hợp nhất với nhu cầu của bạn. <br />
                    </p>

                    <Link
                        href={'/services'}
                        style={{ paddingLeft: 32, paddingRight: 32 }}
                        className="btn-explore pl-[32px] pr-[32px] btn"
                    >
                        Tìm hiểu ngay <Icon src="shopping-cart"></Icon>
                    </Link>
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
    },
    {
        title: 'Chỉ từ 299k/tháng',
        text: 'Gia hạn mỗi tháng. Hủy ngay lập tức khi bạn muốn.',
        icon: 'credit-card',
    },
    {
        title: 'Phầm mềm bản quyền',
        text: 'Đều đã được cài sẵn & có bản quyền. Không mất thời gian download & crack.',
        icon: 'award',
    },
    {
        title: 'Bảo mật tuyệt đối',
        text: 'Mọi dữ liệu đều được lưu trên cloud, không còn nỗi lo mất data.',
        icon: 'shield',
    },

]
const Reason = () => {


    const renderCard = () => {

        return listReason.map(rea => (
            <div className='l-3 col '>
                <div className="card">
                    <div className="">
                        <Icon src={rea.icon} width={30} height={30} />
                        <h5 className="title">
                            {rea.title}
                        </h5>
                        <p className="text">
                            {rea.text}
                        </p>
                    </div>

                    <a className='btn-link'>Chi tiết thiết bị <Icon src='arrow-right'></Icon></a>

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
        name: 'Gói tháng',
        price: '299K',
        subPrice: '/tháng',
        subName: 'Giới hạn thời gian sử dụng',
        specs: [
            { icon: 'gpu', text: 'Nvidia RTX 3060Ti' },
            { icon: 'ram', text: '12Gb Ram' },
            { icon: 'cpu', text: 'Xeon™ (up to 3.1 GHz) 8 vCores' },
            { icon: 'hard-drive-white', text: '20GB(* Phầm mềm đã có sẵn)' },
            { icon: 'os-win', text: 'Window 10' },
        ],
    },
    {
        name: 'Gói năm',
        price: '299K',
        subPrice: '/năm',
        subName: 'Giới hạn thời gian sử dụng',
        specs: [
            { icon: 'gpu', text: 'Nvidia RTX 3060Ti' },
            { icon: 'ram', text: '12Gb Ram' },
            { icon: 'cpu', text: 'Xeon™ (up to 3.1 GHz) 8 vCores' },
            { icon: 'hard-drive-white', text: '1TB(* Phầm mềm đã có sẵn)' },
            { icon: 'os-win', text: 'Window 10' },
        ],
    },
    {
        name: 'Doanh Nghiệp ',
        price: 'Liên Hệ',
        subPrice: '',
        subName: 'Không giới hạn thời gian sử dụng',
        specs: [
            { icon: 'gpu', text: '-Tùy chỉnh' },
            { icon: 'ram', text: '-Tùy chỉnh' },
            { icon: 'cpu', text: '-Tùy chỉnh' },
            { icon: 'hard-drive-white', text: '-Tùy chỉnh' },
            { icon: 'os-win', text: 'Windown 10, 11' },
        ],
    }

]

const Subscriptions = () => {

    const renderCard = () => {

        return listSubscriptions.map(sub => (
            <div className='l-3 col '>
                <div className="subscription">
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
                                <div className="spec">
                                    <Icon src={spec.icon}></Icon>
                                    <p className='text'>{spec.text}</p>
                                </div>

                            ))
                        }


                    </div>

                    <div className="ctnBtn">
                        <button className="btn-checkout  ctaBtn">Thanh toán</button>
                        <a className="btn-link">Chi tiết</a>
                    </div>
                </div>
            </div>

        ))
    }

    return (
        <div className="subscriptions">
            <div className="grid wide mainContent">
                <div className="wrapperTitle text-center">
                    <h2 className='title'>Đa dạng gói đáp ứng
                        <span className="highlight"> mọi nhu cầu của bạn</span></h2>
                    <p className="subTitle"></p>
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
    {
        icon: 'ios',
        name: 'IOS'
    },
    {
        icon: 'os-win-bold',
        name: 'Window'
    }
]
const ConnectReason = () => {



    return (
        <div className="connectReason">
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
                        <p className='title'>Ngay trên broswer:</p>

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

                    <button className='btn ctaBtn'>Truy cập website</button>
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
        <div className="productiveReason">
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

                    <button className='btn  ctaBtn'>Tư vấn setup</button>
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
const AppReason = () => {



    return (
        <div className="appReason">
            <div className="grid wide mainContent">
                <div className=" top col">
                    <div className="wrapperTitle text-center ">
                        <h2 className='title'>  <span className="highlight"> Đa dạng </span> Phầm mềm bản quyền</h2>
                        <p className='text'>Toàn bộ đều đã cài sẵn và  mua bản quyền. <br /> Bạn sử dụng hoàn toàn miễn phí</p>
                    </div>



                </div>
                <div className="listApp col l-10 m-auto">
                    {
                        listSupportApp.map(app => (
                            <div key={app.name} className='item'>
                                <Image alt='img' width={40} height={40} src={'/logo-app/' + app.icon + '.png'}></Image>
                                <p className='text'>{app.name}</p>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}



const SecureReason = () => {



    return (
        <div className="secureReason">
            <div className="grid wide ">
                <div className="mainContent l-12 col">
                    <div className="wrapperTitle text-center ">
                        <p className='subTitle'>Làm việc chung dễ dàng</p>
                        <h2 className='title'>Cải thiện <span className="highlight"> hiệu suất </span> làm việc</h2>
                    </div>


                    <button className='btn  ctaBtn'>Tư vấn setup</button>
                </div>

            </div>
        </div>
    )
}

const FeatureReason = () => {

    return (
        <div className="featureReason">
            <div className="grid wide mainContent">
                <div className="wrapperTitle text-center ">
                    <h2 className='title'>Tùy chọn tính năng theo gói
                        <span className="highlight"></span>
                    </h2>
                </div>

                <div className="wrapperTable">
                    <div className="rowContent" style={{ borderTop: 'unset' }}>
                        <div className="columnContent">TÍNH NĂNG</div>
                        <div className="columnContent">GÓI THÁNG</div>
                        <div className="columnContent">GÓI NĂM</div>
                        <div className="columnContent">DOANH NGHIỆP</div>
                    </div>
                    <div className="rowContent">
                        <div className="columnContent">HD</div>
                        <div className="columnContent"><Icon src='check'></Icon></div>
                        <div className="columnContent"><Icon src='check'></Icon></div>
                        <div className="columnContent"><Icon src='check'></Icon></div>
                    </div>
                    <div className="rowContent">
                        <div className="columnContent">4K</div>
                        <div className="columnContent">-</div>
                        <div className="columnContent"><Icon src='check'></Icon></div>
                        <div className="columnContent"><Icon src='check'></Icon></div>
                    </div>
                    <div className="rowContent">
                        <div className="columnContent">2 Màn hình</div>
                        <div className="columnContent"><Icon src='check'></Icon></div>
                        <div className="columnContent"><Icon src='check'></Icon></div>
                        <div className="columnContent"><Icon src='check'></Icon></div>
                    </div>
                    <div className="rowContent">
                        <div className="columnContent">2 Màn hình</div>
                        <div className="columnContent"><Icon src='check'></Icon></div>
                        <div className="columnContent"><Icon src='check'></Icon></div>
                        <div className="columnContent"><Icon src='check'></Icon></div>
                    </div>
                    <div className="rowContent">
                        <div className="columnContent">Số giờ sử dụng</div>
                        <div className="columnContent">160h/tháng</div>
                        <div className="columnContent">200h/tháng</div>
                        <div className="columnContent">Không giới hạn</div>
                    </div>
                    <div className="rowContent">
                        <div className="columnContent">Yêu cầu thêm tính năng</div>
                        <div className="columnContent">Thấp</div>
                        <div className="columnContent">Vừa</div>
                        <div className="columnContent">Cao</div>
                    </div>
                </div>
            </div>
        </div>
    )
}