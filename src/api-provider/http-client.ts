import { localStorageService } from "../services/local-storage-service/local-storage-service";

const baseUrl = "https://gateway.scan-interfax.ru";

export const httpClient = {
    async get<T>(url: string): Promise<T> {
        const token = localStorageService.auth.get()?.accessToken ?? "";
        const Authorization = `Bearer ${token}`;

        return fetch(baseUrl + url, {
            method: "GET",
            headers: {
                Authorization,
            },
        })
            .then(async (res) => {
                const data = await res.json();
                return {
                    data,
                    ok: res.ok,
                };
            })
            .then(({ data, ok }) => {
                if (!ok) throw new Error(data.message);
                return data;
            });
    },
    async post<T>(url: string, data: any): Promise<T> {
        const token = localStorageService.auth.get()?.accessToken ?? "";
        const Authorization = `Bearer ${token}`;

        return fetch(baseUrl + url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Authorization,
            },
        })
            .then(async (res) => {
                const data = await res.json();
                return {
                    data,
                    ok: res.ok,
                };
            })
            .then(({ data, ok }) => {
                if (!ok) throw new Error(data.message);
                return data;
            });
    },
};
