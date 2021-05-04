import { ProductCustomization } from '@r2u/customizer/dist/services/types';
import init from './methods/init';
import sku from './methods/sku';
import ar from './methods/ar';
import viewer from './methods/viewer';
import analytics from './methods/analytics';
import customizer from './methods/customizer';
import qrCode from './methods/qrCode';
import config from './methods/config';
import { SKUHandler } from './methods/types';
import { Product } from '@services/product';
export default interface R2U {
    init: (params: {
        customerId: string;
        language?: 'pt' | 'en';
        analyticsParams?: {
            dataLayerIntegration?: boolean;
            sessionDurationMinutes?: number;
        };
    }) => Promise<void>;
    config: {
        changeLanguage(language: 'pt' | 'en'): Promise<void>;
    };
    sku: {
        isActive: (sku: string) => Promise<boolean>;
        getData: (sku: string) => Promise<Product>;
    };
    ar: {
        open: (params: {
            element: HTMLElement;
            event: string;
        }) => Promise<void>;
        attach: (params: {
            element: HTMLElement;
            sku: string;
            eventType?: string;
            resize?: boolean;
            showInstructions?: 'once' | 'always' | 'never';
            showFeedback?: boolean;
            fallbackOptions?: {
                alertMessage?: string;
                fallback?: 'viewer' | 'full';
            };
        }) => Promise<SKUHandler>;
        getLink: (sku: string) => Promise<string>;
    };
    viewer: {
        create: (params: {
            element: HTMLElement;
            sku: string;
            name?: string;
            popup?: boolean;
            progressBarPosition?: 'top' | 'middle' | 'bottom';
            poster?: string;
            autoRotate?: boolean;
        }) => Promise<SKUHandler>;
    };
    analytics: {
        send: (params: {
            event: string;
            data: Record<string, string | number>;
            scope?: 'event' | 'page' | 'session' | 'sku';
        }) => Promise<void>;
    };
    customizer: {
        create: (params: {
            element: HTMLElement;
            sku: string;
            onConfirm: (productCustomization: ProductCustomization) => void;
        }) => Promise<void>;
    };
    qrCode: {
        create: (params: {
            element: HTMLElement;
            sku: string;
            showInstructions?: 'once' | 'always' | 'never';
        }) => Promise<SKUHandler>;
    };
}
declare global {
    interface Window {
        R2U: R2U;
    }
}
export { init, sku, ar, viewer, analytics, customizer, qrCode, config };
