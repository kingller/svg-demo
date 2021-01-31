import React from 'react';
import { observer } from 'mobx-react';

import Piece from './piece';

import store from '../../index.store';

@observer
class Pieces extends React.Component {
    render(): React.ReactNode {
        return Array.from(store.serviceChart, (item, index) => {
            return (
                <Piece
                    key={item.id}
                    percent={item.percent}
                    degree={item.degree}
                    usedDegree={item.usedDegree}
                    title={store.servicePlacementCategory[store.servicePlacement[item.id]]}
                    index={index}
                />
            );
        });
    }
}

export default Pieces;
