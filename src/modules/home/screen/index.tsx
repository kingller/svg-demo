import React from 'react';
import { observer } from 'mobx-react';

import { ScreenSize } from '../utils/enums';

import './index.less';

@observer
class Screen extends React.Component {
    render(): React.ReactNode {
        const { children } = this.props;
        return (
            <div className="gs-screen">
                <svg
                    width="100%"
                    height="100%"
                    className="gs-service"
                    viewBox={`0 0 ${ScreenSize.width} ${ScreenSize.height}`}>
                    <g>{children}</g>
                </svg>
            </div>
        );
    }
}

export default Screen;
