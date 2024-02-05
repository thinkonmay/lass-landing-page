"use client"
import Image from 'next/image'

import './services.scss'
import Icon from '../../components/icon'
import Breadcrumb from '../../components/breadcrumb/Breadcumb'
import { Dispatch, SetStateAction, useState } from 'react'
import Link from 'next/link'
import SwitchBtn from '../../components/btn/SwitchBtn'
import * as products from "@/data/products"
import { formatPrice } from '../../utils/formatPrice'


export default function Services() {
	const [productShow, setProductShow] = useState<'macbook' | 'thinkpad'>('macbook')


	return (

		<>
			<Breadcrumb></Breadcrumb>
			<div className='services '>
				<div className="mainContent grid wide">
					<div className='title l-8'>
						<h2>Những lựa chọn Laptop tại <span>Thinkmay</span></h2>
						<p>
							Hãy khám phá và lựa chọn máy tính phù hợp với nhu cầu công việc và giải trí của bạn.
							Nếu bạn còn phân vân thì đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn chọn lựa.
							Liên hệ với Thinkmay tại đây.
						</p>
					</div>
					<SwitchBtn productShow={productShow} setProductShow={setProductShow}></SwitchBtn>
					{productShow == 'macbook' ? <MacbookBanner></MacbookBanner> : <ThinkpadBanner></ThinkpadBanner>}

					<div className="wrapperProducts row">
						{products[productShow].map(p => (
							<Product {...p}></Product>
						))}
					</div>
				</div>
			</div>
		</>
	)


}
const MacbookBanner = () => {

	return (
		<div className="ctnImages">
			<div className='l-5'>
				<Image width={510} height={476} alt='img' className='h-full' src={'/services-macbook-1.png'} />
			</div>
			<div className='l-7'>
				<Image width={746} height={476} alt='img' className='h-full' src={'/services-macbook-2.png'} />

			</div>
		</div>

	)
}

const ThinkpadBanner = () => {

	return (
		<div className="ctnImages">
			<div className='l-6'>
				<Image width={620} height={476} alt='img' className='h-full' src={'/thinkpad-banner-1.png'} />
			</div>
			<div className='l-6'>
				<Image width={620} height={476} alt='img' className='h-full' src={'/thinkpad-banner-2.png'} />

			</div>
		</div>

	)
}
const Product = (props: products.IProduct) => {

	return (
		<div className='productCard col '>
			<div><Image src={"/" + props.imgSrc + ".png"} width={360} height={160} alt='img'></Image></div>

			<h4 className='name'>{props.name}</h4>
			<p className='subText'>{props.subText}</p>

			<h6 className="pricing">{formatPrice(props.price)} VNĐ</h6>

			<div className="ctnButtons">
				<Link href="/services/product" className='btnSeeMore'>Xem thêm</Link>
				<Link className='inline-flex gap-4' href="/services/product/order">Mua ngay <Icon src='arrow-right'></Icon></Link>
			</div>
			<hr />

			<ul className="subInfo">
				{props?.spec?.map(s => (
					<li>{s}</li>

				))}
			</ul>
		</div>
	)
}


