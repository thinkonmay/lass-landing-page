import { APP_REDIRECT } from '@/utils/analytics';
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

                        <h1>
                            Bạn muốn
                            <br />
                            <TextTransform></TextTransform>
                            <br />
                            trên mọi thiết bị với Cloud PC
                        </h1>

                        <p className="subText">
                            <br />
                            Mọi thiết bị ở mọi cấu hình đều có thể
                            <br />
                            chiến game xịn và làm đồ hoạ, chỉ với Cloud PC và
                            Internet.
                            {/*Kết nối và sử dụng trên mọi thiết bị.*/}
                        </p>

                        <Link
                            href={APP_REDIRECT}
                            style={{ paddingLeft: 32, paddingRight: 32 }}
                            className="btn-explore pl-[32px] pr-[32px] btn"
                        >
                            Sử dụng <Icon src="shopping-cart"></Icon>
                        </Link>
                    </div>
                    <div className="right">
                        <Image
                            alt="Hero section image"
                            width={900}
                            height={500}
                            src={'/hero_img.png'}
                            priority={true}
                        />

                        {/*<div className="subBg1"></div>*/}
                        {/*<div className="subBg2"></div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
