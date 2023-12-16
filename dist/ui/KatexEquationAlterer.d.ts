/// <reference types="react" />
declare type Props = {
    initialEquation?: string;
    onConfirm: (equation: string, inline: boolean) => void;
};
export default function KatexEquationAlterer({ onConfirm, initialEquation, }: Props): JSX.Element;
export {};
