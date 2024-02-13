'use client';
import Image from 'next/image';

import { Lines } from '@/data/lines';
import { IOption, OptionID, listOptions } from '@/data/options';
import { notFound } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import Breadcrumb from '../../../../components/breadcrumb/Breadcumb';
import { IGuide, guides } from '../../../../components/guide/guide';
import Icon from '../../../../components/icon';
import Popup from '../../../../components/popup/popup';
import { findProduct } from '../../../../utils/findProduct';
import { formatPrice } from '../../../../utils/formatPrice';
import './order.scss';

type IOptionProps = IOption & {
    status: boolean;
    handleSelectOption: () => void;
}

interface IOrder {
    params: {
        detailProduct: string;
    };
}
const getProduct = (slug: string) => {
    const res = findProduct(slug);
    if (!res) notFound();
    return res;
};

export default function Order(props: IOrder) {
    const { params: { detailProduct } } = props;
    const { type, slug, price, name, imgSrc } = getProduct(detailProduct);

    const [statusOrder, setSatusOrder] = useState<'fail' | 'success'>('fail');

    const def = listOptions.find(x => x.id == OptionID.THINKMAY)
    if (def == undefined)
        throw ''

    const [selectedOptions, setSelectedOptions] = useState<OptionID[]>(
        slug == 'adobe'
            ? [OptionID.ADOBE, OptionID.THINKMAY]
            : [OptionID.THINKMAY]);
    const [openGuide, setOpenGuide] = useState(false);

    const totalPrice = () => {
        let total = 0
        listOptions
            .filter(x => selectedOptions.includes(x.id))
            .forEach(x => total += x.info.price)
        return total + (type == Lines.SOFTWARE ? 0 : price)
    }


    const handleSelectOption = (option: IOption) => {
        const selection = listOptions.find(x => x.id == option.id)
        if (selection == undefined || option.id == OptionID.THINKMAY)
            return

        const selected = selectedOptions.includes(option.id)

        if (option.id == OptionID.ALL) {
            if (selected)
                setSelectedOptions([OptionID.THINKMAY]);
            else
                setSelectedOptions([OptionID.ALL]);
        } else if (selectedOptions.includes(OptionID.ALL)) {
            setSelectedOptions([OptionID.THINKMAY, option.id]);
        } else {
            let temp = [...selectedOptions]
            if (selected)
                temp = temp.filter(x => x != option.id)
            else
                temp.push(option.id)

            setSelectedOptions(temp);
        }
    };

    const checkStatusOption = (id: OptionID) =>
        selectedOptions.includes(id)
    return (
        <>
            {statusOrder == 'success' ? (
                <Success></Success>
            ) : (
                <>
                    <Breadcrumb></Breadcrumb>
                    <div className="order grid wide">
                        <div className="mainContent ">
                            <div className="left">
                                <div className="form ">
                                    <div className="top">
                                        <h2 className="title">
                                            Thông tin nhận hàng
                                        </h2>
                                        <p>
                                            Vui lòng điền thông tin của bạn vào
                                            form bên dưới và chúng tôi sẽ liên
                                            lạc ngay cho bạn để xác nhận và
                                            hướng dẫn thêm về đơn hàng.
                                        </p>
                                    </div>

                                    <form className="wrapperInputs" action="">
                                        <input
                                            type="text"
                                            placeholder="Họ và tên *"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Email*"
                                        />
                                        <input type="text" placeholder="SĐT*" />
                                        <input
                                            type="text"
                                            placeholder="Địa chỉ của bạn *"
                                        />
                                        <input
                                            type="text"
                                            className="bigInput"
                                            placeholder="Ghi chú thêm cho chúng tôi (nếu có)"
                                        />
                                    </form>
                                </div>

                                <p
                                    className="btnOpenGuide"
                                    onClick={() => setOpenGuide(true)}
                                >
                                    Xem Hướng dẫn Vận chuyển - Thanh toán
                                </p>
                            </div>
                            <div className="center">
                                <div className="stick"></div>
                            </div>
                            <div className="right">
                                {
                                    type != Lines.SOFTWARE
                                        ? <div className="cart">
                                            <div className="title">
                                                <Icon src="shopping-cart" />
                                                Giỏ hàng
                                            </div>

                                            <div className="info">
                                                <div className="spec">
                                                    <div className="img">
                                                        <Image
                                                            src={'/' + imgSrc}
                                                            width={80}
                                                            height={80}
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="detail">
                                                        <h5 className="name">
                                                            {name}
                                                        </h5>

                                                        <div className="subInfo">
                                                            <span className="text">
                                                                Màu: Đồng
                                                            </span>
                                                            <div className="ctnStick">
                                                                <div className="stick"></div>
                                                            </div>
                                                            <span className="text">
                                                                Số lượng: 01
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <span className="price">
                                                    {formatPrice(price)}VNĐ
                                                </span>
                                            </div>
                                        </div>
                                        : null
                                }


                                <hr />
                                <div className="options">
                                    <h5 className="title">
                                        Lựa chọn thêm các gói dịch vụ riêng lẻ
                                    </h5>
                                    <p className="subTitle">
                                        Tuỳ chỉnh thoải mái, tạo ra chiếc Laptop
                                        dành riêng cho bạn.
                                    </p>

                                    <div className="ctnOptions">
                                        {listOptions.map((option) => (
                                            <Option
                                                handleSelectOption={() => handleSelectOption(option)}
                                                status={checkStatusOption(option.id)}
                                                {...option}
                                            ></Option>
                                        ))}
                                    </div>

                                    <hr className="my-[32px]" />

                                    <div className="totalPrice">
                                        <h6 className="text">
                                            Tổng thanh toán:
                                        </h6>
                                        <div className="ctnPrice">
                                            <h5 className="price">
                                                {formatPrice(totalPrice())} VNĐ
                                            </h5>
                                            <p className="subText">
                                                *Chưa bao gồm phí vận chuyển
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setSatusOrder('success')}
                                        className="btn-buy"
                                    >
                                        Xác nhận mua hàng{' '}
                                        <Icon src="shopping-cart"></Icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Popup open={openGuide} setOpen={setOpenGuide}>
                        <GuideModal></GuideModal>
                    </Popup>
                </>
            )}
        </>
    );
}

