import React from 'react';

import { ChartCenter, getDisplacementOnCircle } from './utils';

class Triangle extends React.Component {
    render(): React.ReactNode {
        const percent = 20;
        const degree = (percent / 100) * 360;
        // 旋转角度
        const usedDegree = 0;
        const radius = 89.3;
        const { x: moveX, y: moveY } = getDisplacementOnCircle({ radius, degree });
        return (
            <path
                d={`M${ChartCenter.x},${ChartCenter.y}l${0}${-radius}a${radius},${radius},0,0,1,${moveX},${moveY}Z`}
                transform={`rotate(${usedDegree},${ChartCenter.x},${ChartCenter.y})`}
                style={{ fill: 'url(#linear_ch_inner_0)' }}
            />
        );
    }
}

export default Triangle;
