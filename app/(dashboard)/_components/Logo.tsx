import React from 'react';

type LogoProps = {
    width?: number;
    height?: number;
}

const Logo = ({width=130, height=130}: LogoProps) => {
    return (
        <div style={{width: `${width}px`, height: `${height}px`, overflow: 'hidden'}}>
            <img src="wema.png" alt="description" className="text-white filter invert grayscale" />
        </div>
    );
};

export default Logo;