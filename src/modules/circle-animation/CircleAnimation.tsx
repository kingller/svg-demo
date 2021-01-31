import React from 'react';

class CircleAnimation extends React.Component {
    render(): React.ReactNode {
        const x = 100;
        const y = 100;
        const radius = 20;
        const outerRadius = radius * 2.2;
        const color = '#5ac1dc';
        return (
            <svg width="200" height="200" viewBox="0 0 200 200">
                <defs>
                    <style>{`.gs-service-dot-inner{animation:scaleDot 2s infinite;}
                    .gs-service-dot-outer{opacity:0.27;animation:scaleDot 2s infinite;}
                    @keyframes scaleDot {
                        0%{transform: scale(1);}
                        50%{transform: scale(1.3);}
                        100%{transform: scale(1);}
                    }`}</style>
                </defs>
                <circle
                    key="inner"
                    className="gs-service-dot-inner"
                    cx={x}
                    cy={y}
                    r={radius}
                    fill={color}
                    style={{ transformOrigin: `${x}px ${y}px` }}
                />
                <circle
                    key="outer"
                    className="gs-service-dot-outer"
                    cx={x}
                    cy={y}
                    r={outerRadius}
                    fill={color}
                    style={{ transformOrigin: `${x}px ${y}px` }}
                />
            </svg>
        );
    }
}

export default CircleAnimation;
