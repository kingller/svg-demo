export interface IXYPosition {
    x: number;
    y: number;
}

export interface IService {
    id: string;
    name: string;
    count: number;
    position: IXYPosition;
}

export interface ICustomer {
    id: string;
    position: IXYPosition;
}

export interface IConnection {
    sourceId: string;
    targetId: string;
}

export interface IEdge {
    sourceId: string;
    sourcePosition: IXYPosition;
    targetId: string;
    targetPosition: IXYPosition;
}

export interface IServiceChartItem {
    id: string;
    name: string;
    count: number;
    percent: number;
    degree: number;
    usedDegree: number;
}
