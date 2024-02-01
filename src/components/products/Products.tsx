import Image from 'next/image';
import Icon from '../icon';
import './products.scss'
import { useState } from 'react';


function Products() {
	return ( 
		<>
			<div className='products'>
				<div className="mainContent grid wide">
					<div className="top">
						<div className="nav">
							<h2>Khám phá các dòng sản phẩm</h2>
							<a className='inline-flex gap-4' href="">Xem tất cả các mẫu <Icon src='arrow-right'></Icon></a>

						</div>
						<div className="switch">
							{/*<ToggleSwitch></ToggleSwitch>*/}
							<button className='btn'>MACBOOK</button>
							<button className='btn'>THINKPAD</button>
						</div>
					</div>


					<div className="wrapperProducts row">
						<Product></Product>
						<Product></Product>
					</div>
				</div>

			</div>
			<Introduce></Introduce>
		
		</>
	 );
}

export default Products;


const Product = () =>{

	return (
		<div className='productCard col l-6'>
			<div><Image src={"/macbook.png"} width={360} height={160} alt='img'></Image></div>

			<h4 className='name'>MacBook Air 2020 13” (New 98%)</h4>
			<p className='subText'>Chip M1</p>

			<h6 className="pricing"> 15.000.000 VNĐ</h6>

			<div className="ctnButtons">
				<button className='btnSeeMore'>Xem thêm</button>
				<a href="">Mua ngay</a>
			</div>
		</div>
	)
}

const ToggleSwitch = () => {
	const [isChecked, setIsChecked] = useState(false);
  
	const handleToggle = () => {
	  setIsChecked(!isChecked);
	};
  
	return (
	  <div className={`toggle-switch ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>
		<div className="slider">test</div>
	  </div>
	);
  };



const Introduce =()=>{


	return(
		<div className="introduce">
			<div className="table grid wide">
				<h2>
					Đa dạng đáp ứng <span>mọi nhu cầu của bạn</span>
				</h2>

				<div className="wrapperTable">
					<div className="rowContent" style={{borderTop: 'unset'}}>
						<div className='columnContent'>Tiêu chí</div>
						<div className='columnContent'>Thinkmay</div>
						<div className='columnContent'>LAPTOP GAMING</div>
						<div className='columnContent'>ULTRABOOK</div>
						<div className='columnContent'>LAPTOP CAO CẤP</div>
					</div>
					<div className="rowContent">
						<div className='columnContent'>Giá cả</div>
						<div className='columnContent'>15 - 20 triệu</div>
						<div className='columnContent'>15 - 20 triệu</div>
						<div className='columnContent'> 15 triệu</div>
						<div className='columnContent'>30 - 40 triệu</div>
					</div>
					<div className="rowContent">
						<div className='columnContent'>Cấu hình và sức mạnh</div>
						<div className='columnContent'>GPU mạnh mẽ</div>
						<div className='columnContent'>Cấu hình vừa đủ </div>
						<div className='columnContent'>Không có GPU rời</div>
						<div className='columnContent'>Hiệu suất mạnh mẽ</div>
					</div>
					<div className="rowContent">
						<div className='columnContent'>Trọng lượng</div>
						<div className='columnContent'>Mỏng nhẹ (1 - 2 kg)</div>
						<div className='columnContent'>Nặng (2.5 - 3.5 kg)</div>
						<div className='columnContent'>Nhẹ (1.1 - 1.7 kg)</div>
						<div className='columnContent'>Vừa (1.5 - 2.2 kg)</div>
					</div><div className="rowContent">
						<div className='columnContent'>Thời lượng Pin</div>
						<div className='columnContent'>{"Cao (> 10h)"}</div>
						<div className='columnContent'>Thấp (2 - 3h)</div>
						<div className='columnContent'>Vừa (4 - 5h)</div>
						<div className='columnContent'>Vừa (4 - 5h)</div>
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
					<h3>Sức mạnh</h3>
					<h3>Độ bền/nhẹ</h3>
					<h3>Giá cả</h3>

				</div>
				<h2>
					Với Thinkmay Laptop as a Service, bạn có tất cả trong một. 
					Giá cả <span className='specialText'>phải chăng</span>, 
					sức mạnh <span className='specialText'>vượt trội</span>, 
					trọng lượng <span className='specialText'>nhẹ</span>, 
					thời lượng pin <span  className='specialText'> dài</span>, 
					màn hình <span className='specialText'> sắc nét</span>, 
					và chất lượng bàn phím <span className='specialText'>cao cấp</span>.
				</h2>
			</div>
		</div>
	)
}