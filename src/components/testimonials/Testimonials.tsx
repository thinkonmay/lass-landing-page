import './testimonials.scss'


function Testimonials() {

	const Feedback = () => {

		return <div className='feedback'>
			<p className='text'>“Bán hàng uy tín, tư vấn kỹ, nhiệt tình.
				Mua ở đây giá tốt hơn những chỗ khác mà chất lượng rất tốt. Cần hỗ trợ gì là đều giải quyết nhanh gọn.
				Sẽ giới thiệu cho bạn bè”</p>

			<div className='user'>
				<div className="img"></div>

				<div className="info">
					<h6 className="name">Trung Phạm</h6>
					<p className='job'>Nhân viên văn phòng</p>
				</div>
			</div>

		</div>
	}

	return (
		<div className='testimonials'>
			<div className='feedbacks'>
				<div className='grid wide'>
					<h2>Đánh giá từ khách hàng của <span className="specicalText">Thinkmay</span></h2>

				</div>
				<div className="wrapperFeedback">
					<Feedback></Feedback>
					<Feedback></Feedback>
					<Feedback></Feedback>
					<Feedback></Feedback>
				</div>

				<div className="feedbackForm grid wide">
					<div className="img"></div>

					<div className="form">
						<div className="top">
							<h2 className='title'><span>Thinkmay</span> luôn ở đây để hỗ trợ bạn 24/7.</h2>
							<p>
								Sự hài lòng của bạn là ưu tiên hàng đầu của chúng tôi,
								và chúng tôi luôn sẵn sàng hỗ trợ bạn!
							</p>

						</div>

						<form className='wrapperInputs  l-6' action="">
							<input type="text" placeholder='Tên của bạn *' />
							<input type="text" placeholder='Email của bạn *' />
							<input type="text" placeholder='SĐT của bạn *' />
							<input type="text" className='bigInput' placeholder='Ghi chú thêm cho chúng tôi (nếu có)' />

							<button className="btn btn-send">Gửi</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;