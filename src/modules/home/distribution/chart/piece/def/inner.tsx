import React from 'react';
import { observer } from 'mobx-react';

import { ChartCenter, ChartCircle, getPositionOnCircle } from '../../utils';

import store from '../../../index.store';

const linearColors = {
    leftBottom: {
        start: {
            color: '#5d0e4c',
            opacity: 0,
        },
        stop: {
            color: '#520341',
            opacity: 0.6,
        },
    },
    rightTop: {
        start: {
            color: '#136446',
            opacity: 0,
        },
        stop: {
            color: '#136446',
            opacity: 0.6,
        },
    },
    leftTop: {
        start: {
            color: '#293c6c',
            opacity: 0,
        },
        stop: {
            color: '#00587a',
            opacity: 0.6,
        },
    },
};

@observer
class PieceInnerDef extends React.Component {
    render(): React.ReactNode {
        return Array.from(store.serviceChart, (item, index) => {
            const placement = store.servicePlacement[item.id];
            const linearInfo = linearColors[placement];
            if (!linearInfo) {
                return null;
            }
            const { x, y } = getPositionOnCircle({
                chartCenter: ChartCenter,
                radius: ChartCircle.innerRadius,
                degree: item.degree / 2,
            });
            return (
                <linearGradient
                    key={item.id}
                    id={`linear_ch_inner_${index}`}
                    x1={x}
                    y1={y}
                    x2={ChartCenter.x}
                    y2={ChartCenter.y}
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor={linearInfo.start.color} stopOpacity={linearInfo.start.opacity} />
                    <stop offset="1" stopColor={linearInfo.stop.color} stopOpacity={linearInfo.stop.opacity} />
                </linearGradient>
            );
        });
    }
}

export default PieceInnerDef;
