/// <reference types="react" />
export default function useModal(): [JSX.Element | null, (title: string, showModal: (onClose: () => void) => JSX.Element) => void];
