import React from 'react';
import { observer } from 'mobx-react';

import PieceInner from './inner';
import PieceTitle from './title';
import PieceOuter from './outer';
import PieceSurround from './surround';

interface PieceProps {
    percent: number;
    degree: number;
    usedDegree: number;
    title: string;
    index: number;
}

@observer
class Piece extends React.Component<PieceProps> {
    render(): React.ReactNode {
        const { degree, usedDegree, title, index } = this.props;
        return (
            <>
                <PieceTitle degree={degree} usedDegree={usedDegree} title={title} index={index} />
                <PieceOuter degree={degree} usedDegree={usedDegree} index={index} />
                <PieceInner degree={degree} usedDegree={usedDegree} index={index} />
                <PieceSurround degree={degree} usedDegree={usedDegree} index={index} />
            </>
        );
    }
}

export default Piece;
