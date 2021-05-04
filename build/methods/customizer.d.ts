import { ProductCustomization } from '@r2u/customizer/dist/services/types';
interface Props {
    sku: string;
    element: HTMLElement;
    onConfirm: (productCustomization: ProductCustomization) => void;
}
declare function create({ sku, element, onConfirm }: Props): Promise<void>;
declare function isActive(sku: string): Promise<boolean>;
declare const _default: {
    create: typeof create;
    isActive: typeof isActive;
};
export default _default;
