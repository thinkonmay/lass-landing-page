"use client"
import { TypeAnimation } from "react-type-animation";


const TextTransform = () => {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
                500,
                'làm đồ họa', // initially rendered starting point
                1000,
                'dựng phim',
                1000,
                'thiết kế kiến trúc',
                1000,
                'và chơi game',
                500,
            ]}
            speed={50}
            //style={{ fontSize: '2em' }}
            repeat={Infinity}
            className="textTransform"
        />
    );
};

export default TextTransform;
