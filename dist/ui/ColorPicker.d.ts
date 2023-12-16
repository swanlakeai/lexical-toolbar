import { ReactNode } from 'react';
interface ColorPickerProps {
    buttonAriaLabel?: string;
    buttonClassName: string;
    buttonIconClassName?: string;
    buttonLabel?: string;
    color: string;
    children?: ReactNode;
    onChange?: (color: string) => void;
    title?: string;
}
export default function ColorPicker({ color, children, onChange, ...rest }: Readonly<ColorPickerProps>): JSX.Element;
export interface Position {
    x: number;
    y: number;
}
export declare function toHex(value: string): string;
export {};
