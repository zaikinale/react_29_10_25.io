import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/index.jsx';
import TaskManager from './components/TaskManager/TaskManager.jsx';

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <>
            <Header darkMode={darkMode} onToggleTheme={toggleTheme} />
            <TaskManager darkMode={darkMode} />
        </>
    );
}

export default App;