const Option = (props: IOptionProps) => {
    const { info, option, sub, status, handleSelectOption } = props;

    return (
        <div
            onClick={handleSelectOption}
            // className={status == 'disable' ? 'option disable' : 'option'}
            className="option"
        >
            <h6 className="name">
                {option} <span>{sub}</span>
            </h6>

            <div className={status ? 'chose content ' : 'content '}>
                <div className="info">
                    {info.main}

                    <span className="subInfo">{info.sub}</span>
                </div>

                <div className="price"> +{formatPrice(info.price)} VNĐ</div>
            </div>
        </div>
    );
};

const Success = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="successScreen grid wide">
            <Breadcrumb isTurnBackHomePage={true}></Breadcrumb>

            <div className="mainContent l-9">
                <Icon src="payment-success" width={176} height={176}></Icon>
                <h2>Đặt hàng thành công!</h2>

                <p>
                    Chân thành cảm ơn bạn đã đặt hàng tại Thinkmay. Chúng tôi đã
                    nhận được đơn đặt hàng của bạn và sẽ bắt đầu xử lý ngay lập
                    tức (Tối đa 1 ngày làm việc). Để đảm bảo quá trình mua sắm
                    của bạn diễn ra thuận lợi, chúng tôi sẽ liên lạc hoặc gửi
                    email thông báo cho bạn để xác nhận và thông báo về thay đổi
                    của đơn hàng (nếu có).
                </p>
                <p>
                    Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, vui lòng liên hệ
                    với chúng tôi tại đây.
                </p>
            </div>
        </div>
    );
};

const GuideModal = () => {
    const Content = (props: IGuide) => {
        const { category, icon, contents, reverse } = props;
        return (
            <div className="guideModalContent">
                <h5 className="titleGuide">{category}</h5>
                <ul>
                    {contents.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="guideModal thinkmayScroll">
            <div className="title l-8">
                <h2>Vận chuyển - Thanh toán</h2>
                <p>
                    Cảm ơn bạn đã tin tưởng & lựa chọn sản phẩm - dịch vụ tại
                    Thinkmay. Chúng tôi sẽ cố gắng giúp bạn có được những sản
                    phẩm tốt nhất với thời gian nhanh nhất.
                </p>
            </div>

            <div className="ctnGuides ">
                {guides.map((guide) => (
                    <Content {...guide}></Content>
                ))}
            </div>
        </div>
    );
};
