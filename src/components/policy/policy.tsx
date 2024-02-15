import './policy.scss';

export default function Policy() {
    const policys = [
        {
            category: 'I. Phương thức giao hàng',
            contents: [
                'Giao hàng miễn phí: Áp dụng trong phạm vi các quận nội thành Hà Nội',
                'Giao hàng tính phí: Đối với hàng hóa không thuộc trường hợp miễn phí, phí vận chuyển sẽ được tính dựa trên bảng giá của đối tác vận chuyển. Chi phí sẽ được thông báo và xác nhận trước khi gửi hàng.'
            ]
        },
        {
            category: 'II. Thời gian giao hàng',
            contents: [
                'Nội thành Hà Nội: trong vòng 1 ngày làm việc.',
                'Các tỉnh thành khác: Từ 2-7 ngày, tùy thuộc vào khoảng cách vận chuyển. Khách hàng ở trung tâm tỉnh - thành phố sẽ nhận được hàng sớm hơn. Trong một số trường hợp khách quan như thời tiết xấu, giao thông không thuận lợi, Thinkmay sẽ thông báo và mong quý khách thông cảm.'
            ]
        },
        {
            category: 'III. Trách nhiệm và điều kiện vận chuyển',
            contents: [
                'Dịch vụ vận chuyển của Thinkmay hoặc do Thinkmay chỉ định sẽ chịu trách nhiệm với hàng hóa và các rủi ro của hàng hóa như mất mát, hư hại trong suốt quá trình vận chuyển từ kho của chúng tôi đến khách hàng.',
                'Khách hàng có trách nhiệm kiểm tra hàng hóa sau khi nhận hàng. Nếu phát hiện hàng hóa bị sai khác chủng loại, trầy xước, bể vỡ, móp méo (không giống như ảnh chụp chúng tôi đã gửi cho khách hàng), vui lòng liên hệ với Thinkmay theo số hotline.'
            ]
        },
        {
            category: 'IV. Các điều kiện khác',
            contents: [
                'Nếu địa chỉ giao hàng không rõ ràng, nằm trong ngõ ngách, hoặc ở những nơi nguy hiểm, những vùng đồi núi hiểm trở, phương tiện giao thông đi lại khó khăn, Thinkmay có quyền từ chối vận chuyển, giao nhận hàng trực tiếp.',
                'Trong các trường hợp bất khả kháng, do thiên tai, lũ lụt, hỏng hóc cầu phà …, Thinkmay không chịu trách nhiệm bồi thường thiệt hại phát sinh do giao hàng không đúng thời gian hoặc không vận chuyển hàng hóa đến địa điểm như đã thỏa thuận với khách hàng.',
                'Trường hợp Thinkmay đã vận chuyển hàng đến địa điểm giao nhận như thỏa thuận lúc mua hàng, nhưng vì một lý do nào đó khách hàng yêu cầu trả lại hàng thì lúc đó khách hàng phải chịu chi phí vận chuyển theo biểu giá quy định của Thinkmay.',
                'Trong những ngày đặc biệt hoặc các ngày Lễ hội do chính sách giao thông chung bị hạn chế (cấm đường đối với một số phương tiện…) thời gian giao hàng có thể sẽ thay đổi, Thinkmay sẽ gọi điện cho khách hàng để thống nhất thời gian giao nhận.',
                'Trường hợp máy hết thời gian bảo hành hoặc có lỗi do người sử dụng, Thinkmay vẫn hỗ trợ khách hàng tùy từng trường hợp cụ thể.'
            ]
        }
    ];

    const Content = ({
        category,
        contents
    }: {
        category: string;
        contents: string[];
    }) => {
        return (
            <div className="content">
                <h3>{category}</h3>

                <ul>
                    {contents.map((ctn, i) => (
                        <li key={i}>
                            {i + 1}. {ctn}
                        </li>
                    ))}
                    <li></li>
                </ul>
            </div>
        );
    };

    return (
        <>
            <div className="shippingPolicy ">
                <div className="mainContent grid wide">
                    <div className="title l-8">
                        <h2>Chính sách vận chuyển</h2>
                        <p>
                            Thinkmay hỗ trợ vận chuyển sản phẩm đến tất cả các
                            tỉnh thành trên toàn lãnh thổ Việt Nam. Khách hàng
                            nếu có nhu cầu mua hàng, vui lòng lưu ý các điều
                            khoản sau.
                        </p>
                    </div>

                    <div className="wrapperPolicys">
                        {policys.map((plc, index) => (
                            <Content
                                key={index}
                                category={plc.category}
                                contents={plc.contents}
                            ></Content>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
