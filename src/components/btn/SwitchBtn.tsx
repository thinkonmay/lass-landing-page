import { Lines, lines } from '@/data/lines';
import { Dispatch, SetStateAction } from 'react';

interface ISwitchBtn {
	productShow: Lines
	setProductShow: Dispatch<SetStateAction<Lines>>;
}
const SwitchBtn = (props: ISwitchBtn) => {
	const { productShow, setProductShow } = props;
	return (
		<div className="switchBtn l-6" >
			{lines.map(x =>
				<button
					key={x.id}
					className={productShow == x.id ? 'btnChecked' : ''}
					onClick={() => setProductShow(x.id)}
				>
					{x.title}
				</button>
			)}

			<div className='checked'
				style={{
					width: `${100 / lines.length}%`,
					transform: `translateX(${lines.findIndex(x => x.id == productShow) * 100}%)`
				}}
			></div>
		</div>
	);
};

export default SwitchBtn;
