import React from 'react';
import { observer } from 'mobx-react';

import { ChartCenter, ChartCircle, ChartColors, getPositionOnCircle } from '../../utils';

import store from '../../../index.store';

@observer
class PieceOuterDef extends React.Component {
    render(): React.ReactNode {
        return Array.from(store.serviceChart, (item, index) => {
            const placement = store.servicePlacement[item.id];
            const color = ChartColors[placement];
            const radius = ChartCircle.outerRadius;
            const { x, y } = getPositionOnCircle({
                chartCenter: ChartCenter,
                radius,
                degree: item.degree,
            });
            return (
                <linearGradient
                    key={item.id}
                    id={`linear_ch_outer_${index}`}
                    x1={ChartCenter.x}
                    y1={ChartCenter.y - radius}
                    x2={x}
                    y2={y}
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor={color} stopOpacity="0.3" />
                    <stop offset="1" stopColor={color} />
                </linearGradient>
            );
        });
    }
}

export default PieceOuterDef;
