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
        imgSrc: 'macbook-air-m1.png',
        type: Lines.MACBOOK,
        name: 'MacBook Air 2020 13"',
        slug: 'macbook-air-2020-new',
        subText: 'Cao cấp (Mới)',
        price: 19000000,
        spec: [
            'Chất lượng hoàn thiện tinh tế',
            'Lời lượng pin cao nhất trong các dòng laptop',
            'Lựa chọn cao cấp nhất nếu bạn thích sản phẩm Apple',
            'Apple M1, RAM 8GB, SSD 256GB'
        ]
    },
    {
        name: 'MacBook Air 2018 13" ',
        slug: 'macbook-air-2020-old',
        imgSrc: 'macbook-air-m1.png',
        type: Lines.MACBOOK,
        subText: 'Entry-level (Second hand)',
        price: 15000000,
        spec: [
            'Chất lượng hoàn thiện tinh tế',
            'Lời lượng pin trung bình',
            'Lựa chọn entry-level nếu bạn thích sản phẩm Apple',
            'i5, RAM 8GB, SSD 256GB'
        ]
    },
    {
        imgSrc: 'thinkmad-x1-gen10.png',
        type: Lines.THINKPAD,
        slug: 'thinkpad-x1-carbon-gen10',
        name: 'ThinkPad X1 Carbon Gen10',
        subText: 'Cao cấp (Second hand)',
        price: 16500000,
        spec: [
            'Chất lượng hoàn thiện tinh tế',
            'Lời lượng pin cao nhất trong các dòng laptop',
            'Lựa chọn cao cấp nhất nếu bạn thích sản phẩm Apple'
        ]
    },
    {
        imgSrc: 'thinkmad-x1-gen10.png',
        type: Lines.THINKPAD,
        slug: 'thinkpad-x1-carbon-gen-8',
        name: 'ThinkPad X1 Carbon Gen 8',
        subText: 'Entry-level (Second hand)',
        price: 13500000,
        spec: [
            'Chất lượng hoàn thiện tinh tế',
            'Lời lượng pin cao nhất trong các dòng laptop',
            'Lựa chọn cao cấp nhất nếu bạn thích sản phẩm Apple'
        ]
    },
    {
        imgSrc: 'T9-plus.webp',
        type: Lines.MINI_PC,
        slug: 't9-plus',
        name: 'T9 plus',
        subText: 'Base line (New)',
        price: 3000000,
        spec: [
            ''
        ]
    },
    {
        imgSrc: 'adobe_with_txt.avif',
        type: Lines.SOFTWARE,
        slug: 'adobe',
        name: 'Adobe Creative Cloud',
        subText: '1 year subscription',
        price: 2000000,
        spec: [
            ''
        ]
    },
    {
        imgSrc: 'thinkmay-1year.png',
        type: Lines.SOFTWARE,
        slug: 'adobe',
        name: 'Thinkmay cloud PC',
        subText: '1 year subscription',
        price: 4000000,
        spec: [
            ''
        ]
    },
]

products.sort((a,b) => a.price - b.price);