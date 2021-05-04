import { SKUHandler } from './types';
interface Props {
    element: HTMLElement;
    sku: string;
    showInstructions?: 'once' | 'always' | 'never';
}
declare function create({ element, sku, showInstructions, }: Props): Promise<SKUHandler>;
declare const _default: {
    create: typeof create;
};
export default _default;
