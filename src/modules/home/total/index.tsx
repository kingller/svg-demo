import React from 'react';
import { observer } from 'mobx-react';

import NumberGroup from './number-group';

import store from './index.store';

import { TotalSize, ScreenSize } from '../utils/enums';
import { splitNumberGroup } from '../utils/index';

import './index.less';

interface TotalState {
    scale: number;
}

@observer
class Total extends React.Component<{}, TotalState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            scale: window.innerWidth / ScreenSize.width,
        };
    }

    componentDidMount(): void {
        store.init();
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount(): void {
        store.destroy();
        window.removeEventListener('resize', this.onResize);
    }

    onResize = (): void => {
        const scale = window.innerWidth / ScreenSize.width;
        if (scale !== this.state.scale) {
            this.setState({ scale });
        }
    };

    render(): React.ReactNode {
        const { total } = store;
        if (total <= 0) {
            return null;
        }

        const groups = splitNumberGroup(total);
        const length = groups.length;

        const { scale } = this.state;
        const x = 700 * scale;
        const y = 30 * scale;

        const transformStr = `translate(${x}px, ${y}px) scale(${this.state.scale})`;

        const style: React.CSSProperties = {
            msTransform: transformStr,
            WebkitTransform: transformStr,
            transform: transformStr,
            transformOrigin: '0 0',
        };

        return (
            <div className="gs-total-container" style={style}>
                {Array.from(groups, (value, index) => {
                    let x = 0;
                    if (index > 0) {
                        x = index * (TotalSize.numberWidth * 3 + TotalSize.groupSpacing);
                    }
                    return <NumberGroup key={length - index} x={x} y={0} value={value} />;
                })}
            </div>
        );
    }
}

export default Total;
