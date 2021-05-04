interface Props {
    screen: 'instructions' | 'feedback';
    iframe: HTMLIFrameElement;
}
export declare function createIframe(): Promise<HTMLIFrameElement>;
export declare function getScreenAlreadyOpened({ screen, iframe, }: Props): Promise<boolean>;
export declare function setScreenAlreadyOpened({ screen, iframe }: Props): void;
export {};
