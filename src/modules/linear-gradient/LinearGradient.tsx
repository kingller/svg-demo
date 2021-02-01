import React from 'react';
import classnames from 'classnames';

class LinearGradient extends React.Component {
    render(): React.ReactNode {
        const { x: sourceX, y: sourceY } = { x: 20, y: 20 };
        const { x: targetX, y: targetY } = { x: 300, y: 300 };
        const yOffset = Math.abs(targetY - sourceY) * 0.3;
        const centerY = targetY < sourceY ? sourceY - yOffset : sourceY + yOffset;
        const xOffset = Math.abs(targetX - sourceX) * 0.3;
        const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
        const dAttr = `M${sourceX},${sourceY} C${sourceX},${centerY} ${centerX},${targetY} ${targetX},${targetY}`;

        return (
            <>
                <svg width="300" height="500" viewBox={`0 0 300 500`}>
                    <defs>
                        <linearGradient id="linearRect">
                            <stop offset="0%" style={{ stopColor: '#ffcc00' }}></stop>
                            <stop offset="100%" style={{ stopColor: '#0099cc' }}></stop>
                        </linearGradient>
                    </defs>
                    <rect
                        x="20"
                        y="20"
                        width="200"
                        height="100"
                        style={{ fill: 'url(#linearRect)', stroke: 'black' }}></rect>
                </svg>
                <svg width="500" height="500" viewBox={`0 0 500 500`}>
                    <defs>
                        <linearGradient id="linear">
                            <stop offset="0%" style={{ stopColor: '#45FF9D' }} />
                            <stop offset="100%" style={{ stopColor: '#48D0FF', stopOpacity: 0.83 }} />
                        </linearGradient>
                    </defs>
                    <path d={dAttr} style={{ fill: 'none', stroke: 'url(#linear)', strokeWidth: 1 }} />
                </svg>
            </>
        );
    }
}

export default LinearGradient;
