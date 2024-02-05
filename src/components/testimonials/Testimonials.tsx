import Icon from '../icon';
import './testimonials.scss'

const discord = [{

	feedback : [
		'Đầu tiên là giao diện người dùng rất đẹp mắt. Khi lúc mới đầu nhìn vào giao diện của thinkmay thì mình rất có cảm hứng. Kế đến là về độ nhạy và phản hồi, cả 2 đều được tối ưu cực kì tốt, đây là lợi thế của thinkmay hơn so với nhiều đối thủ cloud khác khi mà cốt lõi của dịch vụ được đảm bảo. Chăm sóc khách hàng cũng như là lắng nghe phản hồi từ khách hàng cũng là điểm mạnh khác cần phải nhắc tới. Tuy nhiên thì vẫn hay xuất hiện các lỗi vặt và có một một số tính năng vẫn chưa tối ưu. Mình chấm 4.5/5',

		'Cảm nhận về bên ngoài dịch vụ thì ngược lại, có hơi khó khăn chút. Đầu tiên là về giá cả, giá cloud của thinkmay khá là cao, dù được bù lại là thời gian chơi rất lâu và nhiều tuy nhiên nhiêu đó là chưa đủ để đánh vào người dùng thấp và trung bình, khi mà giá cả ảnh hưởng đến suy nghĩ mua hay không. Thứ hai là truyền thông, mình thấy mảng này không nổi trội lắm. Thứ 3 là cộng đồng, vui vẻ, hòa đồng và đang mở rộng rất tốt, người mới vào cũng dễ dàng hòa nhập được. Mình chấm 3.5/5',
		
		'Đánh giá tổng quan của mình là 8/10. Dự án rất triển vọng và có tiềm năng phát triển cao. Bên cạnh đó là những vấn đề còn tồn đọng cần được khắc phục để tạo tiền đề cho tương lai. Năm mới sắp đến chúc cho thinkmay sang năm mới càng phát triển, để khi nhìn lại năm trước có thể thấy mình đã đi xa tới nhường nào.']
},{
	feedback : [
		'Yay feedback một lần rồi nhưng giờ quay lại =))))) Lần này là rất muốn rcm mọi người nếu được hãy đầu tư gói 359k nhó, nếu ai định gắn bó dài hơi.',
		'Một cái mà người đi từ hồi Thinkmay chưa thay đổi các bộ gói tới giờ thì nói là cái việc luôn CÓ slot máy CHO MÌNH là điều rất đáng ngạc nhiên - từ người trong quá khứ 75% login phải chờ máy, nhiều khi chờ tới 2 hay 3h đồng hồ,',
		'tất nhiên 50% số này là ngta out thì mình vô trễ hơn 2 3s lại hụt máy lại chờ tiếp. Nhưng mà mua gói 359k thì ít có chuyện phải chờ nha, dù login vào chơi giờ cao điểm =))))',
		'Quả thực là mua gói độ ưu tiên cao nó cho mình một cái cảm giác ổn định hơn gói cũ 250k rất nhiều. 160h chơi mà chơi không hết thì chuyển 50% số giờ thừa qua sang tháng nữa khỏi lo lỗ, mà còn rẻ gấp đôi gấp 3 cắm net. Rất rcm ai muốn gắn bó dài hơi thì mua gói này nhén'
	]
},{
	feedback : [
		'Sau 1 tháng thuê lại cảm giác qua nhiều update. Cảm nhận thấy phần ổn định delay tốt hơn, chơi mượt hơn. FPS cũng không limit ở 60 nữa. Nên màn 144hz chơi khá ổn. Về phần tay cầm mình trải nghiệm thì thiếu phần rung. Mình chơi các cloud khác thì khi connect tay cầm thì khi chơi tay cầm có rung. Ổn nhé'
	]
},{
	feedback : [
		'Test thử 1 tuần trên Edge, Cloud chất lượng, độ delay thì hơn hẵng những cloud khác mừng từng xài như Geforce Now, Xbox Cloud. Tùy còn vài lỗi linh tinh nhưng cũng không ảnh hưởng lắm. Mong team sẽ hoàn thiện cloud hơn nữa và được mọi người ủng hộ.'
	]
}]

function Testimonials() {
	return (
		<div className='testimonials'>
			<div className='feedbacks'>
				<div className='ctnFeedbacks'>
					<div className="content">
						<div className='grid wide'>
							<h2>Đánh giá từ khách hàng của <span className="specicalText">Thinkmay</span></h2>
				
						</div>

						<div className="wrapperFeedback grid wide">
							{discord.map(x => 
								<div className='feedback l-6'>
									<p className='text'>
										{x.feedback.map(y => <> 
											- {y} <br/><br/>
										</>)}
									</p>
									<div className='user'>
										<div className="img"></div>
										<div className="info">
											<h6 className="name">Trung Phạm</h6>
											<p className='job'>Nhân viên văn phòng</p>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
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

						<div className="logo">
							<Icon width={105} height={51} src='logo-black'/>
							<span>Laptop as a Service</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;