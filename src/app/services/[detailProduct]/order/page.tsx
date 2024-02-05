import Image from 'next/image'

import './order.scss'
import Breadcrumb from '../../../../components/breadcrumb/Breadcumb'
import Icon from '../../../../components/icon'
import { IGuide, guides } from '../../../../components/guide/guide'


interface Option {
	option: string,
	sub?: string,
	status?: 'chose' | 'disable' | 'normal',
	info: {
		main: string,
		sub: string,

		price: string
	}
}
const listOptions: Option[] = [
	{
		option: 'Adobe Toolset for Graphic Design / Video Editor:',
		info: {
			main: '1 Năm bản quyền bộ công cụ Adobe ',
			sub: '(Tài khoản được Thinkmay cung cấp)',
			price: '+ 2.000.000 VNĐ'
		}
	},
	{
		option: 'Onedrive Cloud Storage và Office 365:',
		info: {
			main: '1 năm sử dụng dịch vụ OneDrive và Microsoft Office',
			sub: '(Kích hoạt trên tài khoản Microsoft của người dùng)',
			price: '+ 500.000 VNĐ'
		}
	},
	{
		option: 'Steam Account - Cloud Gaming:',
		info: {
			main: '1 năm Steam bản quyền với tối đa 5 Game theo yêu cầu',
			sub: ' (Sử dụng trên Thinkmay Cloud PC)',
			price: ' + 500.000 VNĐ'
		}
	},
	{
		option: 'Dịch vụ bảo hành',
		sub: ' (khuyến khích với Laptop cũ):',
		info: {
			main: 'Sửa chữa tất cả các lỗi phần cứng trong 1 năm',
			sub: ' (Bao gồm cả lỗi do người dùng gây ra) (Người dùng chịu 25% chi phí sửa chữa)',
			price: ' + 2.000.000 VNĐ'
		}
	}

]

export default function Order() {



	return (

		<>
			<Breadcrumb></Breadcrumb>
			<div className='order grid wide'>
				<div className="mainContent ">
					<div className="left">
						<div className="form ">
							<div className="top">
								<h2 className='title'>Thông tin nhận hàng</h2>
								<p>
									Vui lòng điền thông tin của bạn vào form bên dưới và chúng tôi sẽ liên lạc ngay cho bạn để xác nhận và hướng dẫn thêm về đơn hàng.
								</p>

							</div>

							<form className='wrapperInputs' action="">
								<input type="text" placeholder='Họ và tên *' />
								<input type="text" placeholder='Email*' />
								<input type="text" placeholder='SĐT*' />
								<input type="text" placeholder='Địa chỉ của bạn *' />
								<input type="text" className='bigInput' placeholder='Ghi chú thêm cho chúng tôi (nếu có)' />

							</form>


						</div>

					</div>
					<div className="center">
						<div className="stick"></div>
					</div>
					<div className="right">
						<div className="cart">
							<div className='title'>
								<Icon src='shopping-cart' />
								Giỏ hàng
							</div>

							<div className='info'>


								<div className="spec">
									<div className="img">
										<Image src={"/macbook.png"} width={80} height={80} alt='img' />
									</div>
									<div className='detail'>
										<h5 className="name">MacBook Air 2020 13” (New 98%)</h5>

										<div className='subInfo'>
											<span className='text'>Màu: Đồng</span>
											<div className='ctnStick'><div className="stick"></div></div>
											<span className='text'>Số lượng: 01</span>
										</div>
									</div>
								</div>

								<span className="price">
									15.000.000 VNĐ
								</span>
							</div>

						</div>

						<hr />


						<div className="options">

							<h5 className='title'>
								Lựa chọn thêm các gói dịch vụ riêng lẻ (không bắt buộc)
							</h5>
							<p className='subTitle'>
								Tuỳ chỉnh thoải mái, tạo ra chiếc Laptop dành riêng cho bạn.
							</p>


							<div className="ctnOptions">
								{
									listOptions.map(option => (
										<Option {...option} ></Option>

									))
								}
								<div className='option disable'>

									<h6 className='name'>Tất cả các gói dịch vụ Thinkmay:</h6>

									<div className="content">
										<div className="info">
											Tất cả các gói dịch vụ trong 1 năm

											<span className='subInfo'> (Bao gồm tất cả các dịch vụ đã được liệt kê ở trên)</span>
										</div>

										<div className="price">
											+4.000.000 VNĐ

											{/*Tiết kiệm 1.000.000*/}
										</div>

									</div>
								</div>

							</div>

							<hr className='my-[32px]' />

							<div className="totalPrice">
								<h6 className="text">Tổng thanh toán:</h6>
								<div className='ctnPrice'>
									<h5 className='price'> 19.000.000 VNĐ</h5>
									<p className="subText">*Chưa bao gồm phí vận chuyển</p>
								</div>
							</div>

							<button className="btn-buy">Xác nhận mua hàng <Icon src='shopping-cart'></Icon></button>
						</div>
					</div>



				</div>

			</div>

		</>
	)


}


const Option = (props: Option) => {
	const { info, option, sub, status } = props

	return (

		<div className={status == 'disable' ? 'disable option' : 'option'}>

			<h6 className='name'>{option} <span>{sub}</span></h6>

			<div className={status == 'chose' ? 'chose content ' : 'content '}>
				<div className="info">
					{info.main}

					<span className='subInfo'>{info.sub}</span>
				</div>

				<div className="price"> {info.price}</div>

			</div>
		</div>
	)
}


const Success = () => {


	return (
		<div className='successScreen grid wide'>
			<Breadcrumb></Breadcrumb>

			<div className="mainContent l-9">
				<Icon src='payment-success' width={176} height={176}></Icon>
				<h2>Đặt hàng thành công!</h2>

				<p>Chân thành cảm ơn bạn đã đặt hàng tại Thinkmay.
					Chúng tôi đã nhận được đơn đặt hàng của bạn và sẽ bắt đầu xử lý ngay lập tức (Tối đa 1 ngày làm việc).
					Để đảm bảo quá trình mua sắm của bạn diễn ra thuận lợi,
					chúng tôi sẽ liên lạc hoặc gửi email thông báo cho bạn để xác nhận và thông báo về thay đổi của đơn hàng (nếu có).
				</p>
				<p>Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, vui lòng liên hệ với chúng tôi tại đây.</p>

			</div>
		</div>
	)
}


const GuideModal = () => {

	const Content = (props :IGuide)=>{
		const {category, icon, contents, reverse} = props
		return(
			<div className='guide'>
				<h5 className="title">{category}</h5>
				<ul>
					{
						contents.map((item)=>(
							<li>{item}</li>
						))
					}
				</ul>
			</div>
		)
	}

	return (
		<div className="guideModal">
			<div className='title l-8'>
				<h2>Vận chuyển - Thanh toán</h2>
				<p>
					Cảm ơn bạn đã tin tưởng & lựa chọn sản phẩm - dịch vụ tại Thinkmay.
					Chúng tôi sẽ cố gắng giúp bạn có được những sản phẩm tốt nhất với thời gian nhanh nhất.
				</p>
			</div>

			<div className="ctnGuides">
				{guides.map(guide =>(
					<Content {...guide}></Content>
				))}
			</div>
		</div>

	)

}