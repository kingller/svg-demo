import React from 'react';
import { observer } from 'mobx-react';

import { ChartColors } from '../../utils';

import store from '../../../index.store';

@observer
class PercentDef extends React.Component {
    render(): React.ReactNode {
        const { serviceChart } = store;
        if (!serviceChart || !serviceChart.length) {
            return null;
        }
        const colors = Array.from(serviceChart, (service) => {
            return ChartColors[store.servicePlacement[service.id]];
        });

        return (
            <>
                <radialGradient id="linear_ch_percent_0" cx="393.2" cy="101.22" r="16.9" gradientUnits="userSpaceOnUse">
                    <stop offset="0.8" stopColor={colors[0]} stopOpacity="0.3" />
                    <stop offset="0.99" stopColor={colors[0]} />
                </radialGradient>
                <radialGradient
                    id="linear_ch_percent_1"
                    cx="419.46"
                    cy="413.25"
                    r="21.13"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.8" stopColor={colors[1]} stopOpacity="0.3" />
                    <stop offset="0.99" stopColor={colors[1]} />
                </radialGradient>
                <radialGradient
                    id="linear_ch_percent_2"
                    cx="26.21"
                    cy="268.84"
                    r="25.36"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.8" stopColor={colors[2]} stopOpacity="0.3" />
                    <stop offset="0.99" stopColor={colors[2]} />
                </radialGradient>
            </>
        );
    }
}

export default PercentDef;
