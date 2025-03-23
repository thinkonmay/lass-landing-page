'use client';

import { useState } from 'react';
import Icon from '../icon';
import './faq.scss';

const listQA: IQA[] = [
    {
        question: 'Thinkmay Cloud PC là gì?',
        answer: 'Thinkmay Cloud PC là một dịch vụ máy tính cá nhân ảo được cung cấp qua đám mây. Thay vì sử dụng phần cứng máy tính truyền thống, người dùng có thể truy cập một máy tính mạnh mẽ và linh hoạt từ xa qua internet, giúp tiết kiệm chi phí phần cứng và tăng hiệu suất làm việc.'
    },
    {
        question:
            'Tôi có thể cài đặt các phần mềm trên Thinkmay Cloud PC không?',
        answer: 'Có, bạn hoàn toàn có thể cài đặt và sử dụng các phần mềm trên Thinkmay Cloud PC giống như trên máy tính thông thường. Dịch vụ hỗ trợ các phần mềm phổ biến như Microsoft Office, Adobe, và nhiều ứng dụng khác.'
    },
    {
        question: 'Tôi có thể tùy chỉnh cấu hình của Thinkmay Cloud PC không?',
        answer: 'Có, bạn có thể chọn cấu hình CPU, RAM, bộ nhớ lưu trữ, và các tùy chọn khác để phù hợp với nhu cầu sử dụng của mình. Chúng tôi cung cấp nhiều gói dịch vụ với các cấu hình linh hoạt để bạn lựa chọn.'
    },
    {
        question: 'Thinkmay Cloud PC hỗ trợ hệ điều hành nào?',
        answer: 'Thinkmay Cloud PC có thể sử dụng trên hầu hết các hệ điều hành phổ biến như Windows, macOS, Linux, và cả các thiết bị di động Android và iOS. Bạn chỉ cần truy cập qua trình duyệt web hoặc cài đặt phần mềm client tương thích.'
    },
    {
        question:
            'Các thiết bị nào thì dùng được Cloud PC? Tôi có cần đầu tư thiết bị gì không?',
        answer: (
            <>
                Mọi thiết bị thông minh (điện thoại, laptop, máy tính bảng,
                TV...) với kết nối Internet đều có thể sử dụng Cloud PC. Thiết
                bị quan trọng nhất bạn cần chuẩn bị là thiết bị phát wifi có tốc
                độ và đường truyền ổn định.
                <br />
                Ngoài ra, để tăng trải nghiệm sử dụng Cloud PC, đặc biệt khi
                chơi game, bạn có thể mua thêm tay cầm, chuột & bàn phím (khi
                chơi trên điện thoại) tùy theo nhu cầu.
            </>
        )
    },
    {
        question: 'Trên Thinkmay có thể chơi những game nào?',
        answer: 'Hầu hết các game đều chơi được trên Thinkmay, trừ 1 số tựa game online như: League of Legends, PUBG, Valorant, vv'
    },
    {
        question: 'Có được chơi thử không? Chơi thử như thế nào?',
        answer: (
            <>
                <h1>Hướng dẫn đăng ký demo trên ThinkMay Cloud PC</h1>
                <p>
                    Để được <strong>demo</strong> (dùng thử) trên{' '}
                    <strong>ThinkMay Cloud PC</strong>, bạn có thể làm theo các
                    bước sau:
                </p>

                <h2>1. Truy cập vào website chính thức của ThinkMay</h2>
                <p>
                    Trước tiên, hãy truy cập vào trang web chính thức của{' '}
                    <strong>ThinkMay Cloud PC</strong> để tìm hiểu thêm về các
                    dịch vụ và các gói sản phẩm họ cung cấp.
                </p>

                <h2>3. Đăng ký tài khoản</h2>
                <p>
                    Nếu có chương trình demo hoặc dùng thử miễn phí, bạn sẽ cần
                    đăng ký tài khoản trên ThinkMay Cloud PC.
                </p>
                <p>
                    Quá trình đăng ký thường yêu cầu bạn cung cấp một số thông
                    tin cơ bản như tên, email và mật khẩu.
                </p>

                <h2>5. Liên hệ với bộ phận hỗ trợ</h2>
                <p>
                    Nếu không tìm thấy thông tin về chương trình demo trên
                    website, bạn có thể liên hệ với bộ phận hỗ trợ khách hàng
                    của ThinkMay Cloud PC qua email, điện thoại hoặc live chat
                    (nếu có).
                </p>
                <p>
                    Yêu cầu thông tin về việc đăng ký demo hoặc dùng thử dịch vụ
                    của họ.
                </p>

                <p>
                    Nếu bạn không thấy tùy chọn demo trực tiếp trên website,
                    việc liên hệ với hỗ trợ khách hàng là một lựa chọn tốt để
                    nhận được thông tin chính xác.
                </p>
            </>
        )
    },
    {
        question: 'Tôi phải làm gì gì gặp lỗi và bị giật/lag?',
        answer: (
            <>
                <h1>Hạn chế tình trạng giật lag trên ThinkMay Cloud PC</h1>
                <p>
                    Để hạn chế tình trạng giật lag trên{' '}
                    <strong>ThinkMay Cloud PC</strong>, bạn có thể thử các cách
                    sau:
                </p>

                <h2>1. Kiểm tra kết nối Internet</h2>
                <p>
                    Kết nối internet chậm hoặc không ổn định là nguyên nhân phổ
                    biến gây giật lag khi sử dụng dịch vụ cloud PC.
                </p>
                <ul>
                    <li>
                        Đảm bảo rằng bạn có kết nối internet đủ mạnh, lý tưởng
                        là <strong>tốc độ tải xuống từ 50 Mbps trở lên</strong>{' '}
                        và <strong>tốc độ tải lên ổn định</strong>.
                    </li>
                    <li>
                        Nếu có thể, hãy kết nối trực tiếp qua dây Ethernet thay
                        vì sử dụng Wi-Fi để giảm độ trễ.
                    </li>
                </ul>

                <h2>2. Chọn máy chủ gần vị trí của bạn</h2>
                <p>
                    Nếu ThinkMay Cloud PC cung cấp lựa chọn về máy chủ (server),
                    hãy chọn máy chủ gần khu vực của bạn nhất. Điều này giúp
                    giảm độ trễ và cải thiện hiệu suất.
                </p>

                <h2>3. Giảm cấu hình đồ họa</h2>
                <p>
                    Nếu bạn đang sử dụng các ứng dụng hoặc chơi game đòi hỏi đồ
                    họa cao, hãy giảm cấu hình đồ họa trong ứng dụng hoặc game
                    đó.
                </p>
                <ul>
                    <li>
                        Đặc biệt là giảm độ phân giải, tắt các hiệu ứng đồ họa
                        không cần thiết để giảm tải cho hệ thống.
                    </li>
                </ul>

                <h2>4. Kiểm tra hiệu suất máy chủ Cloud</h2>
                <p>
                    Đảm bảo rằng máy chủ cloud mà bạn đang sử dụng có đủ tài
                    nguyên (CPU, RAM, v.v.) cho nhu cầu của bạn.
                </p>
                <ul>
                    <li>
                        Nếu có thể, yêu cầu nâng cấp cấu hình máy chủ của bạn
                        hoặc chuyển sang gói cao cấp hơn.
                    </li>
                </ul>

                <h2>5. Cập nhật phần mềm và trình điều khiển</h2>
                <p>
                    Đảm bảo rằng tất cả phần mềm liên quan đến ThinkMay Cloud PC
                    (bao gồm trình duyệt web, ứng dụng, hoặc phần mềm máy tính
                    của bạn) đều được cập nhật mới nhất.
                </p>
                <ul>
                    <li>
                        Đặc biệt nếu bạn sử dụng một ứng dụng hoặc phần mềm
                        chuyên dụng để kết nối tới cloud PC, hãy chắc chắn rằng
                        bạn đang sử dụng phiên bản mới nhất.
                    </li>
                </ul>

                <h2>6. Tắt các ứng dụng nền không cần thiết</h2>
                <p>
                    Kiểm tra và tắt các ứng dụng hoặc dịch vụ nền không cần
                    thiết trên máy tính của bạn, vì chúng có thể chiếm dụng băng
                    thông mạng hoặc tài nguyên hệ thống.
                </p>

                <h2>7. Cấu hình và tối ưu hóa bộ nhớ</h2>
                <p>
                    Đảm bảo rằng bộ nhớ (RAM) và dung lượng lưu trữ của máy chủ
                    cloud PC đủ để xử lý các tác vụ của bạn. Nếu có thể, yêu cầu
                    tăng bộ nhớ hoặc dung lượng lưu trữ nếu bạn đang gặp phải
                    tình trạng thiếu tài nguyên.
                </p>

                <h2>8. Kiểm tra tình trạng hệ thống</h2>
                <p>
                    Kiểm tra xem máy tính của bạn có bị nhiễm virus hoặc phần
                    mềm độc hại hay không, vì chúng có thể làm giảm hiệu suất
                    kết nối và gây lag.
                </p>

                <p>
                    Thử các giải pháp trên có thể giúp giảm giật lag và cải
                    thiện trải nghiệm khi sử dụng ThinkMay Cloud PC. Nếu tình
                    trạng vẫn không được cải thiện, bạn có thể liên hệ với bộ
                    phận hỗ trợ của ThinkMay để kiểm tra lại hệ thống hoặc máy
                    chủ của họ.
                </p>
            </>
        )
    }
];

function FAQ() {
    return (
        <div className="faq" id="faqs">
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

                <div className="wrapperQAs">
                    {listQA.map((qa, i) => (
                        <QA key={i} question={qa.question} answer={qa.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;

interface IQA {
    question: string;
    answer: any;
}
const QA = ({ question, answer }: IQA) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="ctnQA">
            <div
                onClick={() => {
                    setOpen((old) => !old);
                }}
                className="wrapperQuestion"
            >
                <p className="question">{question}</p>
                <button className="btnToggle">
                    {open ? (
                        <Icon src="arrow-down" className="icon" />
                    ) : (
                        <Icon src="arrow-left" />
                    )}
                </button>
            </div>
            {open ? <p className={open ? 'answer' : ''}>{answer}</p> : null}
            <hr />
        </div>
    );
};
