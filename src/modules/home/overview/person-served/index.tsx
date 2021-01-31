import React from 'react';
import { observer } from 'mobx-react';

import PersonCount from './country-person-count';
import store from '../index.store';

@observer
class PersonServed extends React.Component {
    render(): React.ReactNode {
        const { personCountList } = store;
        const total = personCountList.length;
        return (
            <svg x="64" y="244">
                <g>
                    {Array.from(personCountList, (personCount, index) => {
                        return <PersonCount key={index} data={personCount} index={index} total={total} />;
                    })}
                </g>
            </svg>
        );
    }
}

export default PersonServed;
