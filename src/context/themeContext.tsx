import { createContext, useEffect, useState, type ReactNode } from "react";
 

type ThemeContextType = {
    dark: boolean;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {children: ReactNode;};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [dark, setDark] = useState<boolean>(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    const toggleTheme = () => {
        setDark((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;