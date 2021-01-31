import React from 'react';
import { observer } from 'mobx-react';

import './index.less';

import { ScreenSize } from '../../utils/enums';
import ServiceDot from './service-dot';
import ServiceSvg from './service-svg';
import store from '../index.store';

enum PlacementColors {
    leftTop = '#48F6FF',
    leftBottom = '#FF4AA1',
    rightTop = '#45FF9D',
    rightBottom = '#FFDC48',
}

@observer
class Service extends React.Component {
    render(): React.ReactNode {
        const { services, serviceRadius, servicePlacement } = store;
        return (
            <svg
                id="services"
                data-name="services"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${ScreenSize.width} ${ScreenSize.height}`}
                width="100%"
                height="100%">
                <defs>
                    <style>{`.gs-service-dot-inner{animation:scaleDot 2s infinite;}
                    .gs-service-dot-outer{opacity:0.27;animation:scaleDot 2s infinite;}
                    @keyframes scaleDot {
                        0%{transform: scale(1);}
                        50%{transform: scale(1.3);}
                        100%{transform: scale(1);}
                    }`}</style>
                </defs>
                <title>Services</title>
                {Array.from(services, (service) => {
                    const color = PlacementColors[servicePlacement[service.id]];
                    return [
                        <ServiceDot key={service.id} data={service} color={color} radius={serviceRadius[service.id]} />,
                        <ServiceSvg key={`${service.id}_svg`} data={service} color={color} />,
                    ];
                })}
            </svg>
        );
    }
}

export default Service;
