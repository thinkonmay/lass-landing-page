import { Dispatch, SetStateAction } from "react";

interface ISwitchBtn {
	productShow: 'macbook' | 'thinkpad',
	setProductShow: Dispatch<SetStateAction<"macbook" | "thinkpad">>
}
 const SwitchBtn = (props: ISwitchBtn) => {
	const { productShow, setProductShow } = props


	console.log(productShow);
	return (
		<div className="switchBtn l-6">
			<button onClick={() => { setProductShow('macbook') }} className={productShow == 'macbook' ? 'btnChecked' : ''}>Macbook</button>
			<button onClick={() => { setProductShow('thinkpad') }} className={productShow == 'thinkpad' ? 'btnChecked' : ''}>Thinkpad</button>

			<div className={productShow == 'thinkpad' ? "checked checkedRight" : "checked"}></div>
		</div>

	)
}

export default SwitchBtn