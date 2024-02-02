import Image from 'next/image'

import './order.scss'
import Breadcrumb from '../../../../components/breadcrumb/Breadcumb'
import Icon from '../../../../components/icon'


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
								<Option></Option>
							</div>
						</div>
					</div>



				</div>

			</div>

			<Success></Success>
		</>
	)


}


const Option = () => {

	return (

		<div className='option'>

			<h6 className='name'>Adobe Toolset for Graphic Design / Video Editor:</h6>

			<div className="content">
				<div className="info">
					1 Năm bản quyền bộ công cụ Adobe

					<span className='subInfo'> (Tài khoản được Thinkmay cung cấp)</span>
				</div>

				<div className="price"> + 2.000.000 VNĐ</div>

			</div>
		</div>
	)
}


const Success = () =>{


	return(
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