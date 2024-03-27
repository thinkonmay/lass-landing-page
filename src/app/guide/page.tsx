"use client"
import './index.scss';
import Icon from '../../components/icon';
import Breadcrumb from '../../components/breadcrumb/Breadcumb';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowDown, ArrowUp } from '../../../public/icon';
import Link from 'next/link';

const listDevices = [
    {
        name: 'Desktop',
        listOs: [
            {
                name: 'Window',
                icon: 'os-win-bold',
                text: 'Download',
                subText: 'for Window'
            },
            {
                name: 'MacOs',
                icon: 'ios',
                text: 'Download',
                subText: 'for macOs'
            }
        ]
    },
    {
        name: 'Mobile',
        listOs: [
            {
                name: 'Android',
                icon: 'android',
                text: 'Incoming...',
                subText: ''
            },
            {
                name: 'IOS',
                icon: 'ios',
                text: 'Incoming...',
                subText: ''
            }
        ]
    },
]
export default function Guide() {
    return (
        <>
            <div className="cloudPcGuide grid wide">
                <div className="wrapperTitle">
                    <h1 className="title">
                        Hướng dẫn sử dụng
                    </h1>
                </div>

                <div className="mainContent">
                    <Subscribe></Subscribe>

                    <ConnectToPc></ConnectToPc>
                    <RightWayShutdown></RightWayShutdown>
                    <OptimizeSetting></OptimizeSetting>
                </div>
            </div>
        </>
    );
}


const Subscribe = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='section'>
            <button className='btnTitle' onClick={() => setOpen(old => !old)}>
                {open ? <ArrowUp style={{ strokeWidth: '2px', stroke: 'black' }} ></ArrowUp> : <ArrowDown style={{ strokeWidth: '4px', stroke: 'black' }} ></ArrowDown>}
                <h2 className="title" >
                    Đăng ký tài khoản
                </h2>
            </button>
            {
                <div className={open ? 'content subscribe show' : 'content subscribe'}>
                    <div className="left">
                        <p className='text'>
                            Để tiến hành thuê dịch vụ Thinkmay, <br />bạn hãy chuyển khoản đến stk:<br />
                            MB Bank: 1502200344444 - Do Van Dat : <br />
                            kèm với email dùng trong Thinkmay.<br />
                            Ví dụ: thienvanlea1@gmail.com
                        </p>
                    </div>
                    <div className="right">
                        <Image alt='qr-code' width={320} height={180} src='/qr-code.jpg'></Image>
                    </div>
                </div>
            }

        </div>

    )
}
const ConnectToPc = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='section'>
            <button className='btnTitle' onClick={() => setOpen(old => !old)}>
                {open ? <ArrowUp style={{ strokeWidth: '2px', stroke: 'black' }} ></ArrowUp> : <ArrowDown style={{ strokeWidth: '4px', stroke: 'black' }} ></ArrowDown>}
                <h2 className="title" >
                    Kết nối chiếc CloudPC của bạn
                </h2>
            </button>
            {
                <div className={open ? 'content connectToPc show' : 'content connectToPc'}>
                    <div className="left">
                        <p className='text'>
                            Truy cập  Store trên App, hoặc website: App.thinkmay.net <br />
                            Chọn game bạn yêu thích & cài đặt
                        </p>


                        <p className="text">
                            <b>Lưu ý: </b> Game có sẵn trong ổ D
                            Dữ liệu ổ C sẽ bị xoá sau khi tắt máy, vui lòng chỉ lưu ở ổ D

                        </p>
                        <p className='text'>
                            <b>Đọc thêm:</b>
                            <a href="https://docs.google.com/document/d/1PvQz3FruZMI6NWe5DSARs_G8OIdhudsWDb6cK6ZhtQs/edit?usp=sharing"> Backup file save khi chơi bằng account Steam Offline</a>
                        </p>
                    </div>
                    <div className="right">
                        <Image alt='qr-code' width={320} height={180} src='/install-game.png'></Image>
                    </div>
                </div>
            }

        </div>

    )
}

