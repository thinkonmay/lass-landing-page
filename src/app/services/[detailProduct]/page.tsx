"use client"
import Image from 'next/image'

import './detail-product.scss'
import Icon from '../../../components/icon'
import Breadcrumb from '../../../components/breadcrumb/Breadcumb'
import { useState } from 'react'


export default function DetailProduct() {


	return (

		<>
			<Breadcrumb></Breadcrumb>
			<div className='detailProduct'>
				<div className="mainContent grid wide">
					<div className="ctnProduct">
						<div className="left">
							<div>
								<Image width={600} height={600} alt="img" src={"/macbook.png"}></Image>
							</div>

							<div className="slides">
								<div className="slide"></div>
								<div className="slide"></div>
								<div className="slide"></div>
								<div className="slide"></div>
							</div>
						</div>
						<div className="right">
							<h3 className='productName'>MacBook Air 2020 13” (New 98%)</h3>

							<ColorPicker ></ColorPicker>
							<h3 className="price"> 15.000.000 VNĐ</h3>
							<p className='subText'>(Hàng chính hãng, bảo hành 1 năm từ Apple)</p>

							<ul className="bonus">
								<h4>Dịch vụ miễn phí đi kèm:</h4>

								<li>1 năm sử dụng dịch vụ Thinkmay Cloud PC 3.500.000 VNĐ</li>
								<li>1 miếng dán Laptop (Trị giá: 300.000 VNĐ)</li>
								<li>Bảo dưỡng phần cứng</li>
								<li>Cài đặt phần mềm</li>

							</ul>

							<button className="btn-buy">Đặt hàng ngay <Icon src='shopping-cart'></Icon></button>
						</div>
					</div>

					<Spectrums></Spectrums>
				</div>
			</div>
		</>
	)
}

const ColorPicker = () => {


	return (
		<div className="colorPicker">

			<div className='color '>
				<div style={{background: '#7D7E80'}} className='dot'></div>
			</div>
			<div className='color '>
				<div style={{background: '#E3E4E5'}} className='dot'></div>
			</div>
			<div className='color pick'>
				<div style={{background: '#F9D4C2'}} className='dot '></div>
			</div>
		</div>
	)
}
const Spectrums = () => {
	const [open, setOpen] = useState(true)

	const Content = () => {

		return (
			<div className='content'>
				<h5>Hardware:</h5>
				<ul>
					<li>Apple M2 chip with 8-core CPU, 10-core GPU, 16-core Neural Engine</li>
					<li>8GB unified memory</li>
					<li>256GB SSD storage</li>
					<li>15.3-inch Liquid Retina display with True Tone³</li>

				</ul>
			</div>
		)
	}

	return (
		<div className="spectrums">
			<button
				onClick={() => {
					setOpen(old => !old)

				}}
				className='btnSpectrums'>
				Xem Thông số kỹ thuật
				{
					open ? <Icon src='arrow-up' />
						: <Icon src='arrow-down' />
				}
			</button>

			{
				open ? (
					<>
						<Content></Content>
						<Content></Content>
						<Content></Content>
					</>
				) : null

			}


		</div>
	)
}