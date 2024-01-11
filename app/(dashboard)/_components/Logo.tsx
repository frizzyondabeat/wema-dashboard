import React from 'react';
import Image from "next/image";
import wema from "@public/wema.png";

type LogoProps = {
    width?: number;
    height?: number;
}

const Logo = ({width=130, height=130}: LogoProps) => {
    return (
        <div style={{width: `${width}px`, height: `${height}px`, overflow: 'hidden'}}>
            <Image width={width} height={height} src={wema} alt="logo" quality={100} className="text-white filter invert grayscale" />
        </div>
    );
};

export default Logo;