export interface LoginRequest {
    email: string;
    password: string;
}

export interface SignUpRequest extends LoginRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}