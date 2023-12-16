/// <reference types="react" />
declare type Props = Readonly<{
    'data-test-id'?: string;
    label: string;
    onChange: (val: string) => void;
    placeholder?: string;
    value: string;
}>;
export default function TextInput({ label, value, onChange, placeholder, 'data-test-id': dataTestId, }: Props): JSX.Element;
export {};
