import React from 'react';

import { ChartCenter, getDisplacementOnCircle, getPositionOnCircle } from './utils';

class TriangleDefs extends React.Component {
    render(): React.ReactNode {
        const percent = 20;
        const degree = (percent / 100) * 360;
        const radius = 89.3;
        const { x, y } = getPositionOnCircle({
            chartCenter: ChartCenter,
            radius,
            degree: degree / 2,
        });

        return (
            <linearGradient
                id="linear_ch_inner_0"
                x1={x}
                y1={y}
                x2={ChartCenter.x}
                y2={ChartCenter.y}
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#5d0e4c" stopOpacity={0} />
                <stop offset="1" stopColor="#520341" stopOpacity={0.6} />
            </linearGradient>
        );
    }
}

export default TriangleDefs;
