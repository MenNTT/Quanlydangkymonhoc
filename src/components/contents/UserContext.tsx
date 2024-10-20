import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UserContextType {
    user: {
        email: string;
        fullName: string;
        idNumber: string;
        phone: string;
        address: string;
        companyName: string;
        companyAddress: string;
    } | null;
    login: (
        email: string,
        fullName: string,
        idNumber: string,
        phone: string,
        address: string,
        companyName: string,
        companyAddress: string
    ) => void;
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
    const [user, setUser] = useState<{
        email: string;
        fullName: string;
        idNumber: string;
        phone: string;
        address: string;
        companyName: string;
        companyAddress: string;
    } | null>(null);

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (
        email: string,
        fullName: string,
        idNumber: string,
        phone: string,
        address: string,
        companyName: string,
        companyAddress: string
    ) => {
        const userData = { email, fullName, idNumber, phone, address, companyName, companyAddress };
        setUser(userData);
        sessionStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
