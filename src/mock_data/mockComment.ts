export interface Comment {
    message: string;
    username: string;
    avatar: string;
    timestamp: string;
    attachedFiles: File;
}

export const mockComments: Comment[] = [];