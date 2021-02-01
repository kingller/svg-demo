import React from 'react';

import { ChartCenter, getDisplacementOnCircle } from './utils';

interface TriangleProps {
    degree?: number;
    index?: number;
    /** 旋转角度 */
    rotateDegree?: number;
}

class Triangle extends React.Component<TriangleProps> {
    static defaultProps: Partial<TriangleProps> = {
        degree: 70,
        index: 0,
        rotateDegree: 0,
    };

    render(): React.ReactNode {
        const { degree, index, rotateDegree } = this.props;
        const radius = 89.3;
        const { x: moveX, y: moveY } = getDisplacementOnCircle({ radius, degree });
        return (
            <path
                d={`M${ChartCenter.x},${ChartCenter.y}l${0}${-radius}a${radius},${radius},0,0,1,${moveX},${moveY}Z`}
                transform={`rotate(${rotateDegree},${ChartCenter.x},${ChartCenter.y})`}
                style={{ fill: `url(#linear_ch_inner_${index})` }}
            />
        );
    }
}

export default Triangle;
