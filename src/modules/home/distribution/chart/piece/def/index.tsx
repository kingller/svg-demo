import React from 'react';
import { observer } from 'mobx-react';

import Inner from './inner';
import Title from './title';
import Outer from './outer';
import Surround from './surround';

@observer
class PieceDef extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <Inner />
                <Title />
                <Outer />
                <Surround />
            </>
        );
    }
}

export default PieceDef;
