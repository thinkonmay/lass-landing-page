import Icon from '../icon';
import './footer.scss'


function Footer() {
	return ( 
		<>
		<div className="footer ">
			<div className="mainContent grid wide">
				<div className="left">
					<div className='logo'>
						<Icon width={138} height={68} src='logo-black'></Icon>
						<span>Laptop as a Service</span>
					</div>

					<div className="email">
						<span className="text">Đăng ký Email để nhận các thông tin mới nhất về dịch vụ của Thinkmay</span>

						<div className="ctnBtn">
							<input className="input" placeholder='Email của bạn'></input>
							<button className="btn register">
								Đăng ký
							</button>
						</div>
					</div>
				</div>	

				<div className="right">	
					<div className="thinkmay">
						<h6>Thinkmay</h6>
						<ul>
							<li>+960 798 5454</li>
							<li>huyhoangdo@contact.thinkmay.net</li>
							<li>Hoa Lac, Ha Noi, Viet Nam</li>
						</ul>
					</div>
					<div className="services">
						<h6>Dịch vụ</h6>

						<ul>
							<li>Về chúng tôi</li>
							<li>Hướng dẫn mua hàng</li>
							<li>Chính sách bảo hành</li>
							<li>Chính sách vận chuyển</li>
							<li>Liên hệ</li>
						</ul>
					</div>
				</div>
			</div>

			

		</div>
		<div className="copyRight">
			© Copyright 2024 Thinkmay. All Rights Reserved.
		</div>
		</>
	 );
}

export default Footer;