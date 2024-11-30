'use client';

import { useState } from 'react';
import Icon from '../icon';
import './faq.scss';


const listQA: IQA[] = [
    //{
    //    question: 'Cloud PC tại Thinkmay là gì, và ưu điểm nổi bật là gì?',
    //    answer: <>Dịch vụ Cloud PC của Thinkmay cung cấp khả năng truy cập máy tính cấu hình cao từ xa qua Internet, giúp người dùng sở hữu "máy tính trên mây" cấu hình cao mà không cần chi phí đầu tư phần cứng, cùng như dễ dàng nâng cấp tài nguyên theo nhu cầu.
    //        <br />
    //        Ưu điểm nổi bật của Thinkmay Cloud PC bao gồm:
    //        <br />
    //        - Giá cả phải chăng, chỉ từ 299K VNĐ/ tháng
    //        <br />

    //        - Cho phép lưu hành trình game và mod game
    //        <br />

    //        - Tùy chỉnh linh hoạt core và RAM theo nhu cầu
    //        <br />

    //        - Hỗ trợ khách hàng 24/7
    //    </>
    //},

    {
        question: 'Các thiết bị nào thì dùng được Cloud PC? Tôi có cần đầu tư thiết bị gì không?',
        answer: <>Mọi thiết bị thông minh (điện thoại, laptop, máy tính bảng, TV...) với kết nối Internet đều có thể sử dụng Cloud PC. Thiết bị quan trọng nhất bạn cần chuẩn bị là thiết bị phát wifi có tốc độ và đường truyền ổn định. {<br />} Ngoài ra, để tăng trải nghiệm sử dụng Cloud PC, đặc biệt khi chơi game, bạn có thể mua thêm tay cầm, chuột & bàn phím (khi chơi trên điện thoại) tùy theo nhu cầu.</>
    },
    {
        question: 'Hỗ trợ hệ điều hành nào?	',
        answer: 'Hỗ trợ cả Windows Linux, Android, IOS và MacOs '
    },
    {
        question: 'Trên Thinkmay có thể chơi những game nào?',
        answer: 'Hầu hết các game đều chơi được trên Thinkmay, trừ 1 số tựa game cấm máy ảo như: League of Legends, PUBG, Val, vv'
    },

    {
        question: 'Cài đặt Cloud PC trên điện thoại như thế nào?',
        answer: <>
            Bạn có thể chơi trực tiếp ngay trên website
            <br />

            Thêm website về màn hình chính cho thuận tiện sử dụng
        </>
    },
    {
        question: 'Có được chơi thử không? Chơi thử như thế nào?',
        answer: 'Bạn có thể nhắn tin qua Fanpage để được trải nghiệm miễn phí trong 15 phút'
    },
    {
        question: 'Tôi phải làm gì gì gặp lỗi và bị giật/lag?',
        answer: 'Vui lòng liên hệ Fanpage để được hỗ trợ kịp thời nhất'
    },
    //{
    //    question: '',
    //    answer: ''
    //},
    //{
    //    question: '',
    //    answer: ''
    //},
    //{
    //    question: '',
    //    answer: ''
    //}
];


function FAQ() {







    return (
        <div className="faq" id='faqs'>
            <div className="mainContent grid wide">
                <div className="wrapperTitle text-center">
                    <h2 className="title">
                        Câu hỏi thường gặp về
                        <span className="highlight"> Thinkmay</span>
                    </h2>
                    <p className="subTitle !mt-4">
                        {/**Dịch vụ chỉ cho thuê PC, không kèm tài khoản game*/}
                    </p>
                </div>

                <div className='wrapperQAs'>
                    {
                        listQA.map((qa, i) => (<QA key={i} question={qa.question} answer={qa.answer} />))
                    }
                </div>
            </div>
        </div>
    );
}

export default FAQ;


interface IQA {
    question: string,
    answer: any
}
const QA = ({ question, answer }: IQA) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='ctnQA'>
            <div onClick={() => { setOpen(old => !old) }} className='wrapperQuestion'>
                <p className='question'>
                    {question}
                </p>
                <button className='btnToggle'>
                    {open ? <Icon src="arrow-down" className='icon' /> : <Icon src="arrow-left" />}
                </button>
            </div>
            {
                open ?
                    <p className={open ? 'answer' : ''}>
                        {answer}
                    </p> : null

            }
            <hr />

        </div>
    )
}