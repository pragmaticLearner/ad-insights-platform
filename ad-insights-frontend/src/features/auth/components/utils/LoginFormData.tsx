export interface AuthFormData {
    email: string;
    password: string;
}

export interface SignUpFormData extends AuthFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}