import { api } from "@/lib/api";
import type {SignUpRequest} from "../components/utils/LoginRequest.tsx";

export const login = async (email: string, password: string) => {
    const response = api.post("/auth/login", {
        email,
        password,
    });
    console.log("Login response: ", response);
    return response;
};

export const signup = async (data: SignUpRequest) => {
    const response = api.post("/auth/signup", data);
    console.log("Sign up response: ", response);
    return response;
};
