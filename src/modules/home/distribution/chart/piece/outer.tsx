import React from 'react';
import { observer } from 'mobx-react';

import { ChartCenter, ChartCircle, getPositionOnCircle } from '../utils';

interface PieceOuterProps {
    degree: number;
    usedDegree: number;
    index: number;
}

//外层带颜色的一圈
@observer
class PieceOuter extends React.Component<PieceOuterProps> {
    render(): React.ReactNode {
        const { degree, usedDegree, index } = this.props;
        const radius = ChartCircle.outerRadius;
        const { x, y } = getPositionOnCircle({ chartCenter: ChartCenter, radius, degree });
        return (
            <path
                d={`M${ChartCenter.x},${ChartCenter.y - radius}A${radius},${radius},0,0,1,${x},${y}`}
                transform={`rotate(${usedDegree},${ChartCenter.x},${ChartCenter.y})`}
                strokeWidth={10}
                fill="none"
                style={{ stroke: `url(#linear_ch_outer_${index})` }}
            />
        );
    }
}

export default PieceOuter;
