import type { SKUHandler } from './types';
interface OpenProps {
    element: HTMLElement;
    event?: string;
}
interface AttachProps extends OpenProps {
    sku: string;
    resize?: boolean;
    showFeedback?: boolean;
    showInstructions?: 'once' | 'always' | 'never';
    fallbackOptions?: {
        alertMessage?: string;
        fallback?: 'viewer' | 'full';
    };
}
declare function open({ element, event }: OpenProps): Promise<void>;
declare function attach({ sku, element, event, showInstructions, showFeedback, fallbackOptions, }: AttachProps): Promise<SKUHandler>;
declare function getLink(sku: string): Promise<string>;
declare const _default: {
    attach: typeof attach;
    open: typeof open;
    getLink: typeof getLink;
};
export default _default;
