import Image from 'next/image';

import './contact.scss';
import Icon from '../../components/icon';
import Breadcrumb from '../../components/breadcrumb/Breadcumb';

export default function Contact() {
    return (
        <>
            <Breadcrumb></Breadcrumb>
            <div className="contact ">
                <div className="feedbackForm grid wide">
                    <div className="form l-8 c-12">
                        <div className="top">
                            <h2 className="title">Liên hệ với chúng tôi</h2>
                            <p>
                                Vui lòng điền thông tin của bạn vào form bên
                                dưới và chúng tôi sẽ liên lạc ngay cho bạn.
                            </p>
                        </div>

                        <form className="wrapperInputs" action="">
                            <input type="text" placeholder="Tên của bạn *" />
                            <input type="text" placeholder="Email của bạn *" />
                            <input type="text" placeholder="SĐT của bạn *" />
                            <input
                                type="text"
                                className="bigInput"
                                placeholder="Ghi chú thêm cho chúng tôi (nếu có)"
                            />

                            <button className="btn btn-send">
                                Gửi{' '}
                                <Icon src="send" width={24} height={24}></Icon>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
