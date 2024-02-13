import { Lines } from "./lines";

export interface IProduct {
    imgSrc?: string;
    name: string;
    subText: string;
    price: number;
    spec: string[];
    slug: string;
    type: Lines;
}

export const products: IProduct[] = [
    {
        imgSrc: 'macbook-air-m1',
        type: Lines.MACBOOK,
        name: 'MacBook Air 2020 13',
        slug: 'macbook-air-2020-new',
        subText: 'Cao cấp',
        price: 19000000,
        spec: [
            'Chất lượng hoàn thiện tinh tế',
            'Lời lượng pin cao nhất trong các dòng laptop',
            'Lựa chọn cao cấp nhất nếu bạn thích sản phẩm Apple',
            'Apple M1, RAM 8GB, SSD 256GB'
        ]
    },
    {
        name: 'MacBook Air 2018 13" (Second hand)',
        slug: 'macbook-air-2020-old',
        imgSrc: 'macbook-air-m1',
        type: Lines.MACBOOK,
        subText: 'Entry-level',
        price: 15000000,
        spec: [
            'Chất lượng hoàn thiện tinh tế',
            'Lời lượng pin trung bình',
            'Lựa chọn entry-level nếu bạn thích sản phẩm Apple',
            'i5, RAM 8GB, SSD 256GB'
        ]
    },
    {
        imgSrc: 'thinkmad-x1-gen10',
        type: Lines.THINKPAD,
        slug: 'thinkpad-x1-carbon-gen10',
        name: 'ThinkPad X1 Carbon Gen 10 (14” Intel)',
        subText: 'Windows 11 Pro',
        price: 16500000,
        spec: [
            'Chất lượng hoàn thiện tinh tế',
            'Lời lượng pin cao nhất trong các dòng laptop',
            'Lựa chọn cao cấp nhất nếu bạn thích sản phẩm Apple'
        ]
    },
    {
        imgSrc: 'thinkmad-x1-gen10',
        type: Lines.THINKPAD,
        slug: 'thinkpad-x1-carbon-gen-8',
        name: 'ThinkPad X1 Carbon Gen 8 (14”)',
        subText: 'Windows 10 Pro',
        price: 13500000,
        spec: [
            'Chất lượng hoàn thiện tinh tế',
            'Lời lượng pin cao nhất trong các dòng laptop',
            'Lựa chọn cao cấp nhất nếu bạn thích sản phẩm Apple'
        ]
    }
];
