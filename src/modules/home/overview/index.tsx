import React from 'react';
import { observer } from 'mobx-react';
import './index.less';

import { ScreenSize } from '../utils/enums';

import PersonServed from './person-served/index';
import Title from './title';

import store from './index.store';

@observer
class Overview extends React.Component {
    componentDidMount(): void {
        store.init();
    }

    render(): React.ReactNode {
        return (
            <svg
                id="overview"
                data-name="overview"
                viewBox={`0 0 ${ScreenSize.width} ${ScreenSize.height}`}
                width="100%"
                height="100%">
                <defs>
                    <marker
                        id="lineMarker"
                        viewBox="0 0 4 4"
                        markerWidth="4"
                        markerHeight="4"
                        refX="2"
                        refY="2"
                        orient="auto">
                        <circle r="2" fill="#535b74" cx={2} cy={2}></circle>
                    </marker>
                </defs>
                <g>
                    <Title x={62} y={30} />
                    <text className="gs-person-title" x={62} y={127}>
                        盖雅在全球服务的劳动力人数
                    </text>
                    <text className="gs-overview-field-title" x={62} y={206}>
                        区域当日累计
                    </text>
                    <line
                        x1="64"
                        y1="219"
                        x2="727"
                        y2="219"
                        stroke="#535b74"
                        markerStart="url(#lineMarker)"
                        markerEnd="url(#lineMarker)"
                    />
                    <PersonServed />
                    <text className="gs-overview-field-title" x={62} y={771}>
                        认证
                    </text>
                    <line
                        x1="64"
                        y1="784"
                        x2="527"
                        y2="784"
                        stroke="#535b74"
                        markerStart="url(#lineMarker)"
                        markerEnd="url(#lineMarker)"
                    />
                    <image width="440" x={54} y={818} href={require('../image/certificate.png')} />
                </g>
            </svg>
        );
    }
}

export default Overview;
