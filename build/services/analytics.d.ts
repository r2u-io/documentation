import Analytics from '@r2u/analytics';
declare const arLink: {
    componentDidMount: () => Promise<any>;
    onClick: () => Promise<unknown>;
    onFallback: () => Promise<unknown>;
};
declare const arModelViewer: {
    componentDidMount: () => Promise<unknown>;
    onClick: () => Promise<unknown>;
};
declare const setSku: (sku: string) => void;
declare const isActive3D: (isActive: boolean) => void;
export default function (client: string, dataLayerIntegration?: boolean, sessionDurationMinutes?: number): Analytics;
export { arLink, arModelViewer, setSku, isActive3D };
