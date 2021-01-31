import React from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react';

import { IEdge } from '../interface';
import store from '../index.store';

interface EdgeProps {
    data: IEdge;
}

interface EdgeState {
    animated: boolean;
    totalLength: number;
}

@observer
class Edge extends React.Component<EdgeProps, EdgeState> {
    constructor(props: EdgeProps) {
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
        const { data } = this.props;
        const { sourceId, sourcePosition, targetId, targetPosition } = data;
        const { x: sourceX, y: sourceY } = sourcePosition;
        const { x: targetX, y: targetY } = targetPosition;

        const yOffset = Math.abs(targetY - sourceY) * 0.3;
        const centerY = targetY < sourceY ? sourceY - yOffset : sourceY + yOffset;

        const xOffset = Math.abs(targetX - sourceX) * 0.3;
        const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;

        let dAttr = `M${sourceX},${sourceY} C${sourceX},${centerY} ${centerX},${targetY} ${targetX},${targetY}`;

        if (store.servicePlacement[sourceId] === 'leftBottom' && targetY < sourceY) {
            dAttr = `M${sourceX},${sourceY} C${sourceX - xOffset},${sourceY} ${centerX},${targetY +
                yOffset} ${targetX},${targetY}`;
        }

        if (store.servicePlacement[sourceId] === 'leftTop' && targetY >= 200) {
            if (targetY < sourceY && targetX > sourceX) {
                const offset = Math.abs(sourceX - targetX) * 0.2;
                if (targetX < sourceX) {
                    dAttr = `M${sourceX},${sourceY} C${sourceX - offset},${sourceY + offset} ${targetX +
                        offset},${targetY + offset} ${targetX},${targetY}`;
                } else {
                    dAttr = `M${sourceX},${sourceY} C${sourceX + offset},${sourceY + offset} ${targetX -
                        offset},${targetY + offset} ${targetX},${targetY}`;
                }
            }
        }

        if (
            // Y轴位置基本相同时曲率重新设置
            (Math.abs(sourceY - targetY) < 5 && sourceX !== targetX) ||
            // 中国右上侧曲率重新设置
            (store.servicePlacement[sourceId] === 'leftTop' && targetY >= 200 && targetY < sourceY && targetX > sourceX)
        ) {
            const offset = Math.abs(sourceX - targetX) * 0.2;
            if (targetX < sourceX) {
                dAttr = `M${sourceX},${sourceY} C${sourceX - offset},${sourceY + offset} ${targetX + offset},${targetY +
                    offset} ${targetX},${targetY}`;
            } else {
                dAttr = `M${sourceX},${sourceY} C${sourceX + offset},${sourceY + offset} ${targetX - offset},${targetY +
                    offset} ${targetX},${targetY}`;
            }
        } else if (Math.abs(sourceX - targetX) < 5) {
            // X轴位置基本相同时曲率重新设置
            const offset = Math.abs(sourceY - targetY) * 0.2;
            if (targetY < sourceY) {
                dAttr = `M${sourceX},${sourceY} C${sourceX - offset},${sourceY - offset} ${targetX - offset},${targetY +
                    offset} ${targetX},${targetY}`;
            } else {
                dAttr = `M${sourceX},${sourceY} C${sourceX - offset},${sourceY + offset} ${targetX - offset},${targetY -
                    offset} ${targetX},${targetY}`;
            }
        }

        const { animated, totalLength } = this.state;
        let style: React.CSSProperties = undefined;
        if (animated) {
            style = {
                strokeDasharray: totalLength,
                strokeDashoffset: totalLength,
            };
        }

        return (
            <>
                <path
                    id={`${sourceId}@${targetId}`}
                    className={classnames('gs-edge-path', {
                        animated,
                    })}
                    d={dAttr}
                    style={style}
                    ref={this.savePath}
                />
                <circle id={`dot_${sourceId}@${targetId}`} cx="0" cy="0" r={2} fill="#FFFFFF">
                    <animateMotion dur="2s" repeatCount="indefinite" rotate="auto">
                        <mpath href={`#${sourceId}@${targetId}`}></mpath>
                    </animateMotion>
                </circle>
            </>
        );
    }
}

export default Edge;
