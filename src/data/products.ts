

interface IProduct {
	imgSrc?: string,
	name: string,
	subText: string,
	price: number,
	spec: string[]
}


const products : IProduct[] = [{
	name: 'MacBook Air 2020 13"',
	subText: 'Cao cấp',
	price: 18000000,
	spec: [
		'Chất lượng hoàn thiện tinh tế',
		'Lời lượng pin cao nhất trong các dòng laptop',
		'Lựa chọn cao cấp nhất nếu bạn thích sản phẩm Apple',
		'Apple M1, RAM 8GB, SSD 256GB',
	],
},{
	name: 'MacBook Air 2018 13" (Second hand)',
	subText: 'Entry-level',
	price: 13500000,
	spec: [
		'Chất lượng hoàn thiện tinh tế',
		'Lời lượng pin trung bình',
		'Lựa chọn entry-level nếu bạn thích sản phẩm Apple',
		'i5, RAM 8GB, SSD 256GB',
	],
}]