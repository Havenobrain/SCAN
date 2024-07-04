enum LocalStorageKey {
    Auth = "auth",
}

type AuthData = {
    accessToken: string;
    refreshToken: string;
    expire: string;
};

export const localStorageService = {
    auth: {
        set: (data: AuthData) => {
            try {
                console.log("Trying to save auth data to localStorage:", data);
                localStorage.setItem(LocalStorageKey.Auth, JSON.stringify(data));
                console.log("Auth data saved to localStorage successfully.");
            } catch (e) {
                console.error("Failed to save auth data to localStorage:", e);
            }
        },
        get: (): AuthData | null => {
            try {
                const authData = localStorage.getItem(LocalStorageKey.Auth);
                if (!authData) {
                    console.log("No auth data found in localStorage");
                    return null;
                }
                console.log("Retrieved auth data from localStorage:", authData);
                return JSON.parse(authData);
            } catch (e) {
                console.error("Failed to retrieve auth data from localStorage:", e); 
                return null;
            }
        },
    },
};