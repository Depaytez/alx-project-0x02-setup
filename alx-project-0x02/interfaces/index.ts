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

export interface PostCardAPI {
 id: number;
 title: string;
 body: string;
 userId: number;
}
export interface PostCardProps {
 id: number;
 title: string;
 content: string;
 userId: number;
}

export interface UserCardProps {
 id: number;
 name: string;
 email: string;
 address:{
  street: string;
  city: string;
 }; 
}