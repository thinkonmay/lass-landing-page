'use client';
import Image from 'next/image';

import './order.scss';
import Breadcrumb from '../../../../components/breadcrumb/Breadcumb';
import Icon from '../../../../components/icon';
import Guide, { IGuide, guides } from '../../../../components/guide/guide';
import { findProduct } from '../../../../utils/findProduct';
import { notFound } from 'next/navigation';
import { formatPrice } from '../../../../utils/formatPrice';
import { useLayoutEffect, useState } from 'react';
import Popup from '../../../../components/popup/popup';

interface Option {
    option: string;
    sub?: string;
    id: number | 'all';
    info: {
        main: string;
        sub: string;

        price: number;
    };
}

type StatusOption = 'chose' | 'disable' | 'normal';
interface IOptionProps extends Option {
    status?: StatusOption;
    handleSelectOption: () => void;
}
const listOptions: Option[] = [
    {
        option: 'Adobe Toolset for Graphic Design / Video Editor:',
        id: 1,
        info: {
            main: '1 Năm bản quyền bộ công cụ Adobe ',
            sub: '(Tài khoản được Thinkmay cung cấp)',
            price: 2000000
        }
    },
    {
        option: 'Onedrive Cloud Storage và Office 365:',
        id: 2,
        info: {
            main: '1 năm sử dụng dịch vụ OneDrive và Microsoft Office',
            sub: '(Kích hoạt trên tài khoản Microsoft của người dùng)',
            price: 500000
        }
    },
    {
        option: 'Steam Account - Cloud Gaming:',
        id: 3,
        info: {
            main: '1 năm Steam bản quyền với tối đa 5 Game theo yêu cầu',
            sub: ' (Sử dụng trên Thinkmay Cloud PC)',
            price: 500000
        }
    },
    {
        option: 'Dịch vụ bảo hành',
        id: 4,
        sub: ' (khuyến khích với Laptop cũ):',
        info: {
            main: 'Sửa chữa tất cả các lỗi phần cứng trong 1 năm',
            sub: ' (Bao gồm cả lỗi do người dùng gây ra) (Người dùng chịu 25% chi phí sửa chữa)',
            price: 2000000
        }
    }
];
const specialOption: Option = {
    option: 'Tất cả các gói dịch vụ Thinkmay:',
    id: 'all',
    info: {
        main: 'Tất cả các gói dịch vụ trong 1 năm',
        sub: '(Bao gồm tất cả các dịch vụ đã được liệt kê ở trên)',
        price: 4000000
    }
};
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

type SelectedOption =
    | {
          [id: number]: number;
      }
    | {
          all: number;
      };
export default function Order(props: IOrder) {
    const {
        params: { detailProduct }
    } = props;
    const [statusOrder, setSatusOrder] = useState<'fail' | 'success'>('fail');
    const foundProduct = getProduct(detailProduct);
    const [totalPrice, setTotalPrice] = useState<number>(foundProduct.price);

    const [selectedOptions, setSelectedOptions] = useState<SelectedOption>({
        0: 0
    });
    const [openGuide, setOpenGuide] = useState(false);

    const handleSelectOption = (option: Option) => {
        // Calculate the new total price
        let newTotalPrice = totalPrice;

        // Remove option if it's already selected
        if (option.id in selectedOptions) {
            //@ts-ignore
            const { [option.id]: removedOptionPrice, ...updatedOptions } =
                selectedOptions;
            setSelectedOptions(updatedOptions);
            newTotalPrice -= removedOptionPrice;
        } else {
            // Add the price of the selected option
            if (option.id === 'all') {
                // For the 'all' option
                setSelectedOptions({ all: 4000000 });
                newTotalPrice = 4000000 + foundProduct.price;
            } else {
                if ('all' in selectedOptions) {
                    setSelectedOptions({ [option.id]: option.info.price });
                    newTotalPrice = option.info.price + foundProduct.price;
                } else {
                    newTotalPrice += option.info.price;
                    setSelectedOptions((prev) => ({
                        ...prev,
                        [option.id]: option.info.price
                    }));
                }
            }
        }

        // Update the total price
        setTotalPrice(newTotalPrice);
    };
    const checkStatusOption = (id: 'all' | number) => {
        let status: StatusOption = 'normal';
        if (id in selectedOptions) {
            status = 'chose';
        }
        if (typeof id == 'number' && 'all' in selectedOptions) {
            status = 'disable';
        } else if (id == 'all' && !('all' in selectedOptions)) {
            status = 'disable';
        }
        return status;
    };
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
                                <div className="cart">
                                    <div className="title">
                                        <Icon src="shopping-cart" />
                                        Giỏ hàng
                                    </div>

                                    <div className="info">
                                        <div className="spec">
                                            <div className="img">
                                                <Image
                                                    src={ '/' + foundProduct.imgSrc }
                                                    width={80}
                                                    height={80}
                                                    alt="img"
                                                />
                                            </div>
                                            <div className="detail">
                                                <h5 className="name">
                                                    {foundProduct.name}
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
                                            {formatPrice(foundProduct.price)}VNĐ
                                        </span>
                                    </div>
                                </div>

                                <hr />

                                <div className="options">
                                    <h5 className="title">
                                        Lựa chọn thêm các gói dịch vụ riêng lẻ
                                        (không bắt buộc)
                                    </h5>
                                    <p className="subTitle">
                                        Tuỳ chỉnh thoải mái, tạo ra chiếc Laptop
                                        dành riêng cho bạn.
                                    </p>

                                    <div className="ctnOptions">
                                        {listOptions.map((option) => (
                                            <Option
                                                handleSelectOption={() =>
                                                    handleSelectOption(option)
                                                }
                                                //handleSelectOption={()=>{}}
                                                status={checkStatusOption(
                                                    option.id
                                                )}
                                                {...option}
                                            ></Option>
                                        ))}
                                        <div
                                            className={
                                                checkStatusOption('all') ==
                                                'disable'
                                                    ? 'option disable'
                                                    : 'option'
                                            }
                                            onClick={() =>
                                                handleSelectOption(
                                                    specialOption
                                                )
                                            }
                                        >
                                            <h6 className="name">
                                                {specialOption.option}
                                            </h6>

                                            <div
                                                className={
                                                    checkStatusOption('all') ==
                                                    'chose'
                                                        ? 'content chose'
                                                        : 'content'
                                                }
                                            >
                                                <div className="info">
                                                    {specialOption.info.main}

                                                    <span className="subInfo">
                                                        {specialOption.info.sub}
                                                    </span>
                                                </div>

                                                <div className="price">
                                                    +
                                                    {formatPrice(
                                                        specialOption.info.price
                                                    )}
                                                    VNĐ
                                                    {/*Tiết kiệm 1.000.000*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-[32px]" />

                                    <div className="totalPrice">
                                        <h6 className="text">
                                            Tổng thanh toán:
                                        </h6>
                                        <div className="ctnPrice">
                                            <h5 className="price">
                                                {formatPrice(totalPrice)} VNĐ
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
            className={status == 'disable' ? 'option disable' : 'option'}
        >
            <h6 className="name">
                {option} <span>{sub}</span>
            </h6>

            <div className={status == 'chose' ? 'chose content ' : 'content '}>
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
