
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


const Reason = () => {

    const Card = () => {

        return (
            <div className='l-3 col '>
                <div className="card">
                    <Icon src='laptop' />
                    <div className="title">
                        Mọi thiết bị, mọi nơi
                    </div>
                    <p className="text">
                        Biến bất kì chiếc laptop, Điện thoai, thậm chí cả tivi thành 1 chiếc PC mạnh mẽ.
                    </p>

                    <button>Chi tiết thiết bị</button>

                </div>
            </div>
        )
    }

    return (
        <div className="reason">
            <div className="grid wide mainContent">
                <div className="wrapperTitle">
                    <h2 className='title'>4 lí do bạn nên có 1 chiếc <span className="highlight"> CLOUD PC</span></h2>
                    <p className="subTitle"></p>
                </div>

                <div className="cards row">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    )
}