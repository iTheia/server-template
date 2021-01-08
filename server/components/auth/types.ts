export type roles = "basic" | "admin" | "expert";

export interface IUserInfo {
    id: number;
    role: roles;
    avatar: string;
    name: string;
}
