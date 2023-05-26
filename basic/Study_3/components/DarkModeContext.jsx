import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [DarkState, setDarkState] = useState(false);

    const ToggleDarkMode = () => setDarkState((mode) => !mode);
    return (
        <DarkModeContext.Provider
            value={{ DarkState: DarkState, ToggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}