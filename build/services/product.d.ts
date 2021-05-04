export interface Product {
    glb: string;
    usdz: string;
    isActive: boolean;
    name: string;
    modelId?: string;
    placement: 'floor' | 'wall';
    resize: boolean;
    sound: string;
}
export default function (sku: string): Promise<Product>;
