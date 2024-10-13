import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UserContextType {
    user: { email: string } | null;
    login: (email: string) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{ email: string } | null>(null);

    // Khôi phục trạng thái người dùng từ sessionStorage khi ứng dụng khởi động
    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string) => {
        const userData = { email };
        setUser(userData);
        // Lưu trạng thái người dùng vào sessionStorage
        sessionStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        // Xóa trạng thái người dùng khỏi sessionStorage
        sessionStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
