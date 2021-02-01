import React from 'react';

import { ChartCenter, getDisplacementOnCircle, getPositionOnCircle } from './utils';

interface ArcProps {
    degree?: number;
    index?: number;
    /** 旋转角度 */
    rotateDegree?: number;
}

class Arc extends React.Component<ArcProps> {
    static defaultProps: Partial<ArcProps> = {
        degree: 70,
        index: 0,
        rotateDegree: 0,
    };

    render(): React.ReactNode {
        const { degree, index, rotateDegree } = this.props;
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
                transform={`rotate(${rotateDegree},${ChartCenter.x},${ChartCenter.y})`}
                style={{ fill: `url(#linear_ch_title_${index}` }}
            />
        );
    }
}

export default Arc;
