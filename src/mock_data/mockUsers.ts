// mockUsers.ts
export interface User {
    id: number;
    name: string;
    email: string;
    password: string; // Add password attribute
}

export const mockUsers: User[] = [
    {
        id: 1,
        name: 'Le Quang Tan',
        email: 'lequantan1974@gmail.com',
        password: 'password123', // Add password
    },
    {
        id: 2,
        name: 'Nguyen Thi Men Su',
        email: 'thumen890@gmail.com',
        password: 'password456', // Add password
    },
];