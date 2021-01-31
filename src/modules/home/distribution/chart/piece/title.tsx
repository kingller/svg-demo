import React from 'react';
import { observer } from 'mobx-react';

import { ChartCenter, ChartCircle, getDisplacementOnCircle, getPositionOnCircle } from '../utils';

interface PieceTitleProps {
    degree: number;
    usedDegree: number;
    title: string;
    index: number;
}

//文字区
@observer
class PieceTitle extends React.Component<PieceTitleProps> {
    render(): React.ReactNode {
        const { degree, usedDegree, title, index } = this.props;
        const innerRadius = ChartCircle.innerRadius;
        const { x: moveInnerX, y: moveInnerY } = getDisplacementOnCircle({ radius: innerRadius, degree });
        const outerRadius = ChartCircle.titleRadius;
        const { x: outerX, y: outerY } = getPositionOnCircle({
            chartCenter: ChartCenter,
            radius: outerRadius,
            degree,
        });

        return (
            <>
                <path
                    className="gs-cls-723"
                    d={`M${ChartCenter.x},${ChartCenter.y -
                        innerRadius}a${innerRadius},${innerRadius},0,0,1,${moveInnerX},${moveInnerY}L${outerX},${outerY}A${outerRadius},${outerRadius},0,0,0,${
                        ChartCenter.x
                    },${ChartCenter.y - outerRadius}Z`}
                    transform={`rotate(${usedDegree},${ChartCenter.x},${ChartCenter.y})`}
                    style={{ fill: `url(#linear_ch_title_${index})` }}
                />
                <text
                    fill="#ffffff"
                    fontSize="20"
                    transform={`rotate(${usedDegree},${ChartCenter.x},${ChartCenter.y})`}>
                    <textPath
                        href={`#ch_title_path_${index}`}
                        startOffset="50%"
                        textAnchor="middle"
                        dominantBaseline="central">
                        {title}
                    </textPath>
                </text>
            </>
        );
    }
}

export default PieceTitle;
