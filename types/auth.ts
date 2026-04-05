export types FormDate = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegister
}