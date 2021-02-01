export enum ChartCenter {
    x = 249.89,
    y = 272.5,
}

export enum ChartColors {
    leftTop = '#5ac1dc',
    leftBottom = '#d72572',
    rightTop = '#6bbbae',
}

export enum ChartPercentColors {
    leftTop = '#4aeaff',
    leftBottom = '#ff4aa1',
    rightTop = '#45ff9d',
}

/** 将角度转为弧度 */
export function convertDegreeToRadian(degree: number): number {
    return ((2 * Math.PI) / 360) * degree;
}

/** 获取圆上从顶部的点到另一个点的位移 */
export function getDisplacementOnCircle({
    radius,
    degree,
}: {
    /** 半径 */
    radius: number;
    /** 角度 */
    degree: number;
    /* eslint-disable @typescript-eslint/indent */
}): {
    x: number;
    y: number;
} {
    /* eslint-enable @typescript-eslint/indent */
    if (degree < 90) {
        // 弧度
        const radian = convertDegreeToRadian(90 - degree);
        const moveX = radius * Math.cos(radian);
        const moveY = radius - radius * Math.sin(radian);
        return {
            x: moveX,
            y: moveY,
        };
    } else if (degree < 180) {
        // 弧度
        const radian = convertDegreeToRadian(degree - 90);
        const moveX = radius * Math.cos(radian);
        const moveY = radius + radius * Math.sin(radian);
        return {
            x: moveX,
            y: moveY,
        };
    } else if (degree < 270) {
        // 弧度
        const radian = convertDegreeToRadian(270 - degree);
        const moveX = -radius * Math.cos(radian);
        const moveY = radius + radius * Math.sin(radian);
        return {
            x: moveX,
            y: moveY,
        };
    } else {
        // 弧度
        const radian = convertDegreeToRadian(degree - 270);
        const moveX = -radius * Math.cos(radian);
        const moveY = radius - radius * Math.sin(radian);
        return {
            x: moveX,
            y: moveY,
        };
    }
}

/** 获取圆上点的坐标 */
export function getPositionOnCircle({
    chartCenter,
    radius,
    degree,
}: {
    /*** 圆心坐标 */
    chartCenter: {
        x: number;
        y: number;
    };
    /** 半径 */
    radius: number;
    /** 角度 */
    degree: number;
    /* eslint-disable @typescript-eslint/indent */
}): {
    x: number;
    y: number;
} {
    /* eslint-enable @typescript-eslint/indent */
    if (degree < 90) {
        // 弧度
        const radian = convertDegreeToRadian(90 - degree);
        return {
            x: chartCenter.x + radius * Math.cos(radian),
            y: chartCenter.y - radius * Math.sin(radian),
        };
    } else if (degree < 180) {
        // 弧度
        const radian = convertDegreeToRadian(degree - 90);
        return {
            x: chartCenter.x + radius * Math.cos(radian),
            y: chartCenter.y + radius * Math.sin(radian),
        };
    } else if (degree < 270) {
        // 弧度
        const radian = convertDegreeToRadian(270 - degree);
        return {
            x: chartCenter.x - radius * Math.cos(radian),
            y: chartCenter.y + radius * Math.sin(radian),
        };
    } else {
        // 弧度
        const radian = convertDegreeToRadian(degree - 270);
        return {
            x: chartCenter.x - radius * Math.cos(radian),
            y: chartCenter.y - radius * Math.sin(radian),
        };
    }
}
