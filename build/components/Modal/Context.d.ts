import React, { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    openerElement?: HTMLElement;
    openerEvent?: string;
}
interface ModalContextData {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    toggleModal: () => void;
}
export declare const ModalContext: React.Context<ModalContextData>;
export declare const ModalProvider: React.FC<Props>;
export {};
