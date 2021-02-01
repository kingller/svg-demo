import React from 'react';
import classnames from 'classnames';

interface BezierAnimationState {
    animated: boolean;
    totalLength: number;
}

class BezierAnimation extends React.Component<{}, BezierAnimationState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            animated: false,
            totalLength: 0,
        };
    }

    pathEl: SVGPathElement;
    savePath = (node: SVGPathElement): void => {
        this.pathEl = node;
    };

    componentDidMount(): void {
        this.setState({
            animated: true,
            totalLength: this.pathEl.getTotalLength(),
        });
    }

    render(): React.ReactNode {
        const { animated, totalLength } = this.state;
        let style: React.CSSProperties = undefined;
        if (animated) {
            style = {
                strokeDasharray: totalLength,
                strokeDashoffset: totalLength,
            };
        }

        const { x: sourceX, y: sourceY } = { x: 20, y: 20 };
        const { x: targetX, y: targetY } = { x: 300, y: 300 };
        const yOffset = Math.abs(targetY - sourceY) * 0.3;
        const centerY = targetY < sourceY ? sourceY - yOffset : sourceY + yOffset;
        const xOffset = Math.abs(targetX - sourceX) * 0.3;
        const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
        const dAttr = `M${sourceX},${sourceY} C${sourceX},${centerY} ${centerX},${targetY} ${targetX},${targetY}`;

        return (
            <svg width="500" height="500" viewBox={`0 0 500 500`}>
                <defs>
                    <style>{`.gs-edge-path{fill:none;stroke:url(#linear);stroke-width:1;stroke-dasharray:100%;stroke-dashoffset:100%;}
                    .gs-edge-path.animated{animation:paintLine 1.2s linear infinite;animation-fill-mode:forwards;}
                    @keyframes paintLine {
                        100%{stroke-dashoffset:0;}
                    }`}</style>
                    <linearGradient id="linear">
                        <stop offset="0%" style={{ stopColor: '#45FF9D' }} />
                        <stop offset="100%" style={{ stopColor: '#48D0FF', stopOpacity: 0.83 }} />
                    </linearGradient>
                </defs>
                <path
                    className={classnames('gs-edge-path', {
                        animated,
                    })}
                    d={dAttr}
                    style={style}
                    ref={this.savePath}
                />
            </svg>
        );
    }
}

export default BezierAnimation;
