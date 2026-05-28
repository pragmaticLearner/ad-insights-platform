import { api } from "@/shared/api/api.ts";
import type {ForgotPasswordRequest, LoginRequest, SignUpRequest} from "../types.ts";

export const login = async (request: LoginRequest) => {
    const response = await api.post(
        import.meta.env.VITE_LOGIN_URL,
        request
    );
    return response.data;
};

export const signup = async (request: SignUpRequest) => {
    const response = await api.post(
        import.meta.env.VITE_SIGNUP_URL,
        request
    );
    return response.data;
};

export const forgotPassword = async (request: ForgotPasswordRequest) => {
    const response = await api.post(
        import.meta.env.VITE_FORGOT_PASSWORD_URL,
        request
    );
    return response.data;
}
