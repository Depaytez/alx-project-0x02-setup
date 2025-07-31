export interface Pill {
 text: string;
}

export interface CardProps {
 title: string;
 content: string;
}

export interface PostModalProps {
 isOpen: boolean;
 onClose: () => void;
 onSubmit: (title: string, content: string) => void;
}

export interface PostData {
 title: string;
 content: string;
 id: string;
}

// export interface ButtonProps {
//  size?: string;
//  style:
// }