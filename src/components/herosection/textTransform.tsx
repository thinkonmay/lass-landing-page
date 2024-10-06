"use client"
import { TypeAnimation } from "react-type-animation";


const TextTransform = () => {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
                300,
                'Chiến black myth wukong',
                1000,
                'Chiến God of War',
                2000,
                'Chiến Elden ring',
                2000,
                'thiết kế kiến trúc',
                2000,
                'làm đồ họa',
                2000,
                'train AI',
                2000,
            ]}
            speed={50}
            //style={{ fontSize: '2em' }}
            repeat={Infinity}
            className="textTransform"
        />
    );
};

export default TextTransform;
