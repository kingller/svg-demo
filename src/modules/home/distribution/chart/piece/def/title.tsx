import React from 'react';
import { observer } from 'mobx-react';

import { ChartCenter, ChartCircle, ChartColors, getPositionOnCircle, getDisplacementOnCircle } from '../../utils';

import store from '../../../index.store';

@observer
class PieceTitleDef extends React.Component {
    render(): React.ReactNode {
        return Array.from(store.serviceChart, (item, index) => {
            const placement = store.servicePlacement[item.id];
            const color = ChartColors[placement];
            const { x, y } = getPositionOnCircle({
                chartCenter: ChartCenter,
                radius: ChartCircle.titleRadius,
                degree: item.degree,
            });
            const middleRadius = (ChartCircle.titleRadius - ChartCircle.innerRadius) / 2 + ChartCircle.innerRadius;
            const { x: moveX, y: moveY } = getDisplacementOnCircle({ radius: middleRadius, degree: item.degree });

            return (
                <React.Fragment key={item.id}>
                    <linearGradient
                        id={`linear_ch_title_${index}`}
                        x1={ChartCenter.x}
                        y1={ChartCenter.y - ChartCircle.titleRadius}
                        x2={x}
                        y2={y}
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor={color} stopOpacity="0.3" />
                        <stop offset="0.8" stopColor={color} />
                    </linearGradient>
                    <path
                        id={`ch_title_path_${index}`}
                        d={`M${ChartCenter.x},${ChartCenter.y -
                            middleRadius}a${middleRadius},${middleRadius},0,0,1,${moveX},${moveY}`}
                    />
                </React.Fragment>
            );
        });
    }
}

export default PieceTitleDef;
