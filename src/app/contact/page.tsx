
import Image from 'next/image'
import './contact.scss'


export default function Contact() {



	return (


		<div className='contact '>
			<header className='ctnHeader '>
				<div className='header contentMaxWidth'>
					<a href='/' className='block'>
						<Image alt='logo' priority={true} width={120} height={120} src={'/logo.png'} />
					</a>


					<ul className="right">
						<li className='item'><a href="/#services">Services</a></li>
						<li className='item'><a href="/#technologies">Technologies</a></li>
						<li className='item'><a href="/#casestudy">Case study</a></li>
						<li className='item'>
							<a
								href='https://app.thinkmay.net/'
								className='btn-gaming'
							>Gaming</a>
						</li>
					</ul>
				</div>
			</header>
			<div className='info'>

				<div className=' contentMaxWidth pb-[40px]  w-full h-full flex flex-col items-center'>
					<div className='overflow-hidden flex gap-[32px] p-[32px] flex-1 max-w-[900px]  max-h-[540px] w-full rounded-xl bg-[#efe3d2]'>
						<div className='left'>
							<h3 className="title">Let’s talk</h3>
							<p className='text-[#232323] text-[1.6rem]'>Tell us your problem:</p>
							<div className=''>
								<textarea name="" id="" ></textarea>
								<input className='mt-[8px]' type="text" placeholder='Your email' />
							</div>
							<button className='btn-send mt-[40px]'>Send</button>
						</div>

						<div className='right'>
							<h3 className='title'>Let’s connect and answer your questions about Thinkmay</h3>

							<ul className='flex flex-col list-disc gap-[4px] pl-5'>
								<li className='text'>Chat through Thinkmay products and solutions that address your needs</li>
								<li className='text'>Receive an end to end product walkthrough</li>
								<li className='text'>Learn how our pricing plans and/or trial work in detail</li>
							</ul>
						</div>
					</div>

				</div>

			</div>
			<div className='  ctnBottom'>
				<div className='bottom contentMaxWidth h-full'>
					<div>
						<div>
							<Image priority={true} width={150} height={100} src={'/logo.png'} alt='' />
						</div>
						<span>© 2021-2023 thinkmay - All rights reserved.</span>
					</div>

					<div>
						<h3 className='text-[1.8rem]'>Contact Info</h3>
						<ul>
							<li className='text-[1.6rem]'>+84 347961231</li>
							<li className='text-[1.6rem]'>huyhoangdo@contact.thinkmay.net</li>
							<li className='text-[1.6rem]'>Hoa Lac, Hanoi, Vietnam</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)


}