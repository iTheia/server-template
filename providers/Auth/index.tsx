import { createContext, useState, useEffect, useContext } from "react";
import { IAuthContext, IUser, ILogIn, ISignUp, IResponse } from "./types";
import { AppContext } from "../App";
import JwtDecode from "jwt-decode";
import Axios from "axios";
import { ENDPOINT } from "../../constants";

export const AuthContext = createContext<IAuthContext>({
    currentUser: false,
    signUp: async () => {},
    logOut: async () => {},
    logIn: async () => {},
    getToken: () => "",
});

export const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<IUser | false>(false);
    const [token, setToken] = useState<string>("");
    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {
        setIsLoading(true);
        Axios.get(`${ENDPOINT}auth/current`, {
            withCredentials: true,
        }).then((response) => setSession(response));
        setIsLoading(false);
    }, [setIsLoading]);

    async function setSession(response: IResponse) {
        try {
            const { data } = response;
            if (data.error) {
                throw new Error(data.message);
            }
            const decoded = JwtDecode(data.token) as IUser;
            setCurrentUser((prev) => ({ ...prev, ...decoded }));
            setToken(data.token);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    async function signUp(values: ISignUp) {
        try {
            const response = await Axios.post(`${ENDPOINT}auth/signup`, values);
            setSession(response);
        } catch (error) {
            alert(error);
        }
    }

    async function logOut() {
        try {
            await Axios.get(`${ENDPOINT}auth/close`);
            setToken("");
            setCurrentUser(false);
        } catch (error) {
            alert(error);
        }
    }

    async function logIn(values: ILogIn) {
        try {
            const response = await Axios.post(`${ENDPOINT}auth/login`, values);
            setSession(response);
        } catch (error) {
            alert(error);
        }
    }
    function getToken() {
        if (token === "") {
            return "Bearrer ";
        }
        const { exp } = JwtDecode(token) as any;
        if (exp < Date.now().valueOf() / 1000) {
            Axios.get(`${ENDPOINT}auth/current`)
                .then((response) => setSession(response))
                .catch(() => {
                    setToken("");
                    setCurrentUser(false);
                });
        }
        return `Bearrer ${token}`;
    }

    return (
        <AuthContext.Provider
            value={{ currentUser, getToken, logIn, logOut, signUp }}
        >
            {children}
        </AuthContext.Provider>
    );
};
