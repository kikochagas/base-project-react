export interface LoginResponse {
    success: boolean;
    code:    number;
    message: string;
    data:    Data;
}

export interface Data {
    name:  string;
    email: string;
    token: string;
}
