enum LocalStorageKey {
    Auth = "auth",
}

type AuthData = { accessToken: string; expire: string };

export const localStorageService = {
    auth: {
        set: (data: AuthData) => {
            localStorage.setItem(LocalStorageKey.Auth, JSON.stringify(data));
        },
        get: (): AuthData | null => {
            const authData = localStorage.getItem(LocalStorageKey.Auth);
            if (!authData) return null;
            return JSON.parse(authData);
        },
    },
};
