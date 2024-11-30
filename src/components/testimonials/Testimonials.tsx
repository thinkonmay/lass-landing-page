'use client';

import { APP_REDIRECT, UserEvents } from '@/utils/analytics';
import React, { useState } from 'react';
import Icon from '../icon';
import Popup from '../popup/popup';
import './testimonials.scss';

interface IFeedback {
    name: string;
    img: string;
    job: string;
    feedback: string[];
}
const discord: IFeedback[] = [
    {
        "name": "Hoang Phu",
        "img": "https://i.imgur.com/pQVKxrB.jpg",
        "job": "Sinh Viên",
        "feedback": [
            "Giao diện đẹp, độ nhạy và phản hồi tốt. Dịch vụ chăm sóc khách hàng tốt. Vẫn còn một số lỗi nhỏ và chưa tối ưu hoàn toàn. Đánh giá 4.5/5.",
            "Giá cloud khá cao, chưa phù hợp với người dùng trung bình. Truyền thông chưa nổi trội. Cộng đồng vui vẻ, dễ hòa nhập. Đánh giá 3.5/5.",
            "Dự án có triển vọng, tiềm năng phát triển cao. Mong muốn phát triển hơn nữa trong năm mới."
        ]
    },
    {
        "name": "Trang le",
        "img": "https://i.imgur.com/X7zQUqR.jpg",
        "job": "Freelancer",
        "feedback": [
            "Khuyến nghị gói 359k cho người muốn gắn bó dài hạn.",
            "Trước đây phải chờ máy 75%, giờ đã cải thiện nhiều. Gói 359k giảm thiểu thời gian chờ đợi.",
            "Gói ưu tiên cho cảm giác ổn định hơn. 160h chơi, chuyển được giờ thừa sang tháng sau. Giá rẻ hơn nhiều so với dịch vụ mạng khác."
        ]
    },
    {
        "name": "Lee Anh",
        "img": "https://i.imgur.com/dNiXHqK.jpg",
        "job": "Sinh Viên",
        "feedback": [
            "Sau 1 tháng, dịch vụ ổn định hơn, delay tốt hơn. FPS không còn bị giới hạn ở 60, màn hình 144hz chơi khá ổn.",
            "Thiếu tính năng rung của tay cầm so với các dịch vụ cloud khác."
        ]
    },
    {
        "name": "Tan Tai",
        "img": "https://i.imgur.com/JQ0h9SL.jpg",
        "job": "Sinh Viên",
        "feedback": [
            "Cloud gaming mượt, không delay. Tay cầm tốt. Giá phù hợp, cấu hình mạnh. Nhân viên chất lượng 10/10."
        ]
    },
    {
        "name": "Dat Do",
        "img": "https://i.imgur.com/WqVjcVY.jpg",
        "job": "Sinh Viên",
        "feedback": [
            "Trải nghiệm trên Edge, cloud chất lượng, delay tốt hơn Geforce Now và Xbox Cloud. Vài lỗi nhỏ không đáng kể. Mong team tiếp tục hoàn thiện."
        ]
    }
];

interface IModalState {
    isOpen: boolean;
    content?: IFeedback;
}
function Testimonials() {
    const [modalContent, setModalContent] = useState<IFeedback>({
        name: 'Dat Do',
        img: '',
        job: 'Sinh viên',
        feedback: [
            'Test thử 1 tuần trên Edge, Cloud chất lượng, độ delay thì hơn hẵng những cloud khác mừng từng xài như Geforce Now, Xbox Cloud. Tùy còn vài lỗi linh tinh nhưng cũng không ảnh hưởng lắm. Mong team sẽ hoàn thiện cloud hơn nữa và được mọi người ủng hộ.'
        ]
    });
    const [isOpenModal, setOpenModal] = useState(false);

    const seeMoreFeedback = (input: IFeedback) => {
        setOpenModal(true);
        setModalContent(input);
    };

    const send = (data: FormData) => {
        const payload: any = {};
        data.forEach((val, key) => (payload[key] = val));
        UserEvents({ type: 'contact_us/message', payload });
    };

    const FeedBacks = () => {
        return (
            <div className="wrapperFeedback grid wide">
                {discord.map((x, index) => (
                    <div key={index} className=" feedback l-6 c-12">
                        <p className="text">
                            {x.feedback.map((y, index) => (
                                <React.Fragment key={index}>
                                    - {y} <br />
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                        <button
                            onClick={() => seeMoreFeedback(x)}
                            className="seeMore"
                        >
                            Xem Thêm
                        </button>
                        <div className="user">
                            <div className="img">
                                <Icon src="user"></Icon>
                            </div>
                            <div className="info">
                                <h6 className="name">{x.name}</h6>
                                <p className="job">{x.job}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    return (
        <div className="testimonials">
            <div className="feedbacks">
                <div className="ctnFeedbacks">
                    <div className="content">
                        <div className="grid wide">
                            <h2>
                                Đánh giá từ khách hàng của{' '}
                                <span className="specicalText">Thinkmay</span>
                            </h2>
                        </div>
                        <FeedBacks />
                    </div>
                </div>

                <div className="feedbackForm grid wide">
                    <div className="img">
                        <Icon width={95} height={95} src={'supporter'}></Icon>
                    </div>

                    <div className="form">
                        <div className="top">
                            <h2 className="title">
                                Liên hệ với <span>Thinkmay</span>
                            </h2>
                            <p>
                                Bạn muốn liên hệ với chúng mình, chúng mình luôn
                                sẵn sàng hỗ trợ!
                            </p>
                        </div>

                        <form className="wrapperInputs  l-6" action={send}>
                            <input
                                name="name"
                                type="text"
                                placeholder="Tên của bạn *"
                            />
                            <input
                                name="email"
                                type="text"
                                placeholder="Email của bạn *"
                            />
                            <input
                                name="phone"
                                type="text"
                                placeholder="SĐT của bạn *"
                            />
                            <input
                                type="text"
                                name="content"
                                className="bigInput"
                                placeholder="Ghi chú thêm cho chúng tôi (nếu có)"
                            />

                            <button className="btn btn-send">
                                Gửi <Icon src="send" />
                            </button>
                        </form>

                        <div className="logo">
                            <Icon width={105} height={51} src="logo-black" />
                            <a
                                href={APP_REDIRECT}
                                target="_self"
                                className="btn mx-auto mt-[1.2rem] ctaBtn max-w-3xl"
                            >
                                Dùng thử ngay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Popup open={isOpenModal} setOpen={setOpenModal}>
                <FeedbackModal {...modalContent}></FeedbackModal>
            </Popup>
        </div>
    );
}

export default Testimonials;

const FeedbackModal = (props: IFeedback) => {
    console.log(props);
    return (
        <div className="feedbackModal thinkmayScroll">
            <div className="user">
                <div className="img">
                    <Icon src="user"></Icon>
                </div>
                <div className="info">
                    <h6 className="name">{props.name}</h6>
                    <p className="job">{props.job}</p>
                </div>
            </div>

            <p className="text">
                {props?.feedback?.map((y) => (
                    <React.Fragment>
                        - {y} <br />
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
};
