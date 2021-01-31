import React from 'react';
import { observer } from 'mobx-react';

import { IService } from '../interface';

interface ServiceProps {
    data: IService;
    color: string;
    radius: number;
}

@observer
class ServiceDot extends React.Component<ServiceProps> {
    render(): React.ReactNode {
        const { data, color, radius } = this.props;
        const { x, y } = data.position;
        const outerRadius = radius * 2.2;
        return [
            <circle
                key="inner"
                className="gs-service-dot-inner"
                cx={x}
                cy={y}
                r={radius}
                fill={color}
                style={{ transformOrigin: `${x}px ${y}px` }}
            />,
            <circle
                key="outer"
                className="gs-service-dot-outer"
                cx={x}
                cy={y}
                r={outerRadius}
                fill={color}
                style={{ transformOrigin: `${x}px ${y}px` }}
            />,
        ];
    }
}

export default ServiceDot;
