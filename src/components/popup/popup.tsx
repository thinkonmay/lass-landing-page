"use client"
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './popup.scss';
import Guide from '../guide/guide';


  
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
				<Guide></Guide>
			</div>
		</div>

	)

}
export default Popup;