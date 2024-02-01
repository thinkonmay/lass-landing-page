import Image from 'next/image'

import './guide.scss'
import Icon from '../../components/icon'
import Breadcrumb from '../../components/breadcrumb/Breadcumb'


const guides = [
	{
		category: '1. Khám phá sản phẩm trên website',
		icon:'mi-laptop',
		contents: [
			'Khách hàng tham khảo dịch vụ thông qua website  thinkmay.net và để lại thông tin cá nhân.'
		]
	},
	{
		icon:'robot-happy',
		category: '2. Tư vấn sản phẩm trực tuyến ',
		contents: [
			'Nhân viên tư vấn chuyên nghiệp của chúng tôi sẽ liên hệ với bạn để tư vấn trực tuyến.',
			'Hãy chia sẻ nhu cầu và mong muốn của bạn để nhận được sự hỗ trợ tốt nhất.'
		]
	},
	{
		icon:'truck',
		category: '3. Tư vấn tận nơi',
		contents: [
			'Chọn lịch và nhân viên tư vấn sẽ đến tận nơi để bạn trải nghiệm thực tế Laptop Thinkmay.',
			'Khám phá từng đường nét, cảm nhận trọng lượng và trải nghiệm độ bền của sản phẩm.'
		]
	},
	{
		icon:'credit-card',
		category: '4. Hướng dẫn sử dụng và Mua hàng',
		contents: [
			'Nhân viên tư vấn hướng dẫn setup tài khoản và sử dụng dịch vụ Thinkmay.',
			'Khách hàng chốt mẫu Laptop, thanh toán và được kiểm tra Laptop tại chỗ.'
		]
	},
	{
		icon:'hard-drive',
		category: '5. Dịch vụ bảo hành và Gói phần mềm',
		contents: [
			'Kích hoạt tài khoản Thinkmay Cloud Gaming và các ứng dụng bổ sung theo gói dịch vụ của khách hàng.',
			'Đối với bảo hành Laptop, Thinkmay sẽ đến tận nơi để nhận Laptop từ khách hàng, tiến hành sửa chữa và báo giá (Trong trường hợp lỗi nằm ngoài Phạm vi bảo hành).',
			'Trong quá trình sử dụng Laptop và dịch vụ Thinkmay Cloud PC, Thinkmay sẽ liên tục nhận feedback và hỗ trợ người dùng thông qua trực tiếp kênh Customer Support hoặc Cộng đồng người dùng Thinkmay.'
		]
	},
	{
		icon:'card',
		category: '6. Gia hạn dịch vụ',
		contents: [
			'Lựa chọn gia hạn gói dịch vụ Cloud PC sau khi đã hết hạn 1 năm.',
			'Nâng cấp hoặc giữ nguyên gói dịch vụ tùy thuộc vào nhu cầu khách hàng.'
		]
	}
]
export default function Guide() {

	const Content = ({category, contents, icon, reverse}) => {

		return (
			<div className={reverse? 'rowGuide reverse' : 'rowGuide'}>
				<ul className={contents.length > 1 ? 'listTypeDisc': 'deteils'}>
					{
						contents.map(ctn =>(
							<li>{ctn}</li>
						))	
					}

					<div className={reverse? 'decoration reverse' : 'decoration'}></div>
				</ul>
				<div className='icon'>
					<Icon src={icon} width={24} height={24} />
				</div>
				<h3 className=''>{category}</h3>
			</div>
		)
	}

	return (

		<>
			<Breadcrumb></Breadcrumb>
			<div className='guide'>
				<div className="mainContent grid wide">
					<div className='title l-8'>
						<h2>Vận chuyển - Thanh toán</h2>
						<p>
							Cảm ơn bạn đã tin tưởng & lựa chọn sản phẩm - dịch vụ tại Thinkmay.
							Chúng tôi sẽ cố gắng giúp bạn có được những sản phẩm tốt nhất với thời gian nhanh nhất.
						</p>
					</div>

					<div className="wrapperGuides">
						{guides.map((guide, i) =>(
							<>
								<div className="space">
									<div className={"stick" +" " + `stick${i+1}` }></div>

								</div>
								<Content reverse={i % 2 == 0 ?? false} icon={guide.icon} category={guide.category} contents={guide.contents}></Content>
							</>
						))}
						
					</div>
				</div>

			</div>
		</>
	)


}