import React from 'react';
import { ARProps } from '@r2u/react-ar-components';
export interface InstructionsProps extends ARProps {
    hasWaterMark: boolean;
    onOpen: () => void;
}
declare const InstructionsModal: React.FC<InstructionsProps>;
export default InstructionsModal;
