import { reasons } from '@/data/reasons';
import HeroSection from '../components/herosection/Herosection';
import Icon from '../components/icon';
import { Introduce } from '../components/products/Products';
import Testimonials from '../components/testimonials/Testimonials';
import './page.scss';

export default function Home() {
    return (
        <main className="main">
            <div className="content">
                <HeroSection></HeroSection>
                <Reason></Reason>
                <Introduce></Introduce>
                <Testimonials></Testimonials>
            </div>
        </main>
    );
}

const Reason = () => {
    return (
        <div className="reason">
            <div className="mainContent">
                <div className="top  grid wide ">
                    <h2 className="l-6 c-12 ">
                        {' '}
                        Điều gì khiến{' '}
                        <span className="specialText">Thinkmay</span> khác biệt?
                    </h2>
                    <div className="l-2 c-0">
                        <a className=" inline-flex gap-4" href="#">
                            Xem Dịch vụ <Icon src="arrow-right"></Icon>
                        </a>
                    </div>
                </div>
                <div className="bottom ">
                    <div className="ctnCards grid wide ">
                        {reasons.map((x, index) => (
                            <div key={index} className="card l-4 m-12 c-12">
                                <div>
                                    <Icon
                                        src={x.icon}
                                        className="text-black"
                                        width={66}
                                        height={66}
                                    />
                                    <div className="info">
                                        <span className="subTitle">
                                            {x.subtitle}
                                        </span>
                                        <h3 className="title">{x.title}</h3>
                                        {x.content.map((y, index) => (
                                            <p key={index} className="text">
                                                {y}
                                                <br />
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
