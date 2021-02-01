import React from 'react';

import { ChartCenter, getDisplacementOnCircle, getPositionOnCircle } from './utils';

interface ArcProps {
    title: string;
    degree?: number;
    index?: number;
}

class TitleDefs extends React.Component<ArcProps> {
    static defaultProps: Partial<ArcProps> = {
        degree: 70,
        index: 0,
    };

    render(): React.ReactNode {
        const { degree, index } = this.props;
        const innerRadius = 89.3;
        const outerRadius = 131.43;
        const middleRadius = (outerRadius - innerRadius) / 2 + innerRadius;
        const { x: moveX, y: moveY } = getDisplacementOnCircle({ radius: middleRadius, degree });

        return (
            <path
                id={`ch_title_path_${index}`}
                d={`M${ChartCenter.x},${ChartCenter.y -
                    middleRadius}a${middleRadius},${middleRadius},0,0,1,${moveX},${moveY}`}
            />
        );
    }
}

export default TitleDefs;
