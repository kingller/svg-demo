import React from 'react';

class Circle extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <svg>
                    <circle cx="55" cy="55" r="50" stroke="#000000" fill="#5ac1dc" />
                </svg>
                <svg>
                    <path d="M 5,55 A 50,50,0,0,1,105,55Z" stroke="#000000" fill="#5ac1dc" />
                </svg>
                <svg>
                    <path d="M 5,55 A 50,50,0,0,1,55,5L55,55Z" stroke="#000000" fill="#5ac1dc" />
                </svg>
                <svg>
                    <path d="M 5,55 A 50,50,0,1,1,5,56Z" stroke="#000000" fill="#5ac1dc" />
                </svg>
            </div>
        );
    }
}

export default Circle;
