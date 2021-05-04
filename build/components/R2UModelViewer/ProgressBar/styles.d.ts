interface ProgressProps {
    color?: string;
    position?: string;
    show: boolean;
}
interface BarProps {
    scale: number;
}
export declare const Progress: import("styled-components").StyledComponent<"div", any, ProgressProps, never>;
export declare const Bar: import("styled-components").StyledComponent<"div", any, BarProps, never>;
export {};
