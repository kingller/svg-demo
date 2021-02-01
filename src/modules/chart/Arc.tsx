import React from 'react';

import { ChartCenter, getDisplacementOnCircle, getPositionOnCircle } from './utils';

class Arc extends React.Component {
    render(): React.ReactNode {
        const percent = 20;
        const degree = (percent / 100) * 360;
        // 旋转角度
        const usedDegree = 0;
        const innerRadius = 89.3;
        const { x: moveInnerX, y: moveInnerY } = getDisplacementOnCircle({ radius: innerRadius, degree });
        const outerRadius = 131.43;
        const { x: outerX, y: outerY } = getPositionOnCircle({
            chartCenter: ChartCenter,
            radius: outerRadius,
            degree,
        });
        return (
            <path
                className="gs-cls-723"
                d={`M${ChartCenter.x},${ChartCenter.y -
                    innerRadius}a${innerRadius},${innerRadius},0,0,1,${moveInnerX},${moveInnerY}L${outerX},${outerY}A${outerRadius},${outerRadius},0,0,0,${
                    ChartCenter.x
                },${ChartCenter.y - outerRadius}Z`}
                transform={`rotate(${usedDegree},${ChartCenter.x},${ChartCenter.y})`}
                style={{ fill: 'url(#linear_ch_title_0' }}
            />
        );
    }
}

export default Arc;
