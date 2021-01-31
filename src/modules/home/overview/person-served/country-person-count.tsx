import React from 'react';
import { observer } from 'mobx-react';

import { IPersonCount } from '../interface';

import Persons from './persons';
import { toNumeralThousandsGroup } from '../../utils/index';

const countryFlagMap: {
    [name: string]: string;
} = {
    CA: require('../../image/country/CA.svg'),
    CN: require('../../image/country/CN.svg'),
    IN: require('../../image/country/IN.svg'),
    JP: require('../../image/country/JP.svg'),
    KR: require('../../image/country/KR.svg'),
    MM: require('../../image/country/MM.svg'),
    SG: require('../../image/country/SG.svg'),
    TH: require('../../image/country/TH.svg'),
    VN: require('../../image/country/VN.svg'),
};

enum ItemSize {
    width = 233.7,
    height = 169,
}

const flagWidth = 48.42;

interface CountryPersonCountProps {
    data: IPersonCount;
    index: number;
    total: number;
}

@observer
class CountryPersonCount extends React.Component<CountryPersonCountProps> {
    getPosition = (): {
        x: number;
        y: number;
    } => {
        const { index, total } = this.props;
        // 分3行
        let oneLineNum = Math.ceil(total / 3);
        // 一行至少显示3个
        oneLineNum = Math.max(oneLineNum, 3);
        const rowIndex = Math.floor(index / oneLineNum);
        const columnIndex = index % oneLineNum;
        return {
            x: columnIndex * ItemSize.width,
            y: rowIndex * ItemSize.height,
        };
    };

    render(): React.ReactNode {
        const { data, index } = this.props;
        const { country, count } = data;
        const { x, y } = this.getPosition();
        return (
            <svg
                x={x}
                y={y}
                width={ItemSize.width}
                height={ItemSize.height}
                viewBox={`0 0 ${ItemSize.width} ${ItemSize.height}`}>
                <g>
                    <image
                        width={flagWidth}
                        x={(ItemSize.width - flagWidth) / 2}
                        y={0}
                        href={countryFlagMap[country]}
                    />
                    <Persons count={count} containerWidth={ItemSize.width} />
                    <text
                        className="gs-country-person-title"
                        x="50%"
                        y={120}
                        fill="#ffffff"
                        fillOpacity="0.7"
                        fontSize="30"
                        fontWeight="lighter"
                        textAnchor="middle">
                        {`${country} ${toNumeralThousandsGroup(count)}`}
                    </text>
                </g>
            </svg>
        );
    }
}

export default CountryPersonCount;
