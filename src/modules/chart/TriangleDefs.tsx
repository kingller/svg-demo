import React from 'react';

import { ChartCenter, getPositionOnCircle } from './utils';

interface TriangleDefsProps {
    degree?: number;
    color?: string;
    index?: number;
}

class TriangleDefs extends React.Component<TriangleDefsProps> {
    static defaultProps: Partial<TriangleDefsProps> = {
        degree: 70,
        color: '#d72572',
        index: 0,
    };

    render(): React.ReactNode {
        const { degree, color, index } = this.props;
        const radius = 89.3;
        const { x, y } = getPositionOnCircle({
            chartCenter: ChartCenter,
            radius,
            degree: degree / 2,
        });

        return (
            <linearGradient
                id={`linear_ch_inner_${index}`}
                x1={x}
                y1={y}
                x2={ChartCenter.x}
                y2={ChartCenter.y}
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor={color} stopOpacity={0} />
                <stop offset="1" stopColor={color} stopOpacity={0.6} />
            </linearGradient>
        );
    }
}

export default TriangleDefs;
