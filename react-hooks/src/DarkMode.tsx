import { createContext, useState, useContext } from "react"

export const ThemeContext = createContext(null);

export default function DarkMode() {
    
    const [theme, setTheme] = useState<string>("light");
    const toggleTheme = () => setTheme(p => p === "light" ? "dark" : "light");


    interface contextType {
        theme: String,
        toggleTheme: () => void

}
    return (
    <ThemeContext.Provider  value={{theme, toggleTheme} : contextType } >
        <Page />
    </ThemeContext.Provider>
)
}

function Page() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme === "light" ? "white" : "black"
        }}>
        <h3>ThemeSwitcher</h3>
        <p>{theme}</p>
        <button onClick={toggleTheme}>Switch to {theme} </button>
        </div>
        
    )
}