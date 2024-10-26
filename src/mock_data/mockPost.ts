import { Comment } from './mockComment';

export interface Post {
    subject: string;
    message: string;
    comments: Comment[];
    username: string;
    avatar: string;
    timestamp: string;
    attachedFiles: File | null;
}

export const mockPosts: Post[] = [
    {
        subject: `Meeting ${new Date().toLocaleString()}`,
        message: '<button onclick="window.open(\'/online-classroom\', \'_blank\')">Join</button>',
        comments: [],
        username: 'Le Quang Tan',
        avatar: 'https://via.placeholder.com/30',
        timestamp: new Date().toLocaleString(),
        attachedFiles: null,
    }
];