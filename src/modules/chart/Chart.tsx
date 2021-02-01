import React from 'react';

import Triangle from './Triangle';
import TriangleRefs from './TriangleDefs';
import Arc from './Arc';
import ArcRefs from './ArcDefs';
import Piece from './Piece';

class Chart extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <svg width="490" height="545" viewBox="0 0 490 545">
                    <defs>
                        <TriangleRefs />
                    </defs>
                    <Triangle />
                </svg>
                <svg width="490" height="545" viewBox="0 0 490 545">
                    <defs>
                        <ArcRefs />
                    </defs>
                    <Arc />
                </svg>
                <svg width="490" height="545" viewBox="0 0 490 545">
                    <Piece />
                </svg>
            </>
        );
    }
}

export default Chart;
