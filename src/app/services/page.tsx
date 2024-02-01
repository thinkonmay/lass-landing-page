"use client"
import Image from 'next/image'

import './services.scss'
import Icon from '../../components/icon'
import Breadcrumb from '../../components/breadcrumb/Breadcumb'
import { useState } from 'react'


export default function Services() {


	return (

		<>
			<Breadcrumb></Breadcrumb>
			<div className='services '>
				<div className="mainContent grid wide">
					<div className='title l-8'>
						<h2>Khám phá bộ sưu tập Laptop tại <span>Thinkmay</span></h2>
						<p>
							Hãy khám phá và lựa chọn máy tính phù hợp với nhu cầu công việc và giải trí của bạn.
							Nếu bạn còn phân vân thì đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn chọn lựa.
							Liên hệ với Thinkmay tại đây.
						</p>
					</div>
					<SwitchBtn></SwitchBtn>
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
				<button className='btnSeeMore'>Xem thêm</button>
				<a href="">Mua ngay</a>
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

const SwitchBtn = () => {
	const [checked, setChecked] = useState<'macbook'|'thinkpad'>('macbook')


	console.log(checked);
	return(
		<div className="switchBtn l-6">
			<button onClick={()=>{console.log('object');setChecked('macbook')}}  className={checked =='macbook' ?'btnChecked' :''}>Macbook</button>
			<button onClick={()=>{setChecked('thinkpad')}} className={checked =='thinkpad' ?'btnChecked' :''}>Thinkpad</button>

			<div className="checked checkedRight"></div>
		</div>

	)
}