import React from 'react';

import { ChartCenter, getDisplacementOnCircle, getPositionOnCircle } from './utils';

interface ArcProps {
    title: string;
    index?: number;
    /** 旋转角度 */
    rotateDegree?: number;
}

class Title extends React.Component<ArcProps> {
    static defaultProps: Partial<ArcProps> = {
        index: 0,
        rotateDegree: 0,
    };

    render(): React.ReactNode {
        const { title, index, rotateDegree } = this.props;

        return (
            <text fill="#ffffff" fontSize="20" transform={`rotate(${rotateDegree},${ChartCenter.x},${ChartCenter.y})`}>
                <textPath
                    href={`#ch_title_path_${index}`}
                    startOffset="50%"
                    textAnchor="middle"
                    dominantBaseline="central">
                    {title}
                </textPath>
            </text>
        );
    }
}

export default Title;
