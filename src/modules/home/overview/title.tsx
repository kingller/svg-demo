import React from 'react';

interface TitleProps {
    x: number;
    y: number;
}

class Title extends React.PureComponent<TitleProps> {
    render(): React.ReactNode {
        const { x, y } = this.props;
        return (
            <svg width="577" height="44" viewBox="0 0 577 44" x={x} y={y}>
                <title>Title</title>
                <path
                    className="gs-overview-title"
                    d="M2.51,22.71c0-12.09,7.25-19.44,17.15-19.44A14.28,14.28,0,0,1,30.43,7.91L27.88,11A10.48,10.48,0,0,0,19.76,7.4c-7.5,0-12.4,5.82-12.4,15.16S11.8,37.92,19.81,37.92a10.29,10.29,0,0,0,6.79-2.19v-9.8H18.69V22H30.94V37.72c-2.4,2.5-6.53,4.34-11.59,4.34C9.5,42.06,2.51,34.86,2.51,22.71Z"
                />
                <path
                    className="gs-overview-title"
                    d="M56.77,30H43.09L39.47,41.4h-4.8L47.38,4h5.26L65.34,41.4h-5ZM55.6,26.19l-1.79-5.72C52.43,16.23,51.26,12.15,50,7.81h-.2c-1.18,4.39-2.4,8.42-3.73,12.66l-1.84,5.72Z"
                />
                <path className="gs-overview-title" d="M70.61,4h4.74V41.4H70.61Z" />
                <path
                    className="gs-overview-title"
                    d="M102.71,30H89L85.41,41.4h-4.8L93.32,4h5.26L111.29,41.4h-5Zm-1.17-3.77-1.79-5.72C98.37,16.23,97.2,12.15,96,7.81h-.2c-1.17,4.39-2.4,8.42-3.72,12.66l-1.84,5.72Z"
                />
                <path
                    className="gs-overview-title"
                    d="M124.16,4h4.9L133,24.35c.71,4,1.48,8.06,2.19,12.09h.2c.87-4,1.79-8.06,2.71-12.09L143.24,4h4.29l5.26,20.37c.92,4,1.79,8,2.65,12.09h.26q1.06-6.12,2.14-12.09L161.77,4h4.55L158.56,41.4h-5.67l-5.66-22.56c-.67-3-1.23-5.67-1.84-8.53h-.21c-.61,2.86-1.27,5.57-1.88,8.53L137.73,41.4h-5.61Z"
                />
                <path className="gs-overview-title" d="M172.8,4h21.59V8H177.55V20.62h14.29v4H177.55V41.4H172.8Z" />
                <path
                    className="gs-overview-title"
                    d="M201,4h5.72l7.19,20c.87,2.6,1.74,5.21,2.66,7.81h.25c.87-2.6,1.69-5.21,2.56-7.81L226.5,4h5.72V41.4h-4.44V20.67c0-3.21.36-7.75.61-11h-.2l-3,8.52-7.1,19.45H215l-7.1-19.45-3-8.52h-.2c.2,3.27.56,7.81.56,11V41.4H201Z"
                />
                <path
                    className="gs-overview-title"
                    d="M251.16,36.5,254,33.28a14.67,14.67,0,0,0,10.36,4.64c4.9,0,7.86-2.45,7.86-6.12,0-3.83-2.7-5.05-6.23-6.63l-5.41-2.35c-3.47-1.48-7.6-4.14-7.6-9.6,0-5.77,5-10,11.79-10a15.35,15.35,0,0,1,11,4.64l-2.5,3a12.11,12.11,0,0,0-8.52-3.52c-4.24,0-7,2.15-7,5.52,0,3.62,3.26,5,6.17,6.22l5.36,2.3c4.34,1.89,7.71,4.44,7.71,10,0,5.92-4.9,10.62-12.71,10.62A17.88,17.88,0,0,1,251.16,36.5Z"
                />
                <path
                    className="gs-overview-title"
                    d="M282.2,34.2c0-6,5.26-9,17.05-10.36,0-3.58-1.18-7-5.72-7a15.25,15.25,0,0,0-8.32,3l-1.84-3.22A20.86,20.86,0,0,1,294.29,13c6.74,0,9.6,4.54,9.6,11.38v17h-3.83l-.41-3.32h-.15c-2.65,2.19-5.77,4-9.19,4C285.67,42.06,282.2,39.2,282.2,34.2Zm17.05.46V26.9c-9.34,1.12-12.51,3.42-12.51,7,0,3.17,2.14,4.44,4.9,4.44S296.54,37.06,299.25,34.66Z"
                />
                <path
                    className="gs-overview-title"
                    d="M311,34.2c0-6,5.26-9,17.05-10.36,0-3.58-1.18-7-5.72-7a15.28,15.28,0,0,0-8.32,3l-1.84-3.22A20.9,20.9,0,0,1,323.09,13c6.73,0,9.59,4.54,9.59,11.38v17h-3.83l-.41-3.32h-.15c-2.65,2.19-5.77,4-9.19,4C314.46,42.06,311,39.2,311,34.2Zm17.05.46V26.9c-9.34,1.12-12.51,3.42-12.51,7,0,3.17,2.15,4.44,4.9,4.44S325.33,37.06,328,34.66Z"
                />
                <path
                    className="gs-overview-title"
                    d="M339.22,36.5,342,33.28a14.67,14.67,0,0,0,10.36,4.64c4.9,0,7.86-2.45,7.86-6.12,0-3.83-2.71-5.05-6.23-6.63l-5.41-2.35c-3.47-1.48-7.6-4.14-7.6-9.6,0-5.77,5-10,11.79-10a15.35,15.35,0,0,1,11,4.64l-2.5,3A12.13,12.13,0,0,0,352.8,7.4c-4.24,0-7,2.15-7,5.52,0,3.62,3.27,5,6.18,6.22l5.36,2.3c4.34,1.89,7.71,4.44,7.71,10,0,5.92-4.9,10.62-12.71,10.62A17.88,17.88,0,0,1,339.22,36.5Z"
                />
                <path
                    className="gs-overview-title"
                    d="M381.13,36.5l2.81-3.22a14.67,14.67,0,0,0,10.36,4.64c4.9,0,7.86-2.45,7.86-6.12,0-3.83-2.71-5.05-6.23-6.63l-5.41-2.35c-3.47-1.48-7.61-4.14-7.61-9.6,0-5.77,5-10,11.79-10a15.35,15.35,0,0,1,11,4.64l-2.5,3A12.14,12.14,0,0,0,394.7,7.4c-4.23,0-7,2.15-7,5.52,0,3.62,3.27,5,6.18,6.22l5.36,2.3c4.34,1.89,7.7,4.44,7.7,10,0,5.92-4.9,10.62-12.7,10.62A17.87,17.87,0,0,1,381.13,36.5Z"
                />
                <path
                    className="gs-overview-title"
                    d="M411.81,27.56c0-9,6.07-14.59,12.5-14.59,7.05,0,11,5.1,11,13a18.51,18.51,0,0,1-.21,2.66H416.45c.31,5.92,3.93,9.69,9.19,9.69a11.93,11.93,0,0,0,6.94-2.19l1.68,3.06a16.51,16.51,0,0,1-9.18,2.86C417.73,42.06,411.81,36.7,411.81,27.56Zm19.44-2.24c0-5.62-2.55-8.63-6.89-8.63-3.93,0-7.4,3.17-8,8.63Z"
                />
                <path
                    className="gs-overview-title"
                    d="M442.18,13.68H446l.41,5.05h.15c1.94-3.52,4.75-5.76,7.86-5.76a5.92,5.92,0,0,1,3,.61l-.87,4.08a6.5,6.5,0,0,0-2.7-.46c-2.3,0-5.16,1.64-7,6.38V41.4h-4.64Z"
                />
                <path
                    className="gs-overview-title"
                    d="M459.43,13.68h4.85l5.21,15.77c.87,2.71,1.73,5.57,2.6,8.17h.21c.81-2.6,1.73-5.46,2.55-8.17l5.25-15.77h4.6L474.85,41.4h-5.41Z"
                />
                <path
                    className="gs-overview-title"
                    d="M489.19,5a3.22,3.22,0,0,1,6.43,0,3.22,3.22,0,0,1-6.43,0Zm.87,8.73h4.65V41.4h-4.65Z"
                />
                <path
                    className="gs-overview-title"
                    d="M502,27.56C502,18.33,508.28,13,515.38,13a11.86,11.86,0,0,1,8.11,3.26l-2.39,3.12a8.08,8.08,0,0,0-5.57-2.51c-5,0-8.67,4.34-8.67,10.72s3.47,10.62,8.57,10.62A9.72,9.72,0,0,0,522,35.42l2,3.12A13.23,13.23,0,0,1,515,42.06C507.67,42.06,502,36.75,502,27.56Z"
                />
                <path
                    className="gs-overview-title"
                    d="M526.76,27.56c0-9,6.08-14.59,12.51-14.59,7,0,11,5.1,11,13a18.68,18.68,0,0,1-.2,2.66H531.41c.31,5.92,3.93,9.69,9.19,9.69a11.93,11.93,0,0,0,6.94-2.19l1.68,3.06A16.51,16.51,0,0,1,540,42.06C532.69,42.06,526.76,36.7,526.76,27.56Zm19.45-2.24c0-5.62-2.55-8.63-6.89-8.63-3.93,0-7.4,3.17-8,8.63Z"
                />
                <path
                    className="gs-overview-title"
                    d="M554,38.23l2.3-3.06a12.58,12.58,0,0,0,8.22,3.27c3.67,0,5.46-1.94,5.46-4.34,0-2.81-3.27-4.09-6.33-5.26-3.88-1.43-8.27-3.32-8.27-8,0-4.39,3.52-7.86,9.55-7.86a14.29,14.29,0,0,1,8.62,3.11l-2.24,3A10.43,10.43,0,0,0,565,16.64c-3.47,0-5.06,1.84-5.06,4,0,2.66,3,3.63,6.13,4.8,4,1.53,8.47,3.16,8.47,8.42,0,4.49-3.57,8.22-10.1,8.22A16.7,16.7,0,0,1,554,38.23Z"
                />
            </svg>
        );
    }
}

export default Title;
