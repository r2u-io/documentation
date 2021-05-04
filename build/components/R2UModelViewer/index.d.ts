import React from 'react';
import { ModelViewerElement, ModelViewerProps } from '@r2u/react-ar-components';
interface Props extends ModelViewerProps {
    exitImgSrc?: string;
    expandImgSrc?: string;
    popup?: boolean;
    progressBarColor?: string;
    progressBarPosition?: 'top' | 'middle' | 'bottom';
    waterMarkPosition?: string;
    refViewer: React.RefObject<ModelViewerElement>;
    refViewerPopup: React.RefObject<ModelViewerElement>;
}
declare const R2UModelViewer: React.FC<Props>;
export default R2UModelViewer;
