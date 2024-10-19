import React, { createContext, useState, useEffect } from 'react';

// Create ThemeContext with default value
export const ThemeContext = createContext();

// ThemeProvider component to wrap the app
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme is light

    // Check local storage for saved theme on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('app-theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Save the theme in local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    // Function to toggle between light and dark theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
