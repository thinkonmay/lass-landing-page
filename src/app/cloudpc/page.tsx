
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

const listReason = [
    {
        title: 'Mọi thiết bị, mọi nơi',
        text: 'Biến bất kì chiếc laptop, Điện thoai, thậm chí cả tivi thành 1 chiếc PC mạnh mẽ. ',
        icon: '',
    },
    {
        title: 'Chỉ từ 299k/tháng',
        text: 'Gia hạn mỗi tháng. Hủy ngay lập tức khi bạn muốn.',
        icon: '',
    },
    {
        title: 'Phầm mềm bản quyền',
        text: 'Đều đã được cài sẵn & có bản quyền. Không mất thời gian download & crack.',
        icon: '',
    },
    {
        title: 'Bảo mật tuyệt đối',
        text: 'Mọi dữ liệu đều được lưu trên cloud, không còn nỗi lo mất data.',
        icon: '',
    },

]
const Reason = () => {


    const renderCard = () => {

        return listReason.map(rea => (
            <div className='l-3 col '>
                <div className="card">
                    <div className="">
                        <Icon src='laptop' />
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