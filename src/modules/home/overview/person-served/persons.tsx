import React from 'react';
import { observer } from 'mobx-react';

import Person from './person';

interface PersonsProps {
    count: number;
    containerWidth: number;
}

const baseCount = 1000000;
const personWidth = 9;

@observer
class Persons extends React.Component<PersonsProps> {
    render(): React.ReactNode {
        const { count, containerWidth } = this.props;
        const personCount = count.toString().length;
        const firstLineCount = Math.floor(personCount / 2);
        const secondLineCount = Math.ceil(personCount / 2);
        let offset = 0;
        if (firstLineCount < secondLineCount) {
            offset = personWidth / 2;
        }
        const x = (containerWidth - secondLineCount * personWidth) / 2;
        return (
            <svg x={x} y={43}>
                <g>
                    {Array.from({ length: firstLineCount }, (value, index) => {
                        return <Person key={index} x={index * personWidth + offset} y={0} />;
                    })}
                    {Array.from({ length: secondLineCount }, (value, index) => {
                        return <Person key={`sec${index}`} x={index * personWidth} y={22} />;
                    })}
                </g>
            </svg>
        );
    }
}

export default Persons;
