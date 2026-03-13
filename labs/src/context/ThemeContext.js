import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    const theme = {
        isDarkTheme,
        toggleTheme,
        colors: {
            primary: '#4a90e2',
            background: isDarkTheme ? '#1a1a2e' : '#f2f2f2',
            card: isDarkTheme ? '#16213e' : '#ffffff',
            text: isDarkTheme ? '#eaeaea' : '#333333',
            danger: '#e74c3c',
            success: '#27ae60',
            neutral: '#95a5a6'
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
