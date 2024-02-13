import Guide from '../guide/guide';
import './popup.scss';
const GuideModal = () => {
    return (
        <div className="guideModal thinkmayScroll">
            <div className="title">
                <h2>Vận chuyển - Thanh toán</h2>
                <p>
                    Cảm ơn bạn đã tin tưởng & lựa chọn sản phẩm - dịch vụ tại
                    Thinkmay. Chúng tôi sẽ cố gắng giúp bạn có được những sản
                    phẩm tốt nhất với thời gian nhanh nhất.
                </p>
            </div>

            <div className="ctnGuides">
                <Guide></Guide>
            </div>
        </div>
    );
};

export default GuideModal;
