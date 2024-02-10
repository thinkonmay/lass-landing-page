'use client'
import Link from 'next/link'
import './breadcrumb.scss'

import { usePathname, useSearchParams } from 'next/navigation'
import { products } from '../../data/products'
import Icon from '../icon'

const listSlug:slugType = {
	'services': 'Dịch vụ',
	'order': 'Đặt hàng',
	'warranty-policy': 'Chính sách bảo hành',
	'contact': 'Liên hệ',
	'procedure': 'Hướng dẫn mua hàng',
	'shipping-policy': 'Chính sách mua hàng'
}
interface slugType{
	[key: string]:string
}

const renderPathName = (input: keyof slugType) => {
	let pathName = ''

	if (listSlug[input]) {
		pathName = listSlug[input]
	}
	else {
		//get product name by slug.
		const foundProduct = products.find(prd => prd.slug == input)

		pathName = foundProduct?.name ?? 'not found'
	}

	return pathName
}

function Breadcrumb() {

	const pathname = usePathname()
	const pathNameSplit = pathname.split('/')

	const renderLink = () => {

		let prevLink = '/'
		return pathNameSplit.map((pN, index) => {
			if (index == 0) return null
			prevLink += pN + '/'

			if (index + 1 == pathNameSplit.length) {
				return <span className='disableLink'>
					{renderPathName(pN)}
				</span>
			}
			return (
				<>
					<Link className='link' href={prevLink}>
						{renderPathName(pN)}
					</Link>

					<Icon src='arrow-right'></Icon>
				</>

			)
		})

	}

	return (
		<div className='breadcrumb'>
			<div className='mainContent grid wide'>
				<Link className='link' href={'/'}>Trang chủ</Link>
				<Icon src='arrow-right'></Icon>
				{renderLink()}
			</div>
		</div>
	);
}

export default Breadcrumb;