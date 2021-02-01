import React from 'react';

import Triangle from './Triangle';
import TriangleRefs from './TriangleDefs';
import Arc from './Arc';
import ArcRefs from './ArcDefs';
import Title from './Title';
import TitleDefs from './TitleDefs';

interface PieceProps {
    title?: string;
    degree?: number;
    color?: string;
    index?: number;
    /** 旋转角度 */
    rotateDegree?: number;
}

class Piece extends React.Component<PieceProps> {
    static defaultProps: Partial<PieceProps> = {
        degree: 70,
        color: '#d72572',
        index: 0,
        rotateDegree: 0,
    };

    render(): React.ReactNode {
        const { title, degree, color, index, rotateDegree } = this.props;
        return (
            <>
                <defs>
                    <TriangleRefs degree={degree} color={color} index={index} />
                    <ArcRefs degree={degree} color={color} index={index} />
                    <TitleDefs degree={degree} index={index} />
                </defs>
                <Triangle degree={degree} index={index} rotateDegree={rotateDegree} />
                <Arc degree={degree} index={index} rotateDegree={rotateDegree} />
                <If condition={!!title}>
                    <Title title={title} index={index} rotateDegree={rotateDegree} />
                </If>
            </>
        );
    }
}

export default Piece;
