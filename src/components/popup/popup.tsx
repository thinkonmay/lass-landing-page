
"use client"
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { IGuide, guides } from '../../app/guide/page';
import './popup.scss';


Modal.setAppElement('#root');
const customStyles = {
	content: {
	  top: '50%',
	  left: '50%',
	  right: 'auto',
	  bottom: 'auto',
	  marginRight: '-50%',
	  transform: 'translate(-50%, -50%)',
	},
  };
  
function Popup() {
	const [modalIsOpen, setIsOpen] = React.useState(false);
  
	function openModal() {
	  setIsOpen(true);
	}
  
	function closeModal() {
	  setIsOpen(false);
	}
	return (<div>
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			className="modalContent "
			overlayClassName="modalOverlay"
			contentLabel="Example Modal"
		>
			
			<GuideModal/>
		</Modal>
	</div>
	);
}
const GuideModal = () => {

	const Content = (props :IGuide)=>{
		const {category, icon, contents, reverse} = props
		return(
			<div className='guide'>
				<h5 className="titleGuide">{category}</h5>
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
		<div className="guideModal thinkmayScroll">
			<div className='title'>
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
export default Popup;