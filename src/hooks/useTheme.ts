import { createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// 1. Buat Context di sini dan EXPORT agar bisa dipakai Provider
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Buat Hook di sini dan EXPORT
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}