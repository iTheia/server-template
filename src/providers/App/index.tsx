import { createContext, useState } from "react";
import { IAppContext } from "./types";

export const AppContext = createContext<IAppContext>({
    isLoading: false,
    setIsLoading: () => null,
});

export const AppProvider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </AppContext.Provider>
    );
};
