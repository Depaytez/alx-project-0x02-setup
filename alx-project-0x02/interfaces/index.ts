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

export interface ButtonProps {
 children: React.ReactNode;
 size?: 'small' | 'medium' | 'large';
 shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}