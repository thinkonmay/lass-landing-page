import './warranty.scss';

interface IContent {
    category: string;
    contents: (IContent | string)[];
    type?: 'first' | 'second' | 'third' | undefined;
}
//{
//            category:
//                '2.1. Tư vấn hỗ trợ kiểm tra sản phẩm trước khi mua',
//            type: 'second',

//            contents: [
//                'Kiểm tra màu sắc, cấu hình, và chứng thực máy trước khi mua.',
//                'Máy chưa active là máy chưa kích hoạt bảo hành theo tình trạng kiểm tra trực tiếp trên trang chủ Apple/ Lenovo'
//            ]
//        },
export default function Warranty() {
    const policys: IContent[] = [
        {
            category: 'Điều kiện áp dụng',
            type: 'first',
            contents: [
                {
                    category: 'Với gói tháng:',
                    type: 'second',
                    contents: [
                        'Thời gian: Trong vòng 5 ngày kể từ khi được cấp máy.',
                        'Số giờ sử dụng: không quá 12h.'
                    ]
                },
                {
                    category: 'Với gói tuần:',
                    type: 'second',
                    contents: [
                        'Thời gian: Trong vòng 2 ngày kể từ khi được cấp máy.',
                        'Số giờ sử dụng: không quá 3h.'
                    ]
                }
            ]
        },
        {
            category: 'Quy trình yêu cầu hoàn tiền:',
            type: 'first',
            contents: [
                'Liên hệ qua Fanpage chính thức của Thinkmay.',
                'Cung cấp thông tin tài khoản, lý do yêu cầu hoàn tiền',
                'Yêu cầu sẽ được xử lý trong vòng 1 ngày làm việc.'
            ]
        },
        {
            category: 'Lưu ý:',
            type: 'first',
            contents: [
                'Chính sách không áp dụng cho các trường hợp vi phạm điều khoản sử dụng dịch vụ hoặc cố ý gây lỗi.',
                'Hãy trải nghiệm dịch vụ miễn phí trước khi đưa ra quyết định mua!'
            ]
        }
        //{
        //    category: 'II. Chế độ bảo hành sản phẩm mới',
        //    type: 'first',
        //    contents: [
        //        {
        //            category:
        //                '2.1. Tư vấn hỗ trợ kiểm tra sản phẩm trước khi mua',
        //            type: 'second',

        //            contents: [
        //                'Kiểm tra màu sắc, cấu hình, và chứng thực máy trước khi mua.',
        //                'Máy chưa active là máy chưa kích hoạt bảo hành theo tình trạng kiểm tra trực tiếp trên trang chủ Apple/ Lenovo'
        //            ]
        //        },
        //        {
        //            category: '2.2. Chính sách bảo hành',
        //            type: 'second',
        //            contents: [
        //                {
        //                    category: '1. Trường hợp lỗi do nhà sản xuất:',
        //                    type: 'third',

        //                    contents: [
        //                        'Được hỗ trợ bảo hành hoặc thay thế linh kiện miễn phí tại Thinkmay.',
        //                        'Hỗ trợ lấy lại ngày bảo hành đúng thực tế.'
        //                    ]
        //                },
        //                {
        //                    category: '2. Trường hợp lỗi do người dùng:',
        //                    type: 'third',

        //                    contents: [
        //                        'Hỗ trợ sửa chữa sau khi thỏa thuận về chi phí.',
        //                        'Hỗ trợ đổi sang các dòng máy khác với trợ giá tùy vào từng sản phẩm.'
        //                    ]
        //                }
        //            ]
        //        },
        //        {
        //            category: ' 2.3. Điều kiện bảo hành sản phẩm',
        //            type: 'second',
        //            contents: [
        //                'Sản phẩm là của Thinkmay.',
        //                'Sản phẩm bị hỏng do lỗi sản xuất.',
        //                'Sản phẩm có tem bảo hành của Thinkmay.',
        //                'Sản phẩm còn nguyên vẹn, chưa sửa chữa bởi nơi khác ngoài Thinkmay.',
        //                'Sản phẩm còn thời hạn bảo hành và có giấy tờ chứng minh nguồn gốc.'
        //            ]
        //        },
        //        {
        //            category: '2.4. Thời gian áp dụng cho bảo hành',
        //            type: 'second',

        //            contents: [
        //                'Thời hạn bảo hành được ghi rõ cho từng sản phẩm.',
        //                'Các sản phẩm có chế độ bảo hành đặc biệt sẽ tuân theo thời hạn ghi trên phiếu bảo hành.'
        //            ]
        //        },
        //        {
        //            category: ' 2.5. Những trường hợp không được bảo hành',
        //            type: 'second',

        //            contents: [
        //                'Máy không đáp ứng đủ các điều kiện bảo hành hoặc thời gian bảo hành.',
        //                'Sản phẩm bị mất tem niêm phong hoặc tem bảo hành bị hỏng.',
        //                'Máy có dấu hiệu tác động bên ngoài gây hư hại.',
        //                'Máy bị nước hoặc chất lỏng xâm nhập.',
        //                'Máy bị ảnh hưởng nhiệt độ cao.'
        //            ]
        //        }
        //    ]
        //},
        //{
        //    category: 'III. Chế độ bảo hành sản phẩm đã qua sử dụng (cũ)',
        //    type: 'first',
        //    contents: [
        //        {
        //            category: '3.1. Trường hợp lỗi do nhà sản xuất',
        //            type: 'second',

        //            contents: [
        //                'Được đổi mới máy hoặc thay thế linh kiện miễn phí trong 7 ngày đầu.',
        //                'Sau 7 ngày, sẽ được sửa chữa miễn phí nếu là lỗi có thể thay thế sửa chữa.'
        //            ]
        //        },
        //        {
        //            category: '3.2. Trường hợp lỗi do người dùng',
        //            type: 'second',

        //            contents: [
        //                'Hỗ trợ sửa chữa sau khi thỏa thuận về chi phí.',
        //                'Hỗ trợ đổi sang các dòng máy khác tùy thuộc vào sản phẩm.'
        //            ]
        //        }
        //    ]
        //},
        //{
        //    category: 'IV. Lưu ý',
        //    type: 'first',
        //    contents: [
        //        'Dữ liệu là tài sản cá nhân, khách hàng vui lòng tự sao lưu trước khi tiến hành bảo hành.',
        //        'Thời gian bảo hành có thể phát sinh thêm mà khó kiểm soát trước, khách hàng cần chuẩn bị trước về thời gian và công việc.',
        //        'Thông tin chi tiết về chính sách và điều kiện có thể thay đổi, khách hàng vui lòng kiểm tra trực tiếp trên trang web hoặc liên hệ hotline của Thinkmay để biết thông tin cập nhật.'
        //    ]
        //}
    ];

    const Content = (props: IContent) => {
        const { category, contents, type } = props;
        return (
            <div className="content">
                <h3
                    className={
                        type == 'second'
                            ? 'secondTitle'
                            : type == 'third'
                              ? 'thirdTitle'
                              : ''
                    }
                >
                    {category}
                </h3>

                <ul
                    className={
                        type == 'third' || type == 'second' ? 'listTypeDot' : ''
                    }
                >
                    {contents.map((ctn, i) => {
                        if (typeof ctn === 'object' && ctn !== null) {
                            return (
                                <Content
                                    key={i}
                                    category={ctn.category}
                                    contents={ctn.contents}
                                    type={ctn?.type}
                                ></Content>
                            );
                        }

                        return (
                            <li key={i}>
                                {type == 'first' ? `${i + 1}.` : ''} {ctn}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    return (
        <>
            <div className="warrantyPolicy ">
                <div className="mainContent grid wide">
                    <div className="title l-8">
                        <h2>Chính sách hoàn lại 80% tiền</h2>
                        <p>
                            Do tính chất đặc thù của dịch vụ CloudPC là có độ
                            trễ về đường truyền và mong muốn mọi người có trải
                            nghiệm tốt nhất khi sử dụng, Thinkmay khuyến khích
                            bạn liên hệ qua Fanpage để được hỗ trợ xử lý hoặc
                            hoàn tiền nếu sau khi sử dụng, bạn cảm thấy không
                            hài lòng vì bất kỳ lý do nào.
                        </p>
                    </div>

                    <div className="wrapperPolicys">
                        {policys.map((plc, index) => (
                            <Content
                                key={index}
                                category={plc.category}
                                contents={plc.contents}
                                type={plc.type}
                            ></Content>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
