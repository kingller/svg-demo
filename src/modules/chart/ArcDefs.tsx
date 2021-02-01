import React from 'react';

import { ChartCenter, getDisplacementOnCircle, getPositionOnCircle } from './utils';

class ArcDefs extends React.Component {
    render(): React.ReactNode {
        const percent = 20;
        const degree = (percent / 100) * 360;
        const outerRadius = 131.43;
        const { x: outerX, y: outerY } = getPositionOnCircle({
            chartCenter: ChartCenter,
            radius: outerRadius,
            degree,
        });

        return (
            <linearGradient
                id="linear_ch_title_0"
                x1={ChartCenter.x}
                y1={ChartCenter.y - outerRadius}
                x2={outerX}
                y2={outerY}
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#d72572" stopOpacity="0.3" />
                <stop offset="0.8" stopColor="#d72572" />
            </linearGradient>
        );
    }
}

export default ArcDefs;
