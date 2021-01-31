import React from 'react';

interface LogoAnimationProps {
    y: number;
    /** image高度 */
    height?: number;
    /** 动画时长{number}ms */
    animationDuration?: number;
    /** 频率 */
    fps?: number;
}

interface LogoAnimationState {
    width: number;
    x1: number;
    x2: number;
}

class LogoAnimation extends React.PureComponent<LogoAnimationProps, LogoAnimationState> {
    constructor(props: LogoAnimationProps) {
        super(props);

        this.state = {
            width: 0,
            x1: 0,
            x2: 0,
        };
    }

    static defaultProps: Partial<LogoAnimationProps> = {
        height: 47,
        animationDuration: 30000,
        fps: 50,
    };

    componentWillUnmount(): void {
        this.clear();
    }

    private onLoad = (e: React.SyntheticEvent<SVGImageElement>): void => {
        const { width, height } = (e.target as SVGImageElement).getBoundingClientRect();
        // 减去1是为了计算获得的实际宽度有误差
        const actualWidth = Math.floor(width * (this.props.height / height)) - 1;
        this.startAnimation(actualWidth);
    };

    private animationTimeoutId: number;
    private clear = (): void => {
        if (this.animationTimeoutId) {
            window.clearTimeout(this.animationTimeoutId);
            this.animationTimeoutId = undefined;
        }
    };
    private startAnimation = (width: number): void => {
        this.setState({ width });
        this.clear();
        this.animate(width);
    };

    private animate = (width: number): void => {
        let { x1, x2 } = this.state;
        const { animationDuration, fps } = this.props;
        const TIMEOUT = Math.floor((1 / fps) * 1000);
        const moveDis = width / (animationDuration / TIMEOUT);

        if (!x1 && !x2) {
            // 初始化时将x2放在紧跟x1图片后面
            x2 = x1 + width;
        }

        let moveToX1 = x1 - moveDis;
        let moveToX2 = x2 - moveDis;
        if (moveToX1 + width <= 0) {
            moveToX1 = moveToX2 + width;
        } else if (moveToX2 + width <= 0) {
            moveToX2 = moveToX1 + width;
        }
        this.setState({
            x1: moveToX1,
            x2: moveToX2,
        });
        this.animationTimeoutId = window.setTimeout(() => this.animate(width), TIMEOUT);
    };

    render(): React.ReactNode {
        const { y, height } = this.props;
        const { x1, x2 } = this.state;

        return (
            <>
                <image
                    className="gs-logo"
                    height={height}
                    x={0}
                    y={y}
                    href={require('../image/logo/banner.png')}
                    onLoad={this.onLoad}
                    transform={`translate(${x1},0)`}
                />
                <image
                    className="gs-logo"
                    height={height}
                    x={0}
                    y={y}
                    href={require('../image/logo/banner.png')}
                    onLoad={this.onLoad}
                    transform={`translate(${x2},0)`}
                />
            </>
        );
    }
}

export default LogoAnimation;
