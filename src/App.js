import React from 'react';
import "./App.style.css";
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <h1>Hello, React with Webpack!</h1>;
        </ThemeProvider>
    );
};

export default App;
