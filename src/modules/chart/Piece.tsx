import React from 'react';

import Triangle from './Triangle';
import TriangleRefs from './TriangleDefs';
import Arc from './Arc';
import ArcRefs from './ArcDefs';

class Piece extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <defs>
                    <TriangleRefs />
                    <ArcRefs />
                </defs>
                <Triangle />
                <Arc />
            </>
        );
    }
}

export default Piece;
