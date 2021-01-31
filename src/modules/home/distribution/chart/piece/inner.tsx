import React from 'react';
import { observer } from 'mobx-react';

import { ChartCenter, ChartCircle, getDisplacementOnCircle } from '../utils';

interface PieceInnerProps {
    degree: number;
    usedDegree: number;
    index: number;
}

//内层带颜色饼
@observer
class PieceInner extends React.Component<PieceInnerProps> {
    render(): React.ReactNode {
        const { degree, usedDegree, index } = this.props;
        const radius = ChartCircle.innerRadius;
        const { x: moveX, y: moveY } = getDisplacementOnCircle({ radius, degree });
        return (
            <path
                d={`M${ChartCenter.x},${ChartCenter.y}l${0}${-radius}a${radius},${radius},0,0,1,${moveX},${moveY}Z`}
                transform={`rotate(${usedDegree},${ChartCenter.x},${ChartCenter.y})`}
                style={{ fill: `url(#linear_ch_inner_${index})` }}
            />
        );
    }
}

export default PieceInner;
