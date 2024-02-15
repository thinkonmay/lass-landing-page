export enum OptionID {
    ALL,
    THINKMAY,
    ADOBE,
    STEAM,
    LAPTOP_WARRANTY,
}

export interface IOption {
    option: string;
    sub?: string;
    id: OptionID;
    info: {
        main: string;
        sub: string;
        price: number;
    };
}

export const listOptions: IOption[] = [
    {
        option: 'Thinkmay Cloud PC Service',
        id: OptionID.THINKMAY,
        info: {
            main: '1 Năm sử dụng dịch vụ Thinkmay Cloud PC',
            sub: '(Dịch vụ bắt buộc với các dòng sản phẩm)',
            price: 4000000
        }
    },
    {
        option: 'Adobe Toolset for Graphic Design / Video Editor:',
        id: OptionID.ADOBE,
        info: {
            main: '1 Năm bản quyền bộ công cụ Adobe ',
            sub: '(Tài khoản được Thinkmay cung cấp)',
            price: 2000000
        }
    },
    {
        option: 'Steam Account - Cloud Gaming:',
        id: OptionID.STEAM,
        info: {
            main: '1 năm Steam bản quyền với tối đa 5 Game theo yêu cầu',
            sub: ' (Sử dụng trên Thinkmay Cloud PC)',
            price: 500000
        }
    },
    {
        option: 'Dịch vụ bảo hành',
        id: OptionID.LAPTOP_WARRANTY,
        sub: ' (khuyến khích với Laptop cũ):',
        info: {
            main: 'Sửa chữa tất cả các lỗi phần cứng trong 1 năm',
            sub: ' (Bao gồm cả lỗi do người dùng gây ra) (Người dùng chịu 25% chi phí sửa chữa)',
            price: 2000000
        }
    },
    {

        option: 'Tất cả các gói dịch vụ Thinkmay:',
        id: OptionID.ALL,
        info: {
            main: 'Tất cả các gói dịch vụ trong 1 năm',
            sub: '(Bao gồm tất cả các dịch vụ đã được liệt kê ở trên)',
            price: 6000000
        }
    }
];