import React from 'react';

class Line extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <svg>
                    <line x1="0" y1="0" x2="100" y2="100" stroke="#000000" />
                </svg>
                <svg>
                    <path d="M 0,0 L 100,100" stroke="#000000" />
                </svg>
            </div>
        );
    }
}

export default Line;
