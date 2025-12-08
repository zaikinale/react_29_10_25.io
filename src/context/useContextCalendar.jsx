import { createContext, useContext, useState, useMemo } from 'react';

const typeContext = createContext();

export function TypeProvider({ children }) {
    const [typeQuery, setTypeQuery] = useState('week');

    const value = useMemo(
        () => ({
            typeQuery,
            setTypeQuery,
        }),[typeQuery]
    );

    return (
        <typeContext.Provider value={value}>
            {children}
        </typeContext.Provider>
    );
}

export function useType() {
    const context = useContext(typeContext);
    if (!context) {
        throw new Error('useType должен использоваться внутри typeProvider');
    }
    return context;
}