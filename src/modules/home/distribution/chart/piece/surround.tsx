import React from 'react';
import { observer } from 'mobx-react';

import { ChartCenter, ChartCircle, getDisplacementOnCircle, getPositionOnCircle } from '../utils';

interface PieceSurroundProps {
    degree: number;
    usedDegree: number;
    index: number;
}

//最外层包围的一圈
@observer
class PieceSurround extends React.Component<PieceSurroundProps> {
    render(): React.ReactNode {
        const { degree, usedDegree, index } = this.props;
        const { innerRadius, surroundRadius } = ChartCircle;
        const { x: moveX, y: moveY } = getDisplacementOnCircle({ radius: surroundRadius, degree });
        const { x, y } = getPositionOnCircle({ chartCenter: ChartCenter, radius: innerRadius, degree });
        return (
            <path
                d={`M${ChartCenter.x},${ChartCenter.y - innerRadius}l0,${innerRadius -
                    surroundRadius}a${surroundRadius},${surroundRadius},0,0,1,${moveX},${moveY}L${x},${y}`}
                transform={`rotate(${usedDegree},${ChartCenter.x},${ChartCenter.y})`}
                strokeWidth={2}
                fill="none"
                style={{ stroke: `url(#linear_ch_surround_${index})` }}
            />
        );
    }
}

export default PieceSurround;
