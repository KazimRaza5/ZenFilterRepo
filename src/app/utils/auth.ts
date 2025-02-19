// utils/auth.ts

export const registerUser = (email: string, password: string): boolean => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if email already exists
    if (users.some((user: any) => user.email === email)) {
        return false; // Email already registered
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    return true; // Successfully registered
};

export const authenticateUser = (email: string, password: string): boolean => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if credentials match
    return users.some((user: any) => user.email === email && user.password === password);
};

export const isAuthenticated = (): boolean => {
    return localStorage.getItem("authenticatedUser") !== null;
};

export const logoutUser = () => {
    localStorage.removeItem("authenticatedUser");
};

export const setAuthenticatedUser = (email: string) => {
    localStorage.setItem("authenticatedUser", JSON.stringify({ email }));
};
