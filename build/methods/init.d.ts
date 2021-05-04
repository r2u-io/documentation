interface Params {
    customerId: string;
    language?: 'pt' | 'en';
    analyticsParams?: {
        dataLayerIntegration?: boolean;
        sessionDuration?: number;
    };
}
export default function init({ customerId, language, analyticsParams, }: Params): Promise<void>;
export {};
