

export interface IProduct {
	imgSrc?: string,
	name: string,
	subText: string,
	price: number,
	spec: string[]
}


export const macbook: IProduct[] = [{
	imgSrc: "macbook-air-m1",
	name: 'MacBook Air 2020 13"',
	subText: 'Cao cấp',
	price: 19000000,
	spec: [
		'Chất lượng hoàn thiện tinh tế',
		'Lời lượng pin cao nhất trong các dòng laptop',
		'Lựa chọn cao cấp nhất nếu bạn thích sản phẩm Apple',
		'Apple M1, RAM 8GB, SSD 256GB',
	],
}, {
	name: 'MacBook Air 2018 13" (Second hand)',
	imgSrc: "macbook-air-m1",
	subText: 'Entry-level',
	price: 15000000,
	spec: [
		'Chất lượng hoàn thiện tinh tế',
		'Lời lượng pin trung bình',
		'Lựa chọn entry-level nếu bạn thích sản phẩm Apple',
		'i5, RAM 8GB, SSD 256GB',
	],
}]

export const thinkpad: IProduct[] = [
	{
		imgSrc: "thinkmad-x1-gen10",
		name: 'ThinkPad X1 Carbon Gen 10 (14” Intel)',
		subText: 'Windows 11 Pro',
		price: 16500000,
		spec: [
			'Chất lượng hoàn thiện tinh tế',
			'Lời lượng pin cao nhất trong các dòng laptop',
			'Lựa chọn cao cấp nhất nếu bạn thích sản phẩm Apple',
		],
	},
	{
		imgSrc: "thinkmad-x1-gen10",
		name: 'ThinkPad X1 Carbon Gen 8 (14”)',
		subText: 'Windows 10 Pro',
		price: 13500000,
		spec: [
			'Chất lượng hoàn thiện tinh tế',
			'Lời lượng pin cao nhất trong các dòng laptop',
			'Lựa chọn cao cấp nhất nếu bạn thích sản phẩm Apple',
		],
	}
]

