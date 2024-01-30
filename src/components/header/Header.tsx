import './header.scss'
import Image from 'next/image'


function Header() {
	return (
		<div className='header '>
			<div className='grid wide wrapperHeader'>
				<div className='left'>
					<Image src={'/logo.png'} alt='logo' width={77} height={38}></Image>
				</div>

				<ul className='right'>
					<li><a className='link' href="">Dịch vụ</a></li>
					<li><a className='link' href="">Dịch vụ</a></li>
					<li><a className='link' href="">Dịch vụ</a></li>
					<button className='btn'>Cloud gaming services</button>
				</ul>
			
		</div>
		</div >);
}

export default Header;