import React from 'react';

import './index.less';

import LogoAnimation from './logo-animation';

class Logo extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <svg className="gs-logo-svg" width="100%" viewBox={`0 0 3200 90`}>
                <style>{`.gs-logo-bg{fill:url(#gs-logo-bg-linear);}`}</style>
                <defs>
                    <linearGradient
                        xmlns="http://www.w3.org/2000/svg"
                        id="gs-logo-bg-linear"
                        x1="0"
                        y1="128.19"
                        x2="0"
                        y2="-69.3"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.02" stopColor="#2adeff" />
                        <stop offset="0.04" stopColor="#28d5f5" />
                        <stop offset="0.15" stopColor="#1fa4bc" />
                        <stop offset="0.27" stopColor="#17788a" />
                        <stop offset="0.39" stopColor="#105360" />
                        <stop offset="0.51" stopColor="#0a353d" />
                        <stop offset="0.62" stopColor="#061e22" />
                        <stop offset="0.74" stopColor="#020d0f" />
                        <stop offset="0.87" stopColor="#010304" />
                        <stop offset="1" />
                    </linearGradient>
                </defs>
                <g>
                    <rect className="gs-logo-bg" x="0" y="0" width="100%" height="90" />
                    <LogoAnimation y={24.8} />
                </g>
            </svg>
        );
    }
}

export default Logo;
