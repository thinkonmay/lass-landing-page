import Image from 'next/image';
import Link from 'next/link';
import Icon from '../icon';
import './herosection.scss';
import TextTransform from './textTransform';

function HeroSection() {
    return (
        <div className="heroSection">
            <div className="slide1">
                <div className="mainContent grid wide">
                    <div className="left col l-6">
                        <Icon width={105} height={58} src="logo-black"></Icon>
                        <span className="brand">Cloud PC</span>

                        <h1>
                            Bạn muốn  <TextTransform></TextTransform>
                            <br/>
                            trên mọi thiết bị
                        </h1>

                        <p className="subText">
                            Chúng tôi cung cấp Cloud PC và phần mềm bản quyền.
                            <br />
                        </p>

                        <Link
                            href={'https://play.thinkmay.net'}
                            style={{ paddingLeft: 32, paddingRight: 32 }}
                            className="btn-explore pl-[32px] pr-[32px] btn"
                        >
                            Dùng thử ngay <Icon src="shopping-cart"></Icon>
                        </Link>
                    </div>
                    <div className="right">
                        <Image
                            alt="Hero section image"
                            width={793}
                            height={480}
                            src={'/macbook.png'}
                            priority={true}
                        />

                        <div className="subBg1"></div>
                        <div className="subBg2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
