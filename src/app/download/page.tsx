
import Icon from '../../components/icon';
import './index.scss';


const listDevices = [
    {
        name: 'Desktop',
        listOs: [
            {
                name: 'Window',
                icon: 'os-win-bold',
                text: 'Download',
                subText: 'for Window'
            },
            {
                name: 'MacOs',
                icon: 'ios',
                text: 'Download',
                subText: 'for macOs'
            }
        ]
    },
    {
        name: 'Mobile',
        listOs: [
            {
                name: 'Android',
                icon: 'android',
                text: 'Incoming...',
                subText: ''
            },
            {
                name: 'IOS',
                icon: 'ios',
                text: 'Incoming...',
                subText: ''
            }
        ]
    },
]
export default function Download() {
    return (
        <>
            <div className="download grid wide">
                <div className="wrapperTitle">
                    <h1 className="title">
                        Download <span className="highlight">Thinkmay</span>
                    </h1>
                </div>

                <div className="mainContent">
                    {
                        listDevices.map(device => (
                            <div key={device.name} className='section'>
                                <h2 className="title">
                                    {device.name}
                                </h2>
                                <div className="ctnBoxs">
                                    {
                                        device.listOs.map(os => (
                                            <div key={os.text} className="box">
                                                <div className="left">
                                                    <Icon width={60} height={60} src={os.icon}></Icon>
                                                    <p className='text'>{os.name}</p>
                                                </div>
                                                <div className="right">
                                                    <h6 className='text'>{os.text}</h6>
                                                    <p className="subText">{os.subText}</p>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        ))
                    }



                    <div className="section">
                        <h2 className="title">
                            dùng trực tiếp trên website <a href="https://supabase.thinkmay.net/" target='_blank'>tại đây</a> cho mọi thiết bị
                        </h2>
                        <p className='subTitle'>*Mở trên trình duyệt Chrome để có trải nghiệm tốt nhất</p>

                    </div>
                </div>
            </div>
        </>
    );
}
