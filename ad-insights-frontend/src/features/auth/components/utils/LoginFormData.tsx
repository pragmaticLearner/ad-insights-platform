export interface LoginFormData {
    email: string;
    password: string;
}

export interface SignUpFormData extends LoginFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}