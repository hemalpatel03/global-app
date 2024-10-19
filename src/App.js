import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext'; // Import ThemeContext
import './App.css'; // Import your CSS file for theme styles

const App = () => {
    return (
        <ThemeProvider>
            <ThemedApp />
        </ThemeProvider>
    );
};

const ThemedApp = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggle function from context

    return (
        <div className={`app ${theme}`}>
            <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <button onClick={toggleTheme}>Switch Theme</button>
        </div>
    );
};

export default App;
