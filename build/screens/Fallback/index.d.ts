import React from 'react';
export interface FallbackProps {
    fallbackOptions: {
        alertMessage?: string;
        fallback?: 'viewer' | 'full';
    };
    glb?: string;
}
export interface FallbackScreenProps extends FallbackProps {
    openerElement: HTMLElement;
    openerEvent: string;
}
declare const FallbackScreen: React.FC<FallbackScreenProps>;
export default FallbackScreen;
