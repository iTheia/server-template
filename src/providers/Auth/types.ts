import { AxiosResponse } from "axios";

export interface IAuthContext {
    currentUser: IUser | false;
    getToken: () => string;
    signUp: (values: ISignUp) => Promise<void>;
    logIn: (values: ILogIn) => Promise<void>;
    logOut: () => Promise<void>;
}
export interface IUser {}

export interface ISignUp {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
}

export interface ILogIn {
    email: string;
    password: string;
}

interface ISuccess {
    token: string;
    error: boolean;
}

interface IError {
    message: string;
}

export type IResponse = AxiosResponse<ISuccess & IError>;
