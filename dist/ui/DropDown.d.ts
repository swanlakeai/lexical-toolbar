import { ReactNode } from 'react';
import * as React from 'react';
export declare function DropDownItem({ children, className, onClick, title, }: {
    children: React.ReactNode;
    className: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    title?: string;
}): React.JSX.Element;
export default function DropDown({ buttonLabel, buttonAriaLabel, buttonClassName, buttonIconClassName, children, stopCloseOnClickSelf, }: {
    buttonAriaLabel?: string;
    buttonClassName: string;
    buttonIconClassName?: string;
    buttonLabel?: string;
    children: ReactNode;
    stopCloseOnClickSelf?: boolean;
}): JSX.Element;
