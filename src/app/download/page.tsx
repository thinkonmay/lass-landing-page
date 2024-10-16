'use client';
import { APP_REDIRECT } from '@/utils/analytics';
import { useEffect } from 'react';
import Icon from '../../components/icon';
import './index.scss';

type Device = {
    name: string;
    listOs: OS[];
};

type OS = {
    name: string;
    icon: string;
    text: string;
    subText: string;
    link?: string;
    platform?: string;
};
APP_REDIRECT;
const listDevices: Device[] = [
    {
        name: 'Desktop',
        listOs: [
            {
                name: 'Window',
                icon: 'os-win-bold',
                text: 'Tải xuống',
                subText: 'cho Window',
                platform: 'windows-x86_64'
            },
            {
                name: 'Linux',
                icon: 'ubuntu',
                // text: 'Tải xuống',
                // subText: 'cho Linux'
                text: 'Sắp ra mắt...',
                subText: '',
                platform: 'linux-x86_64'
            },
            {
                name: 'MacOs',
                icon: 'ios',
                // text: 'Tải xuống',
                // subText: 'cho MacOS'
                text: 'Sắp ra mắt...',
                subText: ''
            }
        ]
    },
    {
        name: 'Mobile',
        listOs: [
            {
                name: 'Android',
                icon: 'android',
                text: 'Sắp ra mắt...',
                subText: ''
            },
            {
                name: 'IOS',
                icon: 'ios',
                text: 'Sắp ra mắt...',
                subText: ''
            }
        ]
    }
];
export default function Download() {
    async function fetchDownloadList() {
        const downloadList = await fetch(
            ` https://api.github.com/gists/85b62c4b7084ed8e9818992ef2501102`,
            {
                headers: {
                    Accept: 'application/vnd.github+json',
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            }
        );

        const data = await downloadList.json();

        const listApp = JSON.parse(
            data.files['thinkmay-tauri-app.json']['content']
        );

        const platforms = listApp['platforms'];

        for (let i = 0; i < listDevices[0].listOs.length; i++) {
            if (
                listDevices[0].listOs[0].platform != undefined &&
                listDevices[0].listOs[0].platform != null
            ) {
                const platform: string = listDevices[0].listOs[0].platform;
                listDevices[0].listOs[0].link = platforms[platform].url;
            }
        }
    }

    useEffect(() => {
        fetchDownloadList();
    }, []);

    return (
        <>
            <div className="download grid wide">
                <div className="wrapperTitle">
                    <h1 className="title">
                        Tải xuống <span className="highlight">Thinkmay</span>
                    </h1>
                </div>

                <div className="mainContent">
                    {listDevices.map((device) => (
                        <div key={device.name} className="section">
                            <h2 className="title">{device.name}</h2>
                            <div className="ctnBoxs">
                                {device.listOs.map((os) => (
                                    <div
                                        key={os.name}
                                        className="box"
                                        onClick={() => {
                                            window.open(`${os.link}`, '_blank');
                                        }}
                                        style={{
                                            backgroundColor:
                                                os.subText != ''
                                                    ? 'white'
                                                    : '#DDDDDD'
                                        }}
                                    >
                                        <div className="left">
                                            <Icon
                                                width={60}
                                                height={60}
                                                src={os.icon}
                                            ></Icon>
                                            <p className="text">{os.name}</p>
                                        </div>
                                        <div className="right">
                                            <h6 className="text">{os.text}</h6>
                                            <p className="subText">
                                                {os.subText}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="section">
                        <h2 className="title">
                            dùng trực tiếp trên website{' '}
                            <a href={APP_REDIRECT} target="_blank">
                                tại đây
                            </a>{' '}
                            cho mọi thiết bị
                        </h2>
                        <p className="subTitle">
                            *Mở trên trình duyệt Chrome để có trải nghiệm tốt
                            nhất
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
