import React from 'react';

class Bezier extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <svg>
                    <path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent" />
                </svg>
                <svg>
                    <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent" />
                </svg>
            </div>
        );
    }
}

export default Bezier;
