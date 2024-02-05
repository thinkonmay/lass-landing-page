"use client"
import Image from 'next/image';
import Icon from '../icon';
import './products.scss'
import { useState } from 'react';
import Link from 'next/link';
import {IProduct, products} from "@/data/products"
import { formatPrice } from '../../utils/formatPrice';
import SwitchBtn from '../btn/SwitchBtn';

function Products() {
	const [productShow, setProductShow] = useState<'macbook'|'thinkpad'>('macbook')


	return ( 
		<>
			<div className='products'>
				<div className="mainContent grid wide">
					<div className="top">
						<div className="nav">
							<h2>Khám phá các dòng sản phẩm</h2>
							<Link className='inline-flex gap-4' href="/services">Xem tất cả các mẫu <Icon src='arrow-right'></Icon></Link>

						</div>
						<SwitchBtn	productShow={productShow} setProductShow={setProductShow}></SwitchBtn>
					</div>


					<div className="wrapperProducts row">
						{products.filter(x=> x.type== productShow).map(p =>(
							<Product {...p}></Product>
						))}
					</div>
				</div>

			</div>
		</>
	 );
}

export default Products;


const Product = (props:IProduct) =>{

	return (
		<div className='productCard col l-6'>
			<div><Image src={'/'+props.imgSrc +'.png'} width={360} height={160} alt='img'></Image></div>

			<h4 className='name'>{props.name}</h4>
			<p className='subText'>{props.subText}</p>

			<h6 className="pricing">{formatPrice(props.price)} VNĐ</h6>

			<div className="ctnButtons">
				<Link  href="/services/product" className='btnSeeMore'>Xem thêm</Link>
				<Link className='inline-flex gap-4' href={`/services/${props.slug}/order`}>Mua ngay <Icon src='arrow-right'></Icon></Link>
			</div>
		</div>
	)
}

const ToggleSwitch = () => {
	const [checked, setChecked] = useState<'macbook'|'thinkpad'>('macbook')


	console.log(checked);
	return(
		<div className="switchBtn l-6">
			<button onClick={()=>{setChecked('macbook')}}  className={checked =='macbook' ?'btnChecked' :''}>Macbook</button>
			<button onClick={()=>{setChecked('thinkpad')}} className={checked =='thinkpad' ?'btnChecked' :''}>Thinkpad</button>

			<div className="checked checkedRight"></div>
		</div>

	)
  };



export const Introduce =()=>{


	return(
		<div className="introduce">
			<div className="table grid wide">
				<h2>
					Lựa chọn laptop <span>hoàn hảo nhất</span> <br/> trong tầm giá 10 đến 25 triệu
				</h2>

				<div className="wrapperTable">
					<div className="rowContent" style={{borderTop: 'unset'}}>
						<div className='columnContent'>Tiêu chí</div>
						<div className='columnContent'>ULTRABOOK</div>
						<div className='columnContent'>LAPTOP GAMING</div>
						<div className='columnContent'>THINKMAY</div>
					</div>
					<div className="rowContent">
						<div className='columnContent'>Hiệu năng đồ họa</div>
						<div className='columnContent'>Không có GPU</div>
						<div className='columnContent'>GPU di động</div>
						<div className='columnContent'>GPU mạnh mẽ</div>
					</div>
					<div className="rowContent">
						<div className='columnContent'>Trọng lượng</div>
						<div className='columnContent'>Mỏng nhẹ </div>
						<div className='columnContent'>Dày và Nặng </div>
						<div className='columnContent'>Mỏng Nhẹ</div>
					</div><div className="rowContent">
						<div className='columnContent'>Thời lượng Pin</div>
						<div className='columnContent'>Cao (10h)</div>
						<div className='columnContent'>Thấp (2 - 3h)</div>
						<div className='columnContent'>Cao (10h)</div>
					</div><div className="rowContent">
						<div className='columnContent'>Chất lượng hoàn thiện</div>
						<div className='columnContent'>Tuyệt vời</div>
						<div className='columnContent'>Trung bình - thấp</div>
						<div className='columnContent'>Tuyệt vời</div>
					</div>
				</div>
			</div>


			<div className='imgBg'>
				<div className='logo'>
					<div className="wrapperLogo">
						<Icon width={105} height={58} src='logo-white'></Icon>
						<span className=''>Laptop as a Service</span>
					</div>
				</div>
				<Image width={1440} className='w-[100vw]' height={1080} alt='img-mockup' src={"/macbook-mockup.png"}></Image>
			</div>

			<div className='titleContent'>
				<div className='ctnText'>
					
					<div className="text"><Icon src='check' width={36} height={36}/> <h3>Sức mạnh</h3></div>
					<div className="text"><Icon src='check' width={36} height={36}/> <h3>Hoàn thiện</h3></div>
					<div className="text"><Icon src='check' width={36} height={36}/> <h3>Mức giá</h3></div>

				</div>
				<h2>
					Với Thinkmay Laptop as a Service, bạn có tất cả trong một. <br/>
					Giá cả <span className='specialText'>phù hợp</span>, <br/>
					sức mạnh <span className='specialText'>vượt trội</span>, <br/>
					hoàn thiện <span className='specialText'>cao cấp</span>, <br/>
					trọng lượng <span className='specialText'>siêu nhẹ</span>, <br/>
					thời lượng pin <span  className='specialText'>lâu dài</span>, <br/>
					màn hình <span className='specialText'> sắc nét</span>, <br/>
				</h2>
			</div>
		</div>
	)
}