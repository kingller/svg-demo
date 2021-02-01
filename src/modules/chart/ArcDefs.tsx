import React from 'react';

import { ChartCenter, getPositionOnCircle } from './utils';

interface ArcDefsProps {
    degree?: number;
    color?: string;
    index?: number;
}

class ArcDefs extends React.Component<ArcDefsProps> {
    static defaultProps: Partial<ArcDefsProps> = {
        degree: 70,
        color: '#d72572',
        index: 0,
    };

    render(): React.ReactNode {
        const { degree, color, index } = this.props;
        const outerRadius = 131.43;
        const { x: outerX, y: outerY } = getPositionOnCircle({
            chartCenter: ChartCenter,
            radius: outerRadius,
            degree,
        });

        return (
            <linearGradient
                id={`linear_ch_title_${index}`}
                x1={ChartCenter.x}
                y1={ChartCenter.y - outerRadius}
                x2={outerX}
                y2={outerY}
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor={color} stopOpacity="0.3" />
                <stop offset="0.8" stopColor={color} />
            </linearGradient>
        );
    }
}

export default ArcDefs;
