import Icon from '../icon';
import './herosection.scss'
import Image from 'next/image'


function HeroSection() {
	return (
		<div className='heroSection'>
			<div className="slide1">
				<div className='mainContent grid wide'>
					<div className="left col l-6">
						<span className='brand'>MACBOOK AIR & THINKPAD</span>

						<h1>
							Bạn đang tìm kiếm một chiếc laptop mỏng nhẹ, 
							nhưng vẫn có thể cân được <TextTransform></TextTransform>
						</h1>

						<p className='subText'>
							Với mỗi chiếc Laptop bạn mua từ Thinkmay, 
							chúng tôi sẵn sàng cung cấp 1 năm sử dụng Window CloudPC 
							cùng nhiều phần mềm và game bản quyền khác.
						</p>

						<button style={{paddingLeft: 32, paddingRight: 32}} className=" pl-[32px] pr-[32px] btn">Khám phá ngay <Icon src='shopping-cart'></Icon></button>
					</div>
					<div className="right">
						<Image alt='Hero section image' width={793} height={480} src={'/macbook.png'}/>

						<div className="subBg1"></div>
						<div className="subBg2"></div>
					</div>
				</div>
			</div>
		</div>
	);
}



const TextTransform = () =>{

	return(
		<span className='textTransform'>
			GTA V
		</span>
	)
}
export default HeroSection;