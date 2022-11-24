export interface HeaderProps {
  notificationsToRead: number;
  onMarksReadAll: () => void;
}

export interface CardProps {
  children: React.ReactNode;
}

export interface message {
  image: string;
  author: string;
  content: string;
  contentPost?: string;
  time: string;
  isRead: boolean;
}

export interface MessagesProps {
  messages: message[];
}

export interface MessageProps {
  image: string;
  author: string;
  content: string;
  contentPost?: string;
  time: string;
  isRead: boolean;
  privateMessage?: string;
}

export interface AvatarProps {
  image: string;
  author: string;
}

export interface ResponseProps {
  author: string;
  content: string;
  contentPost?: string;
  time: string;
  isRead: boolean;
  privateMessage?: string;
}
