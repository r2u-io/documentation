import React from 'react';
import { FeedbackProps } from '@components/Modal/Feedback';
interface Props extends FeedbackProps {
    openerElement: HTMLElement;
    openerEvent: string;
}
declare const FeedbackScreen: React.FC<Props>;
export default FeedbackScreen;
