'use client';
import Image from 'next/image';

import { Lines } from '@/data/lines';
import { IProduct, products } from '@/data/products';
import Link from 'next/link';
import { useState } from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcumb';
import SwitchBtn from '../../components/btn/SwitchBtn';
import Icon from '../../components/icon';
import { formatPrice } from '../../utils/formatPrice';
import './services.scss';

export default function Services() {
	const [productShow, setProductShow] = useState<Lines>(Lines.MACBOOK);

	return (
		<>
			<Breadcrumb></Breadcrumb>
			<div className="services ">
				<div className="mainContent grid wide">
					<div className="title l-8">
						<h2>
							Những lựa chọn Laptop tại <span>Thinkmay</span>
						</h2>
						<p>
							Hãy khám phá và lựa chọn máy tính phù hợp với nhu
							cầu công việc và giải trí của bạn. Nếu bạn còn phân
							vân thì đội ngũ tư vấn của chúng tôi luôn sẵn sàng
							hỗ trợ bạn chọn lựa. Liên hệ với Thinkmay tại đây.
						</p>
					</div>
					<SwitchBtn
						productShow={productShow}
						setProductShow={setProductShow}
					></SwitchBtn>
					{productShow == Lines.MACBOOK
						? <MacbookBanner></MacbookBanner>
						: <ThinkpadBanner></ThinkpadBanner>
					}

					<div className="wrapperProducts row">
						{products
							.filter((x) => x.type == productShow)
							.map((p) => <Product {...p}></Product>)}
					</div>
				</div>
			</div>
		</>
	);
}
const MacbookBanner = () => {
	return (
		<div className="ctnImages">
			<div className="l-5">
				<Image
					width={1400}
					height={420}
					alt="img"
					className="h-full"
					src={'/services-macbook-1.png'}
				/>
			</div>
			<div className="l-7">
				<Image
					width={746}
					height={476}
					alt="img"
					className="h-full"
					src={'/services-macbook-2.png'}
				/>
			</div>
		</div>
	);
};

const ThinkpadBanner = () => {
	return (
		<div className="ctnImages">
			<div className="l-6">
				<Image
					width={1280}
					height={640}
					alt="img"
					// className="h-full"
					src={'/thinkpad-x1-gen10.jpg'}
				/>
			</div>
			<div className="l-6">
				<Image
					width={1280}
					height={640}
					alt="img"
					// className="h-full"
					src={'/thinkpad-x1-gen10.png'}
				/>
			</div>
		</div>
	);
};
const Product = (props: IProduct) => {
	return (
		<div className="productCard col ">
			<div>
				<Image
					src={'/' + props.imgSrc }
					width={360}
					height={160}
					alt="img"
				></Image>
			</div>

			<h4 className="name">{props.name}</h4>
			<p className="subText">{props.subText}</p>

			<h6 className="pricing">{formatPrice(props.price)} VNĐ</h6>

			<div className="ctnButtons">
				<Link href={`/services/${props.slug}`} className="btnSeeMore">
					Xem thêm
				</Link>
				<Link
					className="inline-flex gap-4"
					href={`/services/${props.slug}/order`}
				>
					Mua ngay <Icon src="arrow-right"></Icon>
				</Link>
			</div>
			<hr />

			<ul className="subInfo">{props?.spec?.map((s) => <li>{s}</li>)}</ul>
		</div>
	);
};
