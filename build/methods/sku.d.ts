import { Product } from '@services/product';
declare function isActive(sku: string): Promise<boolean>;
declare function getData(sku: string): Promise<Product>;
declare const _default: {
    isActive: typeof isActive;
    getData: typeof getData;
};
export default _default;
