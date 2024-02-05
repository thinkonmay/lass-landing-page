"use client"
import Image from 'next/image'

import './services.scss'
import Icon from '../../components/icon'
import Breadcrumb from '../../components/breadcrumb/Breadcumb'
import { Dispatch, SetStateAction, useState } from 'react'
import Link from 'next/link'


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
					<div className="ctnImages">
						<div className='l-5'>
							<Image width={510} height={476} alt='img' className='h-full' src={'/services-macbook-1.png'} />
						</div>
						<div className='l-7'>
							<Image width={746} height={476} alt='img' className='h-full' src={'/services-macbook-2.png'} />

						</div>
					</div>

					<div className="wrapperProducts row">
						<Product></Product>
						<Product></Product>
					</div>
				</div>
			</div>
		</>
	)


}

const Product = () => {

	return (
		<div className='productCard col '>
			<div><Image src={"/macbook.png"} width={360} height={160} alt='img'></Image></div>

			<h4 className='name'>MacBook Air 2020 13” (New 98%)</h4>
			<p className='subText'>Chip M1</p>

			<h6 className="pricing"> 15.000.000 VNĐ</h6>

			<div className="ctnButtons">
				<Link href="/services/product" className='btnSeeMore'>Xem thêm</Link>
				<Link className='inline-flex gap-4' href="/services/product/order">Mua ngay <Icon src='arrow-right'></Icon></Link>
			</div>
			<hr />

			<ul className="subInfo">
				<li>Touch ID</li>
				<li>Màn hình Retina 13,3 inch có đèn nền LED</li>
				<li>Chip Apple M1</li>
				<li>Ổ lưu trữ lên đến 2TB</li>
				<li>1,29 kg</li>
			</ul>
		</div>
	)
}


interface ISwitchBtn {
	productShow: 'macbook' | 'thinkpad',
	setProductShow: Dispatch<SetStateAction<"macbook" | "thinkpad">>
}
export const SwitchBtn = (props: ISwitchBtn) => {
	const { productShow, setProductShow } = props


	console.log(productShow);
	return (
		<div className="switchBtn l-6">
			<button onClick={() => { setProductShow('macbook') }} className={productShow == 'macbook' ? 'btnChecked' : ''}>Macbook</button>
			<button onClick={() => { setProductShow('thinkpad') }} className={productShow == 'thinkpad' ? 'btnChecked' : ''}>Thinkpad</button>

			<div className={productShow == 'thinkpad' ? "checked checkedRight" : "checked"}></div>
		</div>

	)
}