import React from 'react';
import _ from 'lodash';

import Number from './number';

import { TotalSize } from '../utils/enums';

interface NumberGroupProps {
    x: number;
    y: number;
    value: string;
}

class NumberGroup extends React.PureComponent<NumberGroupProps> {
    formatValue = (): string => {
        const { value } = this.props;
        return _.padStart(value, 3, '0');
    };
    render(): React.ReactNode {
        const { x, y } = this.props;
        const values = this.formatValue();

        return (
            <div className="gs-num-group">
                {Array.from(values, (num, index) => {
                    return <Number key={index} value={num} />;
                })}
            </div>
        );
    }
}

export default NumberGroup;
