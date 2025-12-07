import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/index.jsx';
import TaskManager from './page/TaskManager/TaskManager.jsx';
import AddBlock from "./components/AddBlock/index.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        <div className={'containerApp'}>
            <BrowserRouter>
                <Header darkMode={darkMode} onToggleTheme={toggleTheme} />
                <Routes>
                    <Route
                        index
                        element={
                            <TaskManager darkMode={darkMode} />
                        }
                    />


                    </ Routes>
                <AddBlock ></AddBlock>
            </ BrowserRouter>


        </div>
    );
}

export default App;