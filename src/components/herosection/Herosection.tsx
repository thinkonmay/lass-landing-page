import Icon from '../icon';
import './herosection.scss'
import Image from 'next/image'


function HeroSection() {
	return (
		<div className='heroSection'>
			<div className="slide1">
				<div className='mainContent grid wide'>
					<div className="left col l-6">
						<span className='brand'>Laptop as a Service</span>

						<h1>
							Bạn đang tìm kiếm một chiếc laptop mỏng nhẹ, 
							nhưng vẫn có thể <TextTransform></TextTransform>
						</h1>

						<p className='subText'>
							Laptop, Cloud PC và phần mềm bản quyền, tất cả được đóng bên trong một gói dịch vụ Laptop as a Service. <br/>
							Để khi bạn cầm trong tay chiếc laptop, bạn không cần phải nghĩ nhiều về cấu hình phần cứng. <br/>
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
			làm đồ họa, dựng phim, thiết kế kiến trúc và chơi game	
		</span>
	)
}
export default HeroSection;