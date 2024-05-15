enum LocalStorageKey {
    Auth = "auth",
}

type AuthData = { accessToken: string; expire: string };

export const localStorageService = {
    auth: {
        set: (data: AuthData) => {
            localStorage.setItem(LocalStorageKey.Auth, JSON.stringify(data));
        },
        get: (): AuthData => {
            return JSON.parse(localStorage.getItem(LocalStorageKey.Auth) ?? "");
        },
    },
};
