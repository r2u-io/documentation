import React from 'react';
import { InstructionsProps } from '@components/Modal/Instructions';
interface Props extends InstructionsProps {
    openerElement: HTMLElement;
    openerEvent: string;
}
declare const InstructionsScreen: React.FC<Props>;
export default InstructionsScreen;
