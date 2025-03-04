import { createContext } from "react";

export const StoreItem = createContext(null);

const StoreItemProvider = ({ children }) => {
    
    const contextValue = {
        // Add your context values here
    };

    return (
        <StoreItem.Provider value={contextValue}>
            {children}
        </StoreItem.Provider>
    );
}