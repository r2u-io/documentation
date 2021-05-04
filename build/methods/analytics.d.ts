import { AnalyticsRecord } from '@r2u/analytics';
declare function send({ event, data, scope }: AnalyticsRecord): Promise<void>;
declare const _default: {
    send: typeof send;
};
export default _default;
