import React from "react";
import { AppProvider } from "./App";
import { AuthProvider } from "./Auth";

export default function Providers({ children }) {
    return (
        <AppProvider>
            <AuthProvider>{children}</AuthProvider>
        </AppProvider>
    );
}
