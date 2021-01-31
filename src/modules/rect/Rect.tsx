import React from 'react';

class Rect extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <svg>
                    <rect x="0" y="0" width="100" height="100" stroke="#000000" fill="#5ac1dc" />
                </svg>
                <svg>
                    <path d="M 0,0 L 100,0 l 0, 100 L 0, 100Z" stroke="#000000" fill="#5ac1dc" />
                </svg>
            </div>
        );
    }
}

export default Rect;
