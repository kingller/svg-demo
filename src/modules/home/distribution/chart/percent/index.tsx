import React from 'react';
import { observer } from 'mobx-react';

import { ChartPercentColors } from '../utils';

import store from '../../index.store';

const positions = [
    {
        x: 365.19,
        y: 116.84,
    },
    {
        x: 395.69,
        y: 428.78,
    },
    {
        x: 0,
        y: 284.28,
    },
];

@observer
class Pieces extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <path
                    className="gs-cls-773"
                    d="M394.19,84.84c-.51,0-1-.07-1.54-.07s-1,0-1.54.07a16.77,16.77,0,1,0,3.08,0Z"
                    opacity={0.5}
                    style={{ fill: `url(#linear_ch_percent_0)` }}
                />
                <path
                    className="gs-cls-772"
                    d="M420.69,392.78c-.63-.06-1.27-.1-1.92-.1s-1.29,0-1.92.1a21,21,0,1,0,3.84,0Z"
                    opacity={0.5}
                    style={{ fill: `url(#linear_ch_percent_1)` }}
                />
                <path
                    className="gs-cls-774"
                    d="M27.69,244.28c-.76-.07-1.52-.11-2.3-.11s-1.55,0-2.31.11a25.16,25.16,0,1,0,4.61,0Z"
                    opacity={0.5}
                    style={{ fill: `url(#linear_ch_percent_2)` }}
                />
                {Array.from(store.serviceChart, (service, index) => {
                    return (
                        <text
                            key={service.id}
                            fontSize="43"
                            fill={ChartPercentColors[store.servicePlacement[service.id]]}
                            x={positions[index]?.x}
                            y={positions[index]?.y}
                            fontWeight="bold">
                            {service.percent}%
                        </text>
                    );
                })}
            </>
        );
    }
}

export default Pieces;
