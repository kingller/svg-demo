import React from 'react';
import { observer } from 'mobx-react';

import { ScreenSize } from '../../utils/enums';
import Edge from './edge';
import store from '../index.store';

@observer
class Edges extends React.Component {
    render(): React.ReactNode {
        const { edges } = store;
        return (
            <svg
                id="edges"
                data-name="edges"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${ScreenSize.width} ${ScreenSize.height}`}
                width="100%"
                height="100%">
                <defs>
                    <style>{`.gs-edge-path{fill:none;stroke:url(#linear);stroke-width:1;stroke-dasharray:100%;stroke-dashoffset:100%;}
                    .gs-edge-path.animated{animation:paintLine 1.2s linear;animation-fill-mode:forwards;}
                    @keyframes paintLine {
                        100%{stroke-dashoffset:0;}
                    }`}</style>
                </defs>
                <title>Edges</title>
                <linearGradient id="linear">
                    <stop offset="0%" style={{ stopColor: '#45FF9D' }} />
                    <stop offset="100%" style={{ stopColor: '#48D0FF', stopOpacity: 0.83 }} />
                </linearGradient>
                {Array.from(edges, (edge) => {
                    return <Edge key={`${edge.sourceId}@${edge.targetId}`} data={edge} />;
                })}
            </svg>
        );
    }
}

export default Edges;
