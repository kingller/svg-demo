import React from 'react';

class PathAnimation extends React.Component {
    render(): React.ReactNode {
        const { x: sourceX, y: sourceY } = { x: 20, y: 20 };
        const { x: targetX, y: targetY } = { x: 300, y: 300 };
        const yOffset = Math.abs(targetY - sourceY) * 0.3;
        const centerY = targetY < sourceY ? sourceY - yOffset : sourceY + yOffset;
        const xOffset = Math.abs(targetX - sourceX) * 0.3;
        const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
        const dAttr = `M${sourceX},${sourceY} C${sourceX},${centerY} ${centerX},${targetY} ${targetX},${targetY}`;

        return (
            <div>
                <div>沿着path运动</div>
                <svg width="320" height="320" viewBox={`0 0 500 500`}>
                    <circle cx="0" cy="0" r={2} fill="#FF4AA1">
                        <animateMotion path={dAttr} dur="2s" repeatCount="indefinite" rotate="auto"></animateMotion>
                    </circle>
                </svg>
                <div>如果已经有了path轨迹，则可以使用mPath元素。</div>
                <svg width="320" height="320" viewBox={`0 0 500 500`}>
                    <defs>
                        <style>{`.gs-edge-path{fill:none;stroke:url(#linear);stroke-width:1;}`}</style>
                        <linearGradient id="linear">
                            <stop offset="0%" style={{ stopColor: '#45FF9D' }} />
                            <stop offset="100%" style={{ stopColor: '#48D0FF', stopOpacity: 0.83 }} />
                        </linearGradient>
                    </defs>
                    <path id="gsPath" className="gs-edge-path" d={dAttr} />
                    <circle cx="0" cy="0" r={2} fill="#FF4AA1">
                        <animateMotion dur="2s" repeatCount="indefinite" rotate="auto">
                            <mpath href="#gsPath"></mpath>
                        </animateMotion>
                    </circle>
                </svg>
            </div>
        );
    }
}

export default PathAnimation;
