import Icon from '../icon';
import './header.scss'
import Image from 'next/image'
import Link from 'next/link'
 


function Header() {
	return (
		<div className='header '>
			<div className='grid wide wrapperHeader'>
				<div className='left'>
					<div className='logo'>
						<Link href={"/"} className="wrapperLogo">
							<Icon width={105} height={58} src='logo-black'></Icon>
							<span className=''>Laptop as a Service</span>
						</Link>
					</div>
				</div>

				<ul className='right'>
					<li><Link className='link' href="/services">Dịch vụ</Link></li>
					<li><Link className='link' href="/#">Về Thinkmay</Link></li>
					<li><Link className='link' href="/contact">Liên hệ</Link></li>
					<Link href='https://dev-thinkmay.netlify.app' className='btn btn-link' >CloudPC portal<Icon className={"mb-[1px]"} src='game'/> </Link>
				</ul>
			
		</div>
		</div >);
}

export default Header;