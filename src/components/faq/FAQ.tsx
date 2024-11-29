'use client';

import { useState } from 'react';
import Icon from '../icon';
import './faq.scss';


const listQA: IQA[] = [
    {
        question: 'Cloud PC tại Thinkmay là gì, và ưu điểm nổi bật là gì?',
        answer: 'Dịch vụ Cloud PC của Thinkmay cung cấp khả năng truy cập máy tính cấu hình cao từ xa qua internet. Đây là giải pháp giúp người dùng tiết kiệm chi phí đầu tư phần cứng và dễ dàng nâng cấp tài nguyên theo nhu cầu. Ưu điểm nổi bật bao gồm: giá cả phải chăng, khả năng tùy chỉnh linh hoạt, và hỗ trợ kỹ thuật chuyên nghiệp.        '
    },
    {
        question: 'Cần chuẩn bị gì để sử dụng?	',
        answer: 'Một thiết bị có kết nối internet (máy tính, điện thoại, hoặc máy tính bảng) và đường truyền ổn định. Thinkmay sẽ cung cấp phần mềm hoặc thông tin kết nối.        '
    },
    {
        question: 'Dịch vụ có an toàn không?	',
        answer: 'Cam kết bảo mật dữ liệu bằng mã hóa, sao lưu tự động và hệ thống tường lửa hiện đại, đạt chuẩn quốc tế.        '
    },
    {
        question: 'Làm sao để nâng cấp tài nguyên?	',
        answer: 'Liên hệ đội ngũ hỗ trợ Thinkmay để nâng cấp CPU, RAM, hoặc dung lượng trong vài phút, không ảnh hưởng đến dữ liệu.'
    },
    {
        question: 'Hỗ trợ hệ điều hành nào?	',
        answer: 'Hỗ trợ cả Windows và Linux, Android, IOS, MacOs '
    },
    {
        question: 'Chi phí dịch vụ được tính như thế nào?	',
        answer: 'Theo giờ sử dụng thực tế hoặc gói cước cố định hàng tháng, đảm bảo linh hoạt và tiết kiệm.        '
    },
    {
        question: 'Có được chơi thử không? Chơi thử như thế nào?',
        answer: 'Bạn có thể nhắn tin qua Fanpage để được trải nghiệm miễn phí trong 15 phút'
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
    //},
    //{
    //    question: '',
    //    answer: ''
    //}
];


function FAQ() {







    return (
        <div className="faq">
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
    answer: string
}
const QA = ({ question, answer }: IQA) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='ctnQA'>
            <div className='wrapperQuestion'>
                <p className='question'>
                    {question}
                </p>
                <button onClick={() => { setOpen(old => !old) }} className='btnToggle'>
                    {open ? <Icon src="arrow-down" className='icon' /> : <Icon src="arrow-up" />}
                </button>
            </div>
            <hr />
            {
                open ?
                    <p className={open ? 'answer' : ''}>
                        {answer}
                    </p> : null

            }

        </div>
    )
}