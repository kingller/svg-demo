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
                <svg viewBox="0 0 500 500" width="500" height="500">
                    <path d="M20,20 C20,104 216,300 300,300" stroke="#45FF9D" fill="transparent" />
                </svg>
            </div>
        );
    }
}

export default Bezier;
