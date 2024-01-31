import Image from "next/image";

interface Props{
	width?: number,
	height?: number,
	className?: string,
	src: string,
}
function Icon(props: Props) {

	const {width = 24, height = 24, src, className} = props
	const srcFormat = "/icon/" + src + ".svg"
	return ( 
		<Image className={className} alt="icon" width={width} height={height} src={srcFormat}></Image>
	 );
}

export default Icon;