const RightWayShutdown = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='section'>
            <button className='btnTitle' onClick={() => setOpen(old => !old)}>
                {open ? <ArrowUp style={{ strokeWidth: '2px', stroke: 'black' }} ></ArrowUp> : <ArrowDown style={{ strokeWidth: '4px', stroke: 'black' }} ></ArrowDown>}
                <h2 className="title" >
                    Tắt máy đúng cách
                </h2>
            </button>
            {
                <div className={open ? 'content connectToPc show' : 'content connectToPc'}>
                    <div className="left">
                        <p className='text'>
                            Tại trang app.thinkmay.net hoặc màn hình chính.
                        </p>


                        <p className="text">
                            Chuột phải/chạm giữ vào icon game chọn "Shutdown"
                        </p>
                        <p className="text">
                            <b>Lưu ý: </b> Không ấn shutdown trong máy remote
                        </p>
                    </div>
                    <div className="">
                        <Image alt='qr-code' width={320} height={180} src='/right-way-shutdown.png'></Image>
                    </div>
                </div>
            }

        </div>

    )
}

const OptimizeSetting = () => {

    const [open, setOpen] = useState(false)
    const [openMobile, setOpenMobile] = useState(false)
    const [openDesktop, setOpenDesktop] = useState(false)


    return (
        <div className='section'>
            <button className='btnTitle' onClick={() => setOpen(old => !old)}>
                {open ? <ArrowUp style={{ strokeWidth: '2px', stroke: 'black' }} ></ArrowUp> : <ArrowDown style={{ strokeWidth: '4px', stroke: 'black' }} ></ArrowDown>}
                <h2 className="title" >
                    Tối ưu hoá độ mượt & ổn định
                </h2>
            </button>
            {
                <div className={open ? 'content optimize show' : 'content optimize'}>
                    <p className='text my-[12px]'> <b>Khuyến nghị:</b> dùng qua App <Link href={'/download'}>tải xuống</Link>
                        <br />
                        Mở trên Chrome nếu dùng trên website để có trải nghiệm tốt nhất
                        <br />
                        <b>Nhắn tin</b> qua fanpage để được support khi gặp tình trạng giật hình, delay
                    </p>
                    <button className='btnTitle' onClick={() => setOpenMobile(old => !old)}>
                        {openMobile ? <ArrowUp style={{ strokeWidth: '1px', stroke: 'black' }} ></ArrowUp> : <ArrowDown style={{ strokeWidth: '3px', stroke: 'black' }} ></ArrowDown>}
                        <h3 >
                            Trên mobile
                        </h3>
                    </button>
                    <div className={openMobile ? 'content  mobile show' : 'content  mobile'}>
                        <div className="left">
                            <p className='text'>
                                Góc trên bên phải: Chỉnh bitrate, mở Gamepad ảo
                            </p>



                            <p className='text'>
                                <b>Bitrate:</b> Tăng/giảm chất lượng hình ảnh. Mạng yếu gây tình trạng delay thì cần giảm
                            </p>
                        </div>
                        <div className="right">
                            <Image alt='qr-code' width={320} height={180} src='/setting-mobile.png'></Image>

                        </div>
                    </div>


                    <button className='btnTitle' onClick={() => setOpenDesktop(old => !old)}>
                        {openDesktop ? <ArrowUp style={{ strokeWidth: '1px', stroke: 'black' }} ></ArrowUp> : <ArrowDown style={{ strokeWidth: '3px', stroke: 'black' }} ></ArrowDown>}
                        <h3 >
                            Trên Desktop
                        </h3>
                    </button>
                    <div className={openDesktop ? 'content  mobile show' : 'content  mobile'}>
                        <div className="left">
                            <ul className='text'>
                                <li><b>Làm mới liên tục:</b> Bật tăng độ mượt(cần mạng mạnh & ổn định), tắt nếu gặp tình trạng giật hình</li>
                                <li><b>Fix lỗi phím:</b> Bật với 1 số game không nhận phím</li>
                                <li><b>Chế độ gaming:</b> Tắt chuột khi chơi game</li>
                                <li><b>MBps:</b> Tăng/giảm chất lượng hình ảnh. Mạng yếu gây tình trạng delay thì cần giảm </li>
                                <li><b>Fps:</b> Tăng giảm số khung hình trên giây. Mạng không ổn định gây tình trạng drop fps thì cần giảm</li>
                            </ul>
                        </div>
                        <div className="right">
                            <Image alt='qr-code' width={320} height={180} src='/setting.png'></Image>
                        </div>
                    </div>



                </div>
            }

        </div>

    )
}