/** @format */

import { useState, useContext, createContext } from "react";


export type contextType = {
    theme: string;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<contextType | null>(null);

export default function DarkMode() {
    const [theme, setTheme] = useState<string>("light");
    const toggleTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Page />
        </ThemeContext.Provider>
    );
}

function Page() {

    const { theme, toggleTheme } : contextType | null = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
                height: "100vh",
                margin : "0"
            }}>
            <h3>ThemeSwitcher</h3>
            <p>{theme}</p>
            <button onClick={toggleTheme}>Switch to {theme} </button>
        </div>
    );
}
