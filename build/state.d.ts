import Analytics from '@r2u/analytics';
import { Product } from '@services/product';
export interface Customer {
    _id: string;
    slug: string;
    language: 'pt' | 'en';
    waterMarkPosition?: string;
}
interface State {
    init: boolean;
    customer: Customer;
    analytics: Analytics;
    products: Record<string, Product>;
    hasAutoOpenedAR: boolean;
}
declare const state: State;
export default state;
