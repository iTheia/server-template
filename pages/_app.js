import "../styles/globals.css";
import Providers from "../providers";
import { useContext, useEffect } from "react";
import { AppContext } from "../providers/App";
import { Loader } from "../components/Loader";

function MyApp({ Component, pageProps }) {
    const { isLoading, setIsLoading } = useContext(AppContext);

    useEffect(() => {}, [setIsLoading]);

    if (isLoading) return <Loader />;

    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    );
}

export default MyApp;
