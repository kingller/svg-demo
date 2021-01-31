import React from 'react';

interface PersonProps {
    x: number;
    y: number;
}

class Person extends React.PureComponent<PersonProps> {
    render(): React.ReactNode {
        const { x, y } = this.props;
        return (
            <svg width="7.7px" height="19.8px" viewBox="0 0 7 18" x={x} y={y}>
                <title>Person</title>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path
                        d="M0,3.894 L0,10.854 L1.229,10.854 L1.229,5.123 L1.638,5.123 L1.638,17.815 L2.866,17.815 L2.866,10.445 L3.685,10.445 L3.685,17.815 L4.914,17.815 L4.914,5.123 L5.323,5.123 L5.323,10.854 L6.551,10.854 L6.551,3.894 L0,3.894 Z M3.276,3.168 C4.149,3.168 4.859,2.457 4.859,1.58 C4.859,0.708 4.149,0 3.276,0 C2.397,0 1.692,0.708 1.692,1.58 C1.692,2.457 2.397,3.168 3.276,3.168 L3.276,3.168 Z"
                        fill="#4AD2EE"></path>
                </g>
            </svg>
        );
    }
}

export default Person;
