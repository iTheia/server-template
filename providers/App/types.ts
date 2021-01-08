import { Dispatch, SetStateAction } from "react";

export interface IAppContext {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}
