enum LocalStorageKey {
    Auth = "auth",
}

type AuthData = { accessToken: string; expire: string };

export const localStorageService = {
    auth: {
        setData: (data: AuthData) => {
            localStorage.setItem(LocalStorageKey.Auth, JSON.stringify(data));
        },
    },
};
