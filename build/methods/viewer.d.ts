import { SKUHandler } from './types';
interface Params {
    element: HTMLElement;
    sku: string;
    name?: string;
    popup?: boolean;
    progressBarPosition?: 'top' | 'middle' | 'bottom';
    progressBarColor?: string;
    poster?: string;
    autoRotate?: boolean;
}
declare const _default: {
    create: ({ element, sku, name, popup, progressBarPosition, progressBarColor, poster, autoRotate, }: Params) => Promise<SKUHandler>;
};
export default _default;
