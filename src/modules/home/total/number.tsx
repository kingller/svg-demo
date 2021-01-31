import React from 'react';

import { TweenMax, Power1, Power4, Bounce } from 'gsap';

interface NumberProps {
    value: string;
}

interface NumberState {
    value: string;
}

class Number extends React.PureComponent<NumberProps, NumberState> {
    constructor(props: NumberProps) {
        super(props);
        this.state = {
            value: props.value,
        };
    }
    componentDidMount(): void {
        TweenMax.set(this.upperEl, { rotationX: 0.01, transformOrigin: '50% 100%' });
        TweenMax.set(this.baseUpperEl, { rotationX: 0.01, transformOrigin: '50% 100%' });
        TweenMax.set(this.lowerEl, { rotationX: 0.01, transformOrigin: '50% 0%' });
        TweenMax.set(this.baseLowerEl, { rotationX: 0.01, transformOrigin: '50% 0%' });
    }

    componentDidUpdate(): void {
        if (this.props.value !== this.state.value) {
            this.tick();
        }
    }

    upperEl: HTMLDivElement;
    saveUpper = (node: HTMLDivElement): void => {
        this.upperEl = node;
    };

    baseUpperEl: HTMLDivElement;
    saveBaseUpper = (node: HTMLDivElement): void => {
        this.baseUpperEl = node;
    };

    lowerEl: HTMLDivElement;
    saveLower = (node: HTMLDivElement): void => {
        this.lowerEl = node;
    };

    baseLowerEl: HTMLDivElement;
    saveBaseLower = (node: HTMLDivElement): void => {
        this.baseLowerEl = node;
    };

    tick = (): void => {
        const { value } = this.props;
        // animate tick
        TweenMax.fromTo(this.upperEl, 0.3, { alpha: 0 }, { alpha: 1, ease: Power4.easeIn });
        TweenMax.fromTo(this.baseUpperEl, 0.3, { rotationX: 0 }, { rotationX: -90, ease: Power1.easeIn });
        TweenMax.fromTo(
            this.baseLowerEl,
            0.5 + 0.2 * Math.random(),
            { rotationX: 90 },
            { rotationX: 0, ease: Bounce.easeOut, delay: 0.3 }
        );
        TweenMax.fromTo(this.lowerEl, 0.6, { alpha: 1 }, { alpha: 0, ease: Bounce.easeOut, delay: 0.3 }).eventCallback(
            'onComplete',
            () => {
                // update number
                this.setState({
                    value,
                });
            }
        );
    };

    render(): React.ReactNode {
        const { value } = this.props;
        const { value: valueInState } = this.state;
        return (
            <div className="gs-num">
                <div className="upper" ref={this.saveUpper}>
                    <span>{value}</span>
                </div>
                <div className="base upper" ref={this.saveBaseUpper}>
                    <span>{valueInState}</span>
                </div>
                <div className="base lower" ref={this.saveLower}>
                    <span>{valueInState}</span>
                </div>
                <div className="lower" ref={this.saveBaseLower}>
                    <span>{value}</span>
                </div>
            </div>
        );
    }
}

export default Number;
