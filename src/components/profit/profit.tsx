'use client';

import Link from 'next/link';
import { useState } from 'react';
import Icon from '../icon';
import './profit.scss';



const profits = [
    {
        subtitle: '',
        icon: 'mi-laptop',
        title: 'Mọi thiết bị, mọi nơi',
        content: [
            'Laptop, điện thoại, TV,... ở mọi cấu hình đều có thể chơi game xịn, xử lý đồ họa,...'
        ],
        link: {
            href: '#',
            name: 'Đăng ký ngay'
        }
    },
    {
        subtitle: '',
        icon: 'credit-card',
        title: '299k/tháng',
        link: {
            href: '#',
            name: 'Chi tiết hoàn tiền'
        },
        content: <>
            Thay vì hàng chục triệu VNĐ nâng cấp thiết bị chơi game.,
            <br />
            Có chính sách hoàn tiền</>
    },
    {
        subtitle: '',
        icon: 'shield',
        title: 'Lưu dữ liệu',
        content: <>
            Mọi dự liệu sử dụng sau khi tắt máy sẽ lưu lại.
            <br />
            Có thể mua thêm bộ nhớ bổ sung.
        </>,
        link: {
            href: '',
            name: 'Mua thêm dữ liệu'
        }
    },

    {
        subtitle: '',
        icon: 'bell-outline',
        title: 'Hỗ trợ người dùng',
        content: [
            'Đội ngũ hỗ trợ khách hàng 24/7 nhanh chóng, tận tình.'
        ],
        link: {
            href: '',
            name: 'Liên hệ ngay'
        }
    }
];


function Profit() {







    return (
        <div className="profit">
            <div className="mainContent grid wide">
                <div className="wrapperTitle text-center">
                    <h2 className="title">
                        <span className="highlight"> CLOUD</span> PC LÀ GÌ?
                    </h2>
                    <p className="subTitle !mt-4">
                        Cloud PC là công nghệ máy tính ảo với dữ liệu và hạ tầng được lưu trữ trên “đám mây”, thay vì thiết bị phần cứng. Thông qua Internet, người dùng có thể sử dụng những “hạ tầng trên mây” này để chơi game, xử lý đồ họa,... trên mọi thiết bị.                     </p>
                </div>

                <div className="wrapperTitle text-center mt-28">
                    <h2 className="title">
                        GIÁ TRỊ KHI SỬ DỤNG CLOUD PC TẠI  <span className="highlight"> THINKMAY</span>
                    </h2>
                </div>
                <div className='wrapperProfits'>
                    {
                        profits.map((item, i) => (<Card
                            img={item.icon}
                            key={item.title}
                            title={item.title}
                            subtitle={item.content}
                            href={item.link.href}
                            hrefName={item.link.name}
                        />))
                    }
                </div>
            </div>
        </div>
    );
}

export default Profit;


interface ICard {
    img: string,
    title: string,
    subtitle: any,
    href: string,
    hrefName: string
}
const Card = ({ img, title, subtitle, href, hrefName }: ICard) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='profitCard shadow-sm'>
            <div className='icon'>
                <Icon width={40} height={40} src={img}></Icon>
            </div>
            <p className='title'>
                {title}
            </p>

            <p className="subTitle mb-8">
                {subtitle}
            </p>


            <Link className='mt-auto' href='#'>
                {hrefName}
            </Link>
        </div>
    )
}