'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowDown, ArrowUp } from '../../../public/icon';
import './index.scss';

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
    }
];
export default function Guide() {
    return (
        <>
            <div className="cloudPcGuide grid wide">
                <div className="wrapperTitle">
                    <h1 className="title">Hướng dẫn sử dụng</h1>
                    <p>
                        Nếu gặp bất kì lỗi gì trong quá trình sử dụng, vui lòng nhắn tin cho tụi mình qua Fanpage để được support kịp thời nhất!
                    </p>
                </div>

                <div className="mainContent">
                    <iframe
                        src="https://www.youtube.com/embed/asrq0ArmCY4?si=l1SMpH73jcc2RIdY" title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        //@ts-ignore


                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                </div>
            </div>
        </>
    );
}

const Subscribe = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="section">
            <button className="btnTitle" onClick={() => setOpen((old) => !old)}>
                {open ? (
                    <ArrowUp
                        style={{ strokeWidth: '2px', stroke: 'black' }}
                    ></ArrowUp>
                ) : (
                    <ArrowDown
                        style={{ strokeWidth: '4px', stroke: 'black' }}
                    ></ArrowDown>
                )}
                <h2 className="title">Đăng ký tài khoản</h2>
            </button>
            {
                <div
                    className={
                        open ? 'content subscribe show' : 'content subscribe'
                    }
                >
                    <div className="left">
                        <p className="text">
                            Để tiến hành thuê dịch vụ Thinkmay, <br />
                            bạn hãy chuyển khoản đến stk:
                            <br />
                            MB Bank: 1502200344444 - Do Van Dat : <br />
                            kèm với email dùng trong Thinkmay.
                            <br />
                            Ví dụ: thienvanlea1@gmail.com
                        </p>
                    </div>
                    <div className="right">
                        <Image
                            alt="qr-code"
                            width={320}
                            height={180}
                            src="/qr-code.jpg"
                        ></Image>
                    </div>
                </div>
            }
        </div>
    );
};
const ConnectToPc = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="section">
            <button className="btnTitle" onClick={() => setOpen((old) => !old)}>
                {open ? (
                    <ArrowUp
                        style={{ strokeWidth: '2px', stroke: 'black' }}
                    ></ArrowUp>
                ) : (
                    <ArrowDown
                        style={{ strokeWidth: '4px', stroke: 'black' }}
                    ></ArrowDown>
                )}
                <h2 className="title">Kết nối chiếc CloudPC của bạn</h2>
            </button>
            {
                <div
                    className={
                        open
                            ? 'content connectToPc show'
                            : 'content connectToPc'
                    }
                >
                    <div className="left">
                        <p className="text">
                            Truy cập Connect YourPC trên App, hoặc website{' '}
                            <br />
                            Ấn connect & đợi
                        </p>
                    </div>
                    <div className="right">
                        <Image
                            alt="qr-code"
                            width={320}
                            height={180}
                            src="/connect-pc.png"
                        ></Image>
                    </div>
                </div>
            }
        </div>
    );
};

const RightWayShutdown = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="section">
            <button className="btnTitle" onClick={() => setOpen((old) => !old)}>
                {open ? (
                    <ArrowUp
                        style={{ strokeWidth: '2px', stroke: 'black' }}
                    ></ArrowUp>
                ) : (
                    <ArrowDown
                        style={{ strokeWidth: '4px', stroke: 'black' }}
                    ></ArrowDown>
                )}
                <h2 className="title">Tắt máy đúng cách</h2>
            </button>
            {
                <div
                    className={
                        open
                            ? 'content connectToPc show'
                            : 'content connectToPc'
                    }
                >
                    <div className="left">
                        <p className="text">
                            Tại trang app.thinkmay.net hoặc màn hình chính.
                        </p>

                        <p className="text">
                            Chuột phải/chạm giữ vào icon game chọn "Shutdown"
                        </p>
                        <p className="text">
                            <b>Lưu ý: </b> Không ấn shutdown trong máy remote
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            alt="qr-code"
                            width={320}
                            height={180}
                            src="/shutdown.png"
                        ></Image>
                    </div>
                </div>
            }
        </div>
    );
};

const OptimizeSetting = () => {
    const [open, setOpen] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);
    const [openDesktop, setOpenDesktop] = useState(false);

    return (
        <div className="section">
            <button className="btnTitle" onClick={() => setOpen((old) => !old)}>
                {open ? (
                    <ArrowUp
                        style={{ strokeWidth: '2px', stroke: 'black' }}
                    ></ArrowUp>
                ) : (
                    <ArrowDown
                        style={{ strokeWidth: '4px', stroke: 'black' }}
                    ></ArrowDown>
                )}
                <h2 className="title">Tối ưu hoá độ mượt & ổn định</h2>
            </button>
            {
                <div
                    className={
                        open ? 'content optimize show' : 'content optimize'
                    }
                >
                    <p className="text my-[12px]">
                        {/*<b>Khuyến nghị:</b> dùng qua App <Link href={'/download'}>tải xuống</Link>*/}
                        <br />
                        Mở trên Chrome nếu dùng trên website để có trải nghiệm
                        tốt nhất
                        <br />
                        <b>Nhắn tin</b> qua fanpage để được support khi gặp tình
                        trạng giật hình, delay
                    </p>

                    <div className={'content  mobile show'}>
                        <div className="left">
                            <ul className="text">
                                <li>
                                    <b>Fix lỗi phím: </b> Bật với 1 số game
                                    không nhận phím
                                </li>
                                <li>
                                    <b>Share link: </b>Chia sẻ link để bạn bè
                                    chơi chung
                                </li>
                                <li>
                                    <b>Chế độ gaming: </b> Tắt chuột khi chơi
                                    game
                                </li>
                                <li>
                                    <b>Bitrate: </b>Giảm nếu gặp tình trạng
                                    delay
                                </li>
                                <li>
                                    <b>Fps: </b>Thử tất các các mức để tìm ra
                                    mức fps phù hợp
                                </li>
                            </ul>
                        </div>
                        <div className="right">
                            <Image
                                alt="qr-code"
                                width={320}
                                height={180}
                                src="/setting.png"
                            ></Image>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};
