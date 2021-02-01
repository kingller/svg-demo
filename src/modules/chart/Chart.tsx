import React from 'react';

import Triangle from './Triangle';
import TriangleRefs from './TriangleDefs';
import Arc from './Arc';
import ArcRefs from './ArcDefs';
import Piece from './Piece';

interface ChartState {
    rotateDegree: number | '';
}

class Chart extends React.Component<{}, ChartState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            rotateDegree: 30,
        };
    }
    onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        if (!value) {
            this.setState({
                rotateDegree: '',
            });
            return;
        }
        const rotateDegree = parseFloat(value);
        if (!Number.isNaN(rotateDegree)) {
            this.setState({
                rotateDegree,
            });
        }
    };
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
                <svg width="490" height="545" viewBox="0 0 490 545">
                    <Piece title="南亚区DC" />
                </svg>
                <div style={{ display: 'inline-block', padding: '20px', border: '1px solid #ccc' }}>
                    <div>
                        旋转角度：
                        <input value={this.state.rotateDegree} onChange={this.onChange} />
                    </div>
                    <svg width="490" height="545" viewBox="0 0 490 545">
                        <Piece title="南亚区DC" rotateDegree={this.state.rotateDegree || 0} />
                    </svg>
                </div>
                <svg width="490" height="545" viewBox="0 0 490 545">
                    <Piece title="南亚区DC" degree={70} />
                    <Piece title="北美区DC" degree={120} rotateDegree={70} color="#6bbbae" index={1} />
                    <Piece title="东亚区DC" degree={170} rotateDegree={190} color="#5ac1dc" index={2} />
                </svg>
            </>
        );
    }
}

export default Chart